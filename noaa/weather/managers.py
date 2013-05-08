from django.db import models

class WeatherCSVManager(models.Manager):

    def hourly(self, wban_id):
        return self.raw("""
            SELECT row_number() OVER (ORDER BY report_date) AS id
            , report_date as "date"
            , temp_dry as "temp_dry"
            FROM (
                SELECT  date_trunc('hour', "weather_report"."date") as "report_date"
            , CAST(avg("weather_report"."temp_dry") AS INT) "temp_dry"
            FROM "weather_report"
            WHERE "weather_report"."wban_id" = %s
            GROUP BY "report_date"
            ) agg
        """, [wban_id])

    def daily(self, wban_id):
        return self.raw("""
            SELECT row_number() OVER (ORDER BY report_date) AS id
                , report_date as "date"
                , temp_dry
                , temp_dry_high
                , temp_dry_low
            FROM (
                SELECT  date_trunc('day', "weather_report"."date") as "report_date"
                    , CAST(avg("weather_report"."temp_dry") AS INT) "temp_dry"
                    , CAST(max("weather_report"."temp_dry") AS INT) "temp_dry_high"
                    , CAST(min("weather_report"."temp_dry") AS INT) "temp_dry_low"
                FROM "weather_report"
                WHERE "weather_report"."wban_id" = %s
                GROUP BY "report_date"
            ) agg
        """, [wban_id])