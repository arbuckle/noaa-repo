{% cache 60*60*24 'stations-js' %}
    var stations = [
    {% for alt_station in stations %}
        {
            id: {{ alt_station.id }},
            latitude: {{ alt_station.latitude }},
            longitude: {{ alt_station.longitude}},
            name: "{{ alt_station.name|escapejs }}",
            location: "{{ alt_station.location|escapejs }}",
            compare_url: "{{ 'weather-compare'|url(987654, 456789) }}",
            url: "{{ 'weather'|url(987654) }}"
        }{% if not loop.last %},{% endif %}
    {% endfor %}
    ];
{% endcache %}