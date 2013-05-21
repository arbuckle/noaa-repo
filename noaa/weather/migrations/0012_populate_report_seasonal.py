# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import DataMigration
from django.db import models
from weather.models import Report

class Migration(DataMigration):

    def forwards(self, orm):
        "Write your forwards methods here."
        # Note: Remember to use orm['appname.ModelName'] rather than "from appname.models..."
        seasons = ('winter', 'spring', 'summer', 'fall')
        max = orm['weather.WBAN'].objects.count()
        for wban in orm['weather.WBAN'].objects.all():
            print "working on %d.  %d remaining." % (wban.id, max)
            for season in seasons:
                print season
                season = Report.aggregates.seasonal(wban_id=wban.id, season=season)
                new = orm['weather.Report_Seasonal'](
                    wban=wban
                    , season=season['season']
                    , temp_dry=season['temp_dry']
                    , temp_dry_high=season['temp_dry_high']
                    , temp_dry_low=season['temp_dry_low']
                    , humidity=season['humidity']
                    , precipitation=season['precipitation']
                    , precipitation_days=season['precipitation_days']
                    , snow_days=season['snow_days']
                    , wind_speed=season['wind_speed']
                    , wind_direction=season['wind_direction']
                )
                new.save()
            max -= 1

    def backwards(self, orm):
        db.execute("TRUNCATE TABLE report_seasonal RESTART IDENTITY")

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
            'humidity': ('django.db.models.fields.IntegerField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'precipitation': ('django.db.models.fields.IntegerField', [], {}),
            'precipitation_days': ('django.db.models.fields.IntegerField', [], {}),
            'season': ('django.db.models.fields.CharField', [], {'max_length': '6'}),
            'snow_days': ('django.db.models.fields.IntegerField', [], {}),
            'temp_dry': ('django.db.models.fields.IntegerField', [], {}),
            'temp_dry_high': ('django.db.models.fields.IntegerField', [], {}),
            'temp_dry_low': ('django.db.models.fields.IntegerField', [], {}),
            'wban': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['weather.WBAN']"}),
            'wind_direction': ('django.db.models.fields.IntegerField', [], {}),
            'wind_speed': ('django.db.models.fields.IntegerField', [], {})
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
    symmetrical = True
