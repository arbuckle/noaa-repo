# parse CSV and print set of specified data point.


import csv
from zipfile import ZipFile
import psycopg2
import re

from datetime import datetime


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


    def normalize(self, val, type = None):
        if val == 'M' or not val:
            val = 'NULL'

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

        if val is None:
            val = 'NULL'

        return val


    def get_hourly_from_file(self, filename):
        csvfile = open(filename, 'r')
        weather = csv.reader(csvfile, delimiter=",")

        weather.next() # throw away the headers

        output = []
        c = 0
        for line in weather:
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
            c += 1
            if c > 1500:
                break

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
                {wban}, '{date}', {visibility}, {temp_dry}, {temp_wet}
                , {dew_point}, {humidity}, {wind_speed}, {wind_direction}
                , {pressure}, {precipitation}
            )
            RETURNING id
        """.format(
            wban=wban, date=report[1], visibility=report[3], temp_dry=report[4], temp_wet=report[5]
            , dew_point=report[6], humidity=report[7], wind_speed=report[8], wind_direction=report[9]
            , pressure=report[10], precipitation=report[11]
        )

        self.c.execute(insert)
        id = self.c.fetchall()[0][0]
        for weather in weather_type:
            self.c.execute('INSERT INTO weather_report_weather (weather_id, report_id) VALUES (%d, %d)' % (weather, id))


class FileGrabber(object):
    def __init__(self):
        self.base_dir = r'C:/Users/adorkable/Downloads/{filename}'
        self.archive_file = r'QCLCD20{yy}{mm}.zip'
        self.report_file = r'20{yy}{mm}hourly.txt'

        self.yy = 12
        self.mm = 1

    def _get_yy(self):
        return str(self.yy)

    def get_mm(self):
        return str(self.mm).zfill(2)

    def get_next_report_filename(self):
        # unpacks the next archive and returns the txt file name.

        zip_filename = self.archive_file.format(yy=self.get_yy(), mm=self.get_mm())
        zip = ZipFile(self.base_dir.format(filename=zip_filename))
        print zip.namelist()


        return ''

def main():
    file_manager = FileGrabber()
    csv_parser = NOAACSVParser()
    db = WeatherData()

    print file_manager.get_next_filename()

    yy = 13
    mm = '04'

    c = 0
    for report in csv_parser.get_hourly_from_file('C:/Users/adorkable/Downloads/20%d%shourly.txt' % (yy, mm)):
        if report[4] <> 'NULL':
            db.write_report(report)

        if c % 1000 == 0:
            print report
        c += 1
    db.conn.commit()


if __name__ == "__main__":
    main()