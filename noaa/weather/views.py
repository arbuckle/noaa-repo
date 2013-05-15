from django.views.generic.base import TemplateView
from weather.models import Report
from weather.models import WBAN

class About(TemplateView):
    template_name = 'about.html'

class Stations(TemplateView):
    template_name = 'stations.html'

    def get_context_data(self, **kwargs):
        context = kwargs
        context.update({
            "stations": WBAN.objects.filter(disabled=False).order_by('state', 'name', 'location')
        })
        return context


class Weather(TemplateView):
    template_name = 'weather.html'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id = kwargs.get('id', None)

        # TODO:  pass data to template when station is missing seasonal data.  do not allow the user to compare this station.

        context.update({
            "station": WBAN.objects.get(id=wban_id),
            "stations": WBAN.objects.filter(disabled=False).exclude(id=wban_id).order_by('state', 'name', 'location'),
            "seasons": Report.aggregates.all_seasons(wban_id)
        })
        return context

class WeatherCompare(TemplateView):
    template_name = 'compare.html'

    def _annual_from_seasonal(self, seasons):
        averages = ('temp_dry', 'temp_dry_high', 'temp_dry_low', 'humidity', 'wind_speed')
        sums = ('precipitation', 'precipitation_days', 'snow_days')

        annual = averages + sums
        output = dict.fromkeys(annual)

        for col in averages:
            for season in seasons:
                if output[col] and season[col]:
                    output[col] = (output[col] + season[col]) / 2
                elif season[col]:
                    output[col] = season[col]

        for col in sums:
            for season in seasons:
                if output[col] and season[col]:
                    output[col] += season[col]
                elif season[col]:
                    output[col] = season[col]


        return output

    def get_context_data(self, **kwargs):
        #TODO:  500 when passed ID does not exist.  Add validation.
        context = kwargs
        wban_id_1 = kwargs.get('wban_id_1', None)
        wban_id_2 = kwargs.get('wban_id_2', None)

        wban_1 = WBAN.objects.get(id=wban_id_1)
        wban_2 = WBAN.objects.get(id=wban_id_2)

        # adding seasonal aggregate data to station objects.
        setattr(wban_1, 'seasons', Report.aggregates.all_seasons(wban_id_1))
        setattr(wban_2, 'seasons', Report.aggregates.all_seasons(wban_id_2))

        # aggregating annual data from seasonal data for use in verbose comparison
        annual_1 = self._annual_from_seasonal(wban_1.seasons)
        annual_2 = self._annual_from_seasonal(wban_2.seasons)

        # TODO:  detect corner case when station is missing seasonal data.
        # http://127.0.0.1:8000/station/compare/810/to/820/

        comparison_keys = annual_1.keys()
        comparison_values = [annual_1[x] > annual_2[x] for x in comparison_keys]
        comparison = dict(zip(comparison_keys, comparison_values))

        context.update({
            "stations": (wban_1, wban_2),
            "comparison": comparison
        })
        return context

class WeatherCompareCSV(TemplateView):
    template_name = 'csv/comparison.csv'
    content_type = 'text'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id_1 = kwargs.get('wban_id_1', None)
        wban_id_2 = kwargs.get('wban_id_2', None)

        #TODO:  500 when passed ID does not exist.  Add validation.
        context.update({
            "wban": [wban_id_1, wban_id_2],
            "records": Report.aggregates.comparison_daily(wban_id_1=wban_id_1, wban_id_2=wban_id_2)
        })
        return context


class WeatherCSV(TemplateView):
    template_name = 'csv/station.csv'
    content_type = 'text'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id = kwargs.get('id', None)

        context.update({
            "wban": [wban_id],
            "records": Report.aggregates.daily(wban_id = wban_id)
        })
        return context
