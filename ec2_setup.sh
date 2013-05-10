#!/bin/bash

# point ubuntu to the maintained postgres repo
if [ -f /etc/apt/sources.list.d/pitti-postgresql-$(lsb_release --codename --short).list ]; then
  rm /etc/apt/sources.list.d/pitti-postgresql-$(lsb_release --codename --short).list
fi

echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release --codename --short)-pgdg main" > /etc/apt/sources.list.d/pgdg.list

wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | apt-key add -

apt-get update
apt-get install pgdg-keyring


# install all necessary packages.
apt-get install python-pip nginx git postgresql libpq-dev python-dev -y
pip install pip --upgrade && sudo pip install virtualenv && virtualenv --no-site-packages noaa_env && cd noaa_env && source bin/activate && pip install django gunicorn south django-debug-toolbar psycopg2 pytz django_orm jinja2 coffin


# move postgres data volume to ephermal storage
mkdir /mnt/postgresql
mkdir /mnt/postgresql/9.2
service postgresql stop && sudo mv /var/lib/postgresql/9.2/main /mnt/postgresql/9.2/main && sudo chmod 0700 /mnt/postgresql/9.2/main

