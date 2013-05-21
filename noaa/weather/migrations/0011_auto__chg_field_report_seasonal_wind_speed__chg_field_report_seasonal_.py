# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):

        # Changing field 'Report_Seasonal.wind_speed'
        db.alter_column(u'weather_report_seasonal', 'wind_speed', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.wind_direction'
        db.alter_column(u'weather_report_seasonal', 'wind_direction', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.temp_dry_low'
        db.alter_column(u'weather_report_seasonal', 'temp_dry_low', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.temp_dry'
        db.alter_column(u'weather_report_seasonal', 'temp_dry', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.humidity'
        db.alter_column(u'weather_report_seasonal', 'humidity', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.precipitation'
        db.alter_column(u'weather_report_seasonal', 'precipitation', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.precipitation_days'
        db.alter_column(u'weather_report_seasonal', 'precipitation_days', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.snow_days'
        db.alter_column(u'weather_report_seasonal', 'snow_days', self.gf('django.db.models.fields.IntegerField')(null=True))

        # Changing field 'Report_Seasonal.temp_dry_high'
        db.alter_column(u'weather_report_seasonal', 'temp_dry_high', self.gf('django.db.models.fields.IntegerField')(null=True))

    def backwards(self, orm):

        # Changing field 'Report_Seasonal.wind_speed'
        db.alter_column(u'weather_report_seasonal', 'wind_speed', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.wind_direction'
        db.alter_column(u'weather_report_seasonal', 'wind_direction', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.temp_dry_low'
        db.alter_column(u'weather_report_seasonal', 'temp_dry_low', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.temp_dry'
        db.alter_column(u'weather_report_seasonal', 'temp_dry', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.humidity'
        db.alter_column(u'weather_report_seasonal', 'humidity', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.precipitation'
        db.alter_column(u'weather_report_seasonal', 'precipitation', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.precipitation_days'
        db.alter_column(u'weather_report_seasonal', 'precipitation_days', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.snow_days'
        db.alter_column(u'weather_report_seasonal', 'snow_days', self.gf('django.db.models.fields.IntegerField')(default=0))

        # Changing field 'Report_Seasonal.temp_dry_high'
        db.alter_column(u'weather_report_seasonal', 'temp_dry_high', self.gf('django.db.models.fields.IntegerField')(default=0))

    models = {
        u'weather.report': {
            'Meta': {'object_name': 'Report'},
            'date': ('django.db.models.fields.DateTimeField', [], {'db_index': 'True'}),
            'dew_point': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'humidity': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'precipitation': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '5', 'decimal_places': '2'}),
            'pressure': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '4', 'decimal_places': '2'}),
            'temp_dry': ('django.db.models.fields.IntegerField', [], {}),
            'temp_wet': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'visibility': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '5', 'decimal_places': '2'}),
            'wban': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.WBAN']"}),
            'weather_type': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['weather.Weather']", 'through': u"orm['weather.Report_Weather']", 'symmetrical': 'False'}),
            'wind_direction': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'wind_speed': ('django.db.models.fields.IntegerField', [], {'null': 'True'})
        },
        u'weather.report_daily': {
            'Meta': {'object_name': 'Report_Daily'},
            'date': ('django.db.models.fields.DateTimeField', [], {'db_index': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'temp_dry': ('django.db.models.fields.IntegerField', [], {}),
            'temp_dry_high': ('django.db.models.fields.IntegerField', [], {}),
            'temp_dry_low': ('django.db.models.fields.IntegerField', [], {}),
            'wban': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.WBAN']"})
        },
        u'weather.report_seasonal': {
            'Meta': {'object_name': 'Report_Seasonal'},
            'humidity': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'precipitation': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'precipitation_days': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'season': ('django.db.models.fields.CharField', [], {'max_length': '6'}),
            'snow_days': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'temp_dry': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'temp_dry_high': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'temp_dry_low': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'wban': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.WBAN']"}),
            'wind_direction': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'wind_speed': ('django.db.models.fields.IntegerField', [], {'null': 'True'})
        },
        u'weather.report_weather': {
            'Meta': {'object_name': 'Report_Weather'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'report': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.Report']"}),
            'weather': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.Weather']"})
        },
        u'weather.wban': {
            'Meta': {'object_name': 'WBAN'},
            'altitude': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'callsign': ('django.db.models.fields.CharField', [], {'max_length': '4', 'null': 'True'}),
            'disabled': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_index': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'latitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '8', 'decimal_places': '4'}),
            'location': ('django.db.models.fields.CharField', [], {'max_length': '64', 'null': 'True'}),
            'longitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '8', 'decimal_places': '4'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '64', 'null': 'True'}),
            'state': ('django.db.models.fields.CharField', [], {'max_length': '3', 'null': 'True'}),
            'tz': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'wban': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '5', 'db_index': 'True'})
        },
        u'weather.weather': {
            'Meta': {'object_name': 'Weather'},
            'code': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '8'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '32', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['weather']