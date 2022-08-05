from bs4 import BeautifulSoup, SoupStrainer
import re
import requests 
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import pandas as pd
import csv
import httplib2

def HuffPost(soup):
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('p', {'class': ""})), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != '[]' and body != '' and headline != ''):
        return ret
    else:
        return False

def getHuffUSNews():
    test = '/entry/'
    links = []
    page = requests.get("https://www.huffpost.com/news/us-news")
    soup = BeautifulSoup(page.text, 'html.parser')
    for link in soup.findAll('a', attrs={'href': re.compile("^https://")}):
        if test in link.get('href') and link.get('href') not in links:
            links.append(link.get('href'))
    return links

def writeCSV(links):
    count = 0
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'}
    with open (r'backend/data/test_data.csv', 'w', newline='', encoding='UTF-8') as csvfile:
        fieldnames = ['headline', 'content']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for i in range (len(links)):
            url=links[i]
            page = requests.get(url, headers=headers)
            soup = BeautifulSoup(page.text, 'html.parser')
            out = HuffPost(soup)
            if (out != False):
                writer.writerow({'headline': out[0], 'content': out[1]})
                print('Written Row: ' + str(count) + ' on Table row: ' + str(i))
            count += 1

def main():
    writeCSV(getHuffUSNews())

if __name__ == '__main__':
    main()

