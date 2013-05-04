# download zipfiles from NOAA

from datetime import datetime, timedelta

def get_urls():
	filedate = datetime(2007, 7, 1)
	enddate = datetime(2013, 5, 1)

	urls = []
	while filedate <= enddate:
		urls.append('QCLCD%s%s.zip' % (filedate.strftime('%Y'), filedate.strftime('%m')))
		filedate += timedelta(365.25/12)
	return list(set(urls))

for url in get_urls():
	filepath = 'http://cdo.ncdc.noaa.gov/qclcd_ascii/'
	#urllib.urlretrieve(filepath + url, filename=url)
	subprocess.call(['wget', filepath + url, "--limit-rate=512"])
