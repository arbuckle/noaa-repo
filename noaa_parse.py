# NOAA Parser
# Parses hourly NOAA station data to extract a single data point.
# data is stored here: http://cdo.ncdc.noaa.gov/qclcd_ascii/

import csv
from datetime import datetime


def get_hourly_from_file(filename):
	"""
		get_hourly_from_file opens a csv file and parses out hourly weather data from the first reporting 
		WBAN station, returning a python list containing datetime objects and hourly average temp in F.
	"""
	# constants here define the positioning of the specific data in the CSV. 
	WBAN = 0
	DATE = 1
	TIME = 2
	WEATHER = 8
	TEMP = 10

	csvfile = open(filename, 'r')
	weather = csv.reader(csvfile, delimiter=",")
	weather.next() # throw away the headers

	prev_record_date = None
	wban = None
	avg = 0
	c_avg = 0
	output = []
	for line in weather:
		# NOAA data contains reports from multiple stations, stopping parser when station changes.
		if wban is None:
			wban = line[WBAN]
		elif line[WBAN] <> wban:
			break
		# Parsing data from the CSV.  
		try:
			record_date = datetime(int(line[DATE][0:4]), int(line[DATE][4:6]), int(line[DATE][6:]), int(line[TIME][0:2]))
			record_temp = int(line[TEMP])
		except ValueError:
			continue
		# Averaging out figures for a given date, by hour, and adding to output.
		if prev_record_date is not None and record_date.hour <> prev_record_date.hour:
			output.append((record_date, avg/c_avg, line[WEATHER]))
			avg = record_temp
			c_avg = 1
		else:
			avg += record_temp
			c_avg += 1
		
		prev_record_date = record_date
	csvfile.close()
	return output

output = open("april.csv", "w")
output.write("date,temp\n")
yy = 12
for i in xrange(1,50):
	if i > 12:
		yy = 13
		i -= 12

	if i < 10:
		i = "0%d" % i
	else:
		i = str(i)
	for report in get_hourly_from_file('C:/Users/adorkable/Downloads/20%d%shourly.txt' % (yy, i)):
		output.write("%s,%d\n" % (report[0].strftime("%Y-%m-%d %H:%M"), report[1]))
output.close()
	
	
	
	
	
	
	