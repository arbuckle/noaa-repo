#!/bin/bash

# point ubuntu to the maintained postgres repo
if [ -f /etc/apt/sources.list.d/pitti-postgresql-$(lsb_release --codename --short).list ]; then
  rm /etc/apt/sources.list.d/pitti-postgresql-$(lsb_release --codename --short).list
fi

echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release --codename --short)-pgdg main" > /etc/apt/sources.list.d/pgdg.list

wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | apt-key add -

apt-get update
apt-get install pgdg-keyring
apt-get install python-pip nginx git postgresql libpq-dev python-dev -y

# move postgres data volume to ephermal storage
 service postgresql stop
 mkdir /mnt/postgresql &&  mkdir /mnt/postgresql/9.2 &&  mv /var/lib/postgresql/9.2/main /mnt/postgresql/9.2/main &&  chmod 0700 /mnt/postgresql/9.2/main