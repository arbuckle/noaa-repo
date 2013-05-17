# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding index on 'Report', fields ['date']
        db.create_index(u'weather_report', ['date'])

        # Adding index on 'WBAN', fields ['wban']
        db.create_index(u'weather_wban', ['wban'])


    def backwards(self, orm):
        # Removing index on 'WBAN', fields ['wban']
        db.delete_index(u'weather_wban', ['wban'])

        # Removing index on 'Report', fields ['date']
        db.delete_index(u'weather_report', ['date'])


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
        u'weather.report_weather': {
            'Meta': {'object_name': 'Report_Weather'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'report': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.Report']"}),
            'weather': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.Weather']"})
        },
        u'weather.wban': {
            'Meta': {'object_name': 'WBAN'},
            'altitude': ('django.db.models.fields.IntegerField', [], {'null': 'True'}),
            'callsign': ('django.db.models.fields.CharField', [], {'max_length': '4', 'unique': 'True', 'null': 'True'}),
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