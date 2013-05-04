# parse CSV and print set of specified data point.


import csv
from datetime import datetime

WBAN = 0
Date = 1
Time = 2
Visibility = 6
WeatherType = 8
DryBulbFarenheit = 10
WetBulbFarenheit = 14
DewPointFarenheit = 18
RelativeHumidity = 22
WindSpeed = 24
WindDirection = 26
StationPressure = 30
SeaLevelPressure = 36
HourlyPrecip = 40


def get_hourly_from_file(filename, field):
    csvfile = open(filename, 'r')
    weather = csv.reader(csvfile, delimiter=",")
    headers = weather.next() # throw away the headers

    print headers[field]

    output = []
    c = 0
    for line in weather:
        data = (line[WBAN]
                , datetime(int(line[Date][0:4]), int(line[Date][4:6]), int(line[Date][6:]), int(line[Time][0:2]))
                , line[WeatherType]
                , line[Visibility]
                , line[DryBulbFarenheit]
                , line[WetBulbFarenheit]
                , line[DewPointFarenheit]
                , line[RelativeHumidity]
                , line[WindSpeed]
                , line[WindDirection]
                , line[StationPressure]
                , line[HourlyPrecip]
            )
        output.append(data)
        c += 1
        if c > 100000:
            pass#break

    csvfile.close()
    #output = list(set(output))
    #output.sort()
    return output


yy = 13
mm = '04'


for report in get_hourly_from_file('C:/Users/adorkable/Downloads/20%d%shourly.txt' % (yy, mm), WeatherType):
    print report
