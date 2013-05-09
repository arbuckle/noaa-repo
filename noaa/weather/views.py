from django.views.generic.base import TemplateView
from weather.models import Report
from weather.models import WBAN

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

        context.update({
            "station": WBAN.objects.get(id=wban_id),
            "stations": WBAN.objects.filter(disabled=False).exclude(id=wban_id).order_by('state', 'name', 'location')
        })
        return context

class WeatherCompare(TemplateView):
    template_name = 'compare.html'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id_1 = kwargs.get('wban_id_1', None)
        wban_id_2 = kwargs.get('wban_id_2', None)

        #TODO:  500 when passed ID does not exist.  Add validation.
        context.update({
            "stations": (WBAN.objects.get(id=wban_id_1), WBAN.objects.get(id=wban_id_2))
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
