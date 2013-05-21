###NOAA Weather Data Fun

This is a Django app with accompanying scripts that uses NOAA's QCLCD dataset to display graphs and other meaningful
aggregations in a glitzy(ish) web frontend.

###[Check out the demo](http://weather.catto5k.com/)


Some features:
* View a graph of high/low/avg temps for any of 2000 weather stations in the US, from 2011-present.
* View a seasonal summary of any weather station's data.
* Easily compare any two weather stations, see temperature charts overlaid and seasonal summaries side-by-side.
* Read a plain-English comparison of the two locations' annual conditions.


#If you're interested in playing around with this on your own, here are some not-so-simple instructions:

- Clone the repository
- Run manage.py syncdb to create your database schema.  Note that privileged `settings.py` info is stored as environmental variables.
- Run manage.py migrate --fake to run through all the old migrations.  South will be very confused at this point and you'll probably need to manually update the schema / apply a migration.
- Delete all indexes and foreign key relations from your tables.  Save the recreation statements, you'll need them later.
- Download the QCLCD datasets from NOAA's website using `scripts/noaa_urls.py`.  Each month is about 80MB compressed, 400MB extracted.
- Modify `scripts/noaa_set.py` with your folders, database passwords, etc.
- Run `scripts/noaa_set.py`.  Each year of data will require about 7GB in the database, and will take 4-6 hours to process and insert.
- Look at the repository migrations and build your aggregation tables as needed.
- Recreate all the indexes that you previously deleted.
- Update the google maps API key in `templates/base.html`.

