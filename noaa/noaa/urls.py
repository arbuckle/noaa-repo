from django.conf.urls import patterns, url
from weather.views import About, Weather, WeatherCSV, Stations, WeatherCompare, WeatherCompareCSV

urlpatterns = patterns('',
    url(r'^$', Stations.as_view(), name='station'),
    url(r'^about/$', About.as_view(), name='about'),

    # highly impure resource-oriented architecture.
    # Ideally, HTML would be served from one domain, JSON from another, and all URLs would be identical between the two.
    # Do accomplish this in dev, hosts file entries would need to be added and the application modified to read the source domain.
    url(r'^station/(?P<id>\d+)/$', Weather.as_view(), name='weather'),
    url(r'^station/compare/(?P<wban_id_1>\d+)/to/(?P<wban_id_2>\d+)/$', WeatherCompare.as_view(), name='weather-compare'),

    # CSV comparisons...
    url(r'^station/(?P<id>\d+).csv$', WeatherCSV.as_view(), name='weather-csv'),
    url(r'^station/compare/(?P<wban_id_1>\d+)/to/(?P<wban_id_2>\d+).csv$', WeatherCompareCSV.as_view(), name='weather-compare-csv'),
)
