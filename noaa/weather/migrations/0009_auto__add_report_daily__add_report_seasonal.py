# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Report_Daily'
        db.create_table(u'weather_report_daily', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('wban', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['weather.WBAN'])),
            ('date', self.gf('django.db.models.fields.DateTimeField')(db_index=True)),
            ('temp_dry', self.gf('django.db.models.fields.IntegerField')()),
            ('temp_dry_high', self.gf('django.db.models.fields.IntegerField')()),
            ('temp_dry_low', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal(u'weather', ['Report_Daily'])

        # Adding model 'Report_Seasonal'
        db.create_table(u'weather_report_seasonal', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('wban', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['weather.WBAN'])),
            ('season', self.gf('django.db.models.fields.CharField')(max_length=6)),
            ('temp_dry', self.gf('django.db.models.fields.IntegerField')()),
            ('temp_dry_high', self.gf('django.db.models.fields.IntegerField')()),
            ('temp_dry_low', self.gf('django.db.models.fields.IntegerField')()),
            ('humidity', self.gf('django.db.models.fields.IntegerField')()),
            ('precipitation', self.gf('django.db.models.fields.IntegerField')()),
            ('precipitation_days', self.gf('django.db.models.fields.IntegerField')()),
            ('snow_days', self.gf('django.db.models.fields.IntegerField')()),
            ('wind_speed', self.gf('django.db.models.fields.IntegerField')()),
            ('wind_direction', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal(u'weather', ['Report_Seasonal'])


    def backwards(self, orm):
        # Deleting model 'Report_Daily'
        db.delete_table(u'weather_report_daily')

        # Deleting model 'Report_Seasonal'
        db.delete_table(u'weather_report_seasonal')


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