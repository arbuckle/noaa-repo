from django.db import models


class WBAN(models.Model):
    """
    WBAN is the NOAA Station ID.  This table can be updated with detailed station information if a source is found.
    """
    wban = models.CharField(max_length=5)


class Weather(models.Model):
    """
    Weather is the NOAA WeatherType code.
    This is a 6-digit code that may contain a + or - modifier, which is applied in the join table.
    Any given report can have multiple concurrent conditions.
    """
    code = models.CharField(max_length=6)
    name = models.CharField(max_length=32)


class Report_Weather(models.Model):
    """
    M2M Join table for Report and Weather.
    """
    weather = models.ForeignKey(Weather)
    report = models.ForeignKey('Report')
    modifier = models.CharField(max_length=1) # valid values: '-', '+', ' '


class Report(models.Model):
    """
    Report contains a selection of weather data reported from any weather station
    """
    wban = models.ForeignKey(WBAN)
    date = models.DateTimeField()
    weather_type = models.ManyToManyField(Weather, through=Report_Weather)
    visibility = models.DecimalField(max_digits=5, decimal_places=2) # visibility in ?miles?
    temp_dry = models.IntegerField() # dry bulb temp in Fahrenheit
    temp_wet = models.IntegerField() # wet bulb temp in Fahrenheit
    dew_point = models.IntegerField() # Fahrenheit dew point
    humidity = models.IntegerField() # Relative humidity
    wind_speed = models.IntegerField() # in knots.
    wind_direction = models.IntegerField() # 000-360
    pressure = models.DecimalField(max_digits=4, decimal_places=2) # Pressure in ?unknown unit?
    precipitation = models.DecimalField(max_digits=5, decimal_places=2) # Hourly precip in inches


# TODO:  create sets from data for each of these data points in order to determine the structure of the data and ensure that the model accounts for all possible variations.

