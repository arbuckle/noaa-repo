from django.db import models, connection

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

    def comparison_daily(self, wban_id_1, wban_id_2):
        return self.raw("""
            SELECT row_number() OVER (ORDER BY agg1.report_date) AS id
                , agg1.report_date as "date"
                , temp_dry_1
                , temp_dry_high_1
                , temp_dry_low_1
                , temp_dry_2
                , temp_dry_high_2
                , temp_dry_low_2
            FROM (
                SELECT
                    "weather_report_daily"."date" as report_date
                     , "weather_report_daily"."temp_dry" as temp_dry_1
                     , "weather_report_daily"."temp_dry_high" as temp_dry_high_1
                     , "weather_report_daily"."temp_dry_low" as temp_dry_low_1
                FROM "weather_report_daily"
                WHERE "weather_report_daily"."wban_id" = %s
            ) agg1 JOIN (
                SELECT
                    "weather_report_daily"."date" as report_date
                     , "weather_report_daily"."temp_dry" as temp_dry_2
                     , "weather_report_daily"."temp_dry_high" as temp_dry_high_2
                     , "weather_report_daily"."temp_dry_low" as temp_dry_low_2
                FROM "weather_report_daily"
                WHERE "weather_report_daily"."wban_id" = %s
            )agg2 ON agg1.report_date = agg2.report_date
            """, [wban_id_1, wban_id_2])

    def comparison_daily_DEPRECATED(self, wban_id_1, wban_id_2):
        return self.raw("""
            SELECT row_number() OVER (ORDER BY agg1.report_date) AS id
                , agg1.report_date as "date"
                , temp_dry_1
                , temp_dry_high_1
                , temp_dry_low_1
                , temp_dry_2
                , temp_dry_high_2
                , temp_dry_low_2

            FROM (
                SELECT  date_trunc('day', "weather_report"."date") as "report_date"
                    , CAST(avg("weather_report"."temp_dry") AS INT) "temp_dry_1"
                    , CAST(max("weather_report"."temp_dry") AS INT) "temp_dry_high_1"
                    , CAST(min("weather_report"."temp_dry") AS INT) "temp_dry_low_1"
                FROM "weather_report"
                WHERE "weather_report"."wban_id" = %s
                GROUP BY "report_date"
            ) agg1 JOIN (
                SELECT  date_trunc('day', "weather_report"."date") as "report_date"
                    , CAST(avg("weather_report"."temp_dry") AS INT) "temp_dry_2"
                    , CAST(max("weather_report"."temp_dry") AS INT) "temp_dry_high_2"
                    , CAST(min("weather_report"."temp_dry") AS INT) "temp_dry_low_2"
                FROM "weather_report"
                WHERE "weather_report"."wban_id" = %s
                GROUP BY "report_date"
            ) agg2 ON agg1.report_date = agg2.report_date
        """, [wban_id_1, wban_id_2])

    def seasonal(self, wban_id, season):
        if season == 'winter':
            start, end = '2011-12-21', '2012-03-20'
        elif season == 'spring':
            start, end = '2012-03-20', '2012-06-21'
        elif season == 'summer':
            start, end = '2012-6-21', '2012-09-22'
        elif season == 'fall':
            start, end = '2012-09-22', '2012-12-21'
        else:
            start, end = '2011-12-21', '2012-12-21'

        c = connection.cursor()
        c.execute("""
            SELECT 1 "id"
                , CAST(%s AS VARCHAR(6)) "season"
                , CAST(avg(temp_dry) AS INT) "temp_dry"
                , CAST(avg(temp_dry_high) AS INT) "temp_dry_high"
                , CAST(avg(temp_dry_low) AS INT) "temp_dry_low"
                , CAST(avg(humidity) AS INT) "humidity"
                , CAST(sum(precipitation) AS INT) "precipitation"
                , CAST(sum(CASE WHEN precipitation is not null THEN 1 ELSE 0 END) AS INT) "precipitation_days"
                , CAST(sum(CASE WHEN weather like '%%SN%%' THEN 1 ELSE 0 END) AS INT) "snow_days"
                , CAST(avg(wind_speed) AS INT) "wind_speed"
                , CAST(avg(wind_direction) AS INT) "wind_direction" -- totally wrong
            FROM (
                SELECT  date_trunc('day', "r"."date") as "report_date"
                    , CAST(avg("r"."temp_dry") AS INT) "temp_dry"
                    , CAST(max("r"."temp_dry") AS INT) "temp_dry_high"
                    , CAST(min("r"."temp_dry") AS INT) "temp_dry_low"
                    , sum("r"."precipitation") "precipitation"
                    , avg("r"."humidity") "humidity"
                    , avg("r"."wind_speed") "wind_speed"
                    , avg("r"."wind_direction") "wind_direction" -- totally wrong
                    , string_agg(w.code, ', ') "weather"
                FROM "weather_report" r LEFT OUTER JOIN
                "weather_report_weather" rw ON r.id = rw.report_id
                LEFT OUTER JOIN "weather_weather" w ON w.id = rw.weather_id
                WHERE "r"."wban_id" = %s -- ARGUMENT
                GROUP BY "report_date"
            ) agg
            WHERE report_date BETWEEN %s AND %s
        """, [season, wban_id, start, end])

        desc = c.description
        return dict(zip([col[0] for col in desc], c.fetchone()))

    def all_seasons(self, wban_id):
        output = []
        seasons = (
            self.seasonal(wban_id, 'winter'),
            self.seasonal(wban_id, 'spring'),
            self.seasonal(wban_id, 'summer'),
            self.seasonal(wban_id, 'fall')
        )

        # This is the only validation performed.
        # If a season is missing temp_dry, it's taken as an indication that no data was collected
        # for this station on the season dates.
        for season in seasons:
            if season['temp_dry']:
                output.append(season)

        return output
