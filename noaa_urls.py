# download zipfiles from NOAA
import subprocess

from datetime import datetime, timedelta

def get_urls():
    yyyy = 2011
    mm = 1
    filedate = str(yyyy) + str(mm).zfill(2)

    urls = []
    while filedate <> '201305':
        urls.append('QCLCD%s.zip' % filedate)

        if mm == 12:
            mm = 1
            yyyy += 1
        else:
            mm += 1
        filedate = str(yyyy) + str(mm).zfill(2)


    return list(set(urls))

for url in get_urls():
    print url

for url in get_urls():
    filepath = 'http://cdo.ncdc.noaa.gov/qclcd_ascii/'
    subprocess.call(['wget', filepath + url])
