# parse CSV and print set of specified data point.


import csv
import psycopg2
import re

from datetime import datetime
from zipfile import ZipFile


class NOAACSVParser(object):
    def __init__(self):
        self.WBAN = 0
        self.Date = 1
        self.Time = 2
        self.Visibility = 6
        self.WeatherType = 8
        self.DryBulbFarenheit = 10
        self.WetBulbFarenheit = 14
        self.DewPointFarenheit = 18
        self.RelativeHumidity = 22
        self.WindSpeed = 24
        self.WindDirection = 26
        self.StationPressure = 30
        self.SeaLevelPressure = 36
        self.HourlyPrecip = 40

        self.WBAN = 0
        self.CallSign = 2
        self.Name = 6
        self.State = 7
        self.Location = 8
        self.Latitude = 9
        self.Longitude = 10
        self.StationHeight = 12
        self.TimeZone = 14


    def normalize(self, val, type = None):
        if val == 'M' or not val:
            val = None

        if type == 'int' and val:
            try:
                val = int(val.strip())
            except ValueError:
                val = None
        elif type == 'decimal' and val:
            try:
                val = float(val.strip())
            except ValueError:
                val = None
        elif type == 'weather' and val:
            val = [re.sub("[-|+]", "", x) for x in val.strip().split(' ')] or None

        return val

    def get_stations_from_file(self, filename):
        csvfile = open(filename, 'r')
        stations = csv.reader(csvfile, delimiter="|")
        stations.next() # throw away the headers

        output = []
        for line in stations:
            if not line:
                continue

            data = (
                self.normalize(line[self.WBAN]),
                self.normalize(line[self.CallSign]),
                self.normalize(line[self.Name]),
                self.normalize(line[self.State]),
                self.normalize(line[self.Location]),
                self.normalize(line[self.Latitude]),
                self.normalize(line[self.Longitude]),
                self.normalize(line[self.StationHeight]),
                self.normalize(line[self.TimeZone])
            )
            output.append(data)

        csvfile.close()
        return output


    def get_hourly_from_file(self, filename):
        csvfile = open(filename, 'r')
        weather = csv.reader(csvfile, delimiter=",")

        weather.next() # throw away the headers

        output = []
        for line in weather:
            if not line:
                continue
            data = (
                self.normalize(line[self.WBAN])
                    , self.normalize(datetime(int(line[self.Date][0:4]), int(line[self.Date][4:6]), int(line[self.Date][6:]), int(line[self.Time][0:2]), int(line[self.Time][2:])), 'date')
                    , self.normalize(line[self.WeatherType], 'weather')
                    , self.normalize(line[self.Visibility], 'decimal')
                    , self.normalize(line[self.DryBulbFarenheit], 'int')
                    , self.normalize(line[self.WetBulbFarenheit], 'int')
                    , self.normalize(line[self.DewPointFarenheit], 'int')
                    , self.normalize(line[self.RelativeHumidity], 'int')
                    , self.normalize(line[self.WindSpeed], 'int')
                    , self.normalize(line[self.WindDirection], 'int')
                    , self.normalize(line[self.StationPressure], 'decimal')
                    , self.normalize(line[self.HourlyPrecip], 'decimal')
                )
            output.append(data)

        csvfile.close()
        return output


class WeatherData(object):
    def __init__(self):
        self.conn = psycopg2.connect(database="noaa", user="noaa_user", password="mfc104~0b")
        self.c = self.conn.cursor()

        self.weather = {}
        self.wban = {}

    def get_wban(self, wban):
        if wban in self.wban.keys():
            return self.wban[wban]

        sql = 'SELECT * FROM weather_wban WHERE wban = \'%s\'' % wban
        self.c.execute(sql)
        if not self.c.fetchall():
            insert = 'INSERT INTO weather_wban (wban) VALUES (\'%s\')' % wban
            self.c.execute(insert)
            self.conn.commit()
        self.c.execute(sql)
        self.wban[wban] = self.c.fetchall()[0][0]
        return self.wban[wban]

    def get_weather_type(self, weather_type):
        if not weather_type:
            return None

        output = []
        for weather in weather_type:
            if not weather:
                continue
            elif weather not in self.weather.keys():
                sql = 'SELECT * FROM weather_weather WHERE code = \'%s\'' % weather
                self.c.execute(sql)
                if not self.c.fetchall():
                    insert = 'INSERT INTO weather_weather (code) VALUES (\'%s\')' % weather
                    self.c.execute(insert)
                    self.conn.commit()
                self.c.execute(sql)
                self.weather[weather] = self.c.fetchall()[0][0]
            output.append(self.weather[weather])
        return output

    def write_report(self, report):
        wban = self.get_wban(report[0])
        weather_type = self.get_weather_type(report[2])

        insert = """
            INSERT INTO weather_report
            (
                wban_id, date, visibility, temp_dry, temp_wet
                , dew_point, humidity, wind_speed, wind_direction
                , pressure, precipitation
            )
            VALUES (
                %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
            )
            RETURNING id
        """.format()
        data = (wban, report[1], report[3], report[4], report[5], report[6]
                , report[7], report[8], report[9], report[10], report[11])

        self.c.execute(insert, data)
        id = self.c.fetchall()[0][0]
        for weather in weather_type:
            self.c.execute('INSERT INTO weather_report_weather (weather_id, report_id) VALUES (%d, %d)' % (weather, id))

    def write_station(self, station):
        id = self.get_wban(station[0])
        update = """
            UPDATE weather_wban
            SET
                callsign = %s
                , name = %s
                , state = %s
                , location = %s
                , latitude = %s
                , longitude = %s
                , altitude = %s
                , tz = %s
            WHERE id = %s
        """.format()
        station = list(station)
        station.append(id)
        self.c.execute(update, station[1:])

class FileGrabber(object):
    # TODO:  Make this a generator.
    def __init__(self):
#        self.base_dir = r'C:/Users/adorkable/Downloads/{filename}'
#        self.data_dir = 'c:/users/adorkable/documents/python/noaa-repo/data/'
        self.base_dir = r'/home/ubuntu/noaa_data/{filename}'
        self.data_dir = r'/home/ubuntu/noaa_data/{filename}'

        self.archive_file = r'QCLCD{yyyy}{mm}.zip'

        self.yyyy = 2011
        self.mm = 0

    def _get_yyyy(self):
        return str(self.yyyy)

    def _get_mm(self):
        return str(self.mm).zfill(2)

    def _unpack(self):
        zip_filename = self.archive_file.format(yyyy=self._get_yyyy(), mm=self._get_mm())
        zipfile = ZipFile(self.base_dir.format(filename=zip_filename))
        file_stations, file_reports = None, None
        for filename in zipfile.namelist():
            if 'station' in filename:
                file_stations = filename
                zipfile.extract(file_stations, self.data_dir)
            if 'hourly' in filename:
                file_reports = filename
                zipfile.extract(file_reports, self.data_dir)
        return self.data_dir + file_reports, self.data_dir + file_stations

    def get_next_filenames(self):
        self._increment()
        return self._unpack()

    def _increment(self):
        if self.mm == 12:
           self.yyyy += 1
           self.mm = 1
        else:
            self.mm += 1

def main():
    file_manager = FileGrabber()
    csv_parser = NOAACSVParser()
    db = WeatherData()

    go = True
    file_reports, file_stations = file_manager.get_next_filenames()
    print file_reports, file_stations
    c = 0
    while go:
        for station in csv_parser.get_stations_from_file(file_stations):
            db.write_station(station)

        for report in csv_parser.get_hourly_from_file(file_reports):
            if report[4]:
                db.write_report(report)
            if c % 10000 == 0:
                print report
            c += 1
        db.conn.commit()

        try:
            file_reports, file_stations = file_manager.get_next_filenames()
            print file_reports, file_stations
        except:
            go = False


if __name__ == "__main__":
    main()
