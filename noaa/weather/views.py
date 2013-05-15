from collections import OrderedDict
from django.http.response import Http404
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

        try:
            wban = WBAN.objects.get(id=wban_id)
        except WBAN.DoesNotExist:
            raise Http404

        #this would be a good place to use django's messaging framework...
        seasons = Report.aggregates.all_seasons(wban_id)
        errors = None
        if len(seasons) < 4:
            errors = ('Data collected from this weather station is missing for a large part of the year. Comparisons may be inaccurate.')

        context.update({
            "station": wban,
            "stations": WBAN.objects.filter(disabled=False).exclude(id=wban_id).order_by('state', 'name', 'location'),
            "seasons": seasons,
            "errors": errors
        })
        return context

class WeatherCompare(TemplateView):
    template_name = 'compare.html'

    def _annual_from_seasonal(self, seasons):
        averages = ('temp_dry', 'temp_dry_high', 'temp_dry_low', 'humidity', 'wind_speed')
        sums = ('precipitation', 'precipitation_days', 'snow_days')

        annual = averages + sums
        output = OrderedDict.fromkeys(annual)

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
        context = kwargs
        wban_id_1 = kwargs.get('wban_id_1', None)
        wban_id_2 = kwargs.get('wban_id_2', None)

        try:
            wban_1 = WBAN.objects.get(id=wban_id_1)
            wban_2 = WBAN.objects.get(id=wban_id_2)
        except WBAN.DoesNotExist:
            raise Http404


        # adding seasonal aggregate data to station objects.
        setattr(wban_1, 'seasons', Report.aggregates.all_seasons(wban_id_1))
        setattr(wban_2, 'seasons', Report.aggregates.all_seasons(wban_id_2))

        # aggregating annual data from seasonal data for use in verbose comparison
        annual_1 = self._annual_from_seasonal(wban_1.seasons)
        annual_2 = self._annual_from_seasonal(wban_2.seasons)

        # http://127.0.0.1:8000/station/compare/810/to/820/
        # http://127.0.0.1:8000/station/compare/1579/to/698/
        errors = None
        if len(wban_1.seasons) < 4 and len(wban_2.seasons) < 4:
            errors = ('Data collected from these weather stations is missing for a large part of the year. Comparisons may be inaccurate.')
        elif len(wban_1.seasons) < 4 or len(wban_2.seasons) < 4:
            errors = ('Data collected from one weather station is missing for a large part of the year. Comparisons may be inaccurate.')


        comparison_keys = annual_1.keys()
        comparison_values = [annual_1[x] > annual_2[x] for x in comparison_keys]
        comparison = OrderedDict(zip(comparison_keys, comparison_values))

        context.update({
            "stations": (wban_1, wban_2),
            "comparison": comparison,
            "errors": errors
        })
        return context

class WeatherCompareCSV(TemplateView):
    template_name = 'csv/comparison.csv'
    content_type = 'text'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id_1 = kwargs.get('wban_id_1', None)
        wban_id_2 = kwargs.get('wban_id_2', None)

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
