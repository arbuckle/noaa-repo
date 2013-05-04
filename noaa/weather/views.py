from django.views.generic.base import TemplateView

class Weather(TemplateView):
    template_name = 'weather.html'