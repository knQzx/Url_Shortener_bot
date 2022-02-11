import sys
import pyshorteners

s = pyshorteners.Shortener()
link_url = sys.argv[1]
SHORT_URL = s.tinyurl.short(link_url)
print(SHORT_URL)