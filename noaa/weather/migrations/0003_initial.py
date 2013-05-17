# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'WBAN'
        db.create_table(u'weather_wban', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('wban', self.gf('django.db.models.fields.CharField')(unique=True, max_length=5, db_index=True)),
            ('callsign', self.gf('django.db.models.fields.CharField')(max_length=4, unique=True, null=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=64, null=True)),
            ('state', self.gf('django.db.models.fields.CharField')(max_length=3, null=True)),
            ('location', self.gf('django.db.models.fields.CharField')(max_length=64, null=True)),
            ('latitude', self.gf('django.db.models.fields.DecimalField')(null=True, max_digits=8, decimal_places=4)),
            ('longitude', self.gf('django.db.models.fields.DecimalField')(null=True, max_digits=8, decimal_places=4)),
            ('altitude', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('tz', self.gf('django.db.models.fields.IntegerField')(null=True)),
        ))
        db.send_create_signal(u'weather', ['WBAN'])

        # Adding model 'Weather'
        db.create_table(u'weather_weather', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('code', self.gf('django.db.models.fields.CharField')(unique=True, max_length=8)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=32, null=True, blank=True)),
        ))
        db.send_create_signal(u'weather', ['Weather'])

        # Adding model 'Report_Weather'
        db.create_table(u'weather_report_weather', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('weather', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['weather.Weather'])),
            ('report', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['weather.Report'])),
        ))
        db.send_create_signal(u'weather', ['Report_Weather'])

        # Adding model 'Report'
        db.create_table(u'weather_report', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('wban', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['weather.WBAN'])),
            ('date', self.gf('django.db.models.fields.DateTimeField')(db_index=True)),
            ('visibility', self.gf('django.db.models.fields.DecimalField')(null=True, max_digits=5, decimal_places=2)),
            ('temp_dry', self.gf('django.db.models.fields.IntegerField')()),
            ('temp_wet', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('dew_point', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('humidity', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('wind_speed', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('wind_direction', self.gf('django.db.models.fields.IntegerField')(null=True)),
            ('pressure', self.gf('django.db.models.fields.DecimalField')(null=True, max_digits=4, decimal_places=2)),
            ('precipitation', self.gf('django.db.models.fields.DecimalField')(null=True, max_digits=5, decimal_places=2)),
        ))
        db.send_create_signal(u'weather', ['Report'])


    def backwards(self, orm):
        # Deleting model 'WBAN'
        db.delete_table(u'weather_wban')

        # Deleting model 'Weather'
        db.delete_table(u'weather_weather')

        # Deleting model 'Report_Weather'
        db.delete_table(u'weather_report_weather')

        # Deleting model 'Report'
        db.delete_table(u'weather_report')


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