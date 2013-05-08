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
            "station": WBAN.objects.get(id=wban_id)
        })
        return context


class WeatherCSV(TemplateView):
    template_name = 'csv/data.csv'
    content_type = 'text'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id = kwargs.get('id', None)

        context.update({
            "wban": [wban_id],
            "records": Report.aggregates.reports_for_wban(wban_id = wban_id)
        })

        return context

