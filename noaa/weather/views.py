from django.views.generic.base import TemplateView
from weather.models import Report

class Weather(TemplateView):
    template_name = 'weather.html'


class WeatherCSV(TemplateView):
    template_name = 'csv/data.csv'
    content_type = 'text'

    def get_context_data(self, **kwargs):
        context = kwargs
        wban_id = kwargs.get('id', None)

        context.update({
            "wban": [wban_id],
            "records": Report.objects.filter(wban_id = wban_id).order_by("date").select_related()
        })

        return context

