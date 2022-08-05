import pandas as pd
import csv
import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def getNumVal(val):
    match val:
        case 'Negative':
            return -2
        case 'SomewhatNegative':
            return -1
        case 'Neutral':
            return 0
        case 'SomewhatPositive':
            return 1
        case 'Positive':
            return 2

def Crunch(L, R):
    d = abs(L - R)
    if L > R:
        swing = (-1)*d
    elif R > L:
        swing = (1)*d
    else:
        swing = d

    return swing

def writeCSV(df, loop):
    # A way to handle 404s needs to be added in at some point
    nytimes = 'http://www.nytimes.com'
    huffpost = 'http://www.huffingtonpost.com'
    washpost = 'http://www.washingtonpost.com'
    foxnews = 'http://www.foxnews.com'
    nbc = 'http://www.nbc.com'
    usatoday = "http://www.usatoday.com"
    breitbart = "http://www.breitbart.com"
    bbc = "http://www.bbc.co.uk"
    latimes = "http://www.latimes.com"

    count = 0
    with open (r'backend/data/out.csv', 'w', newline='', encoding='UTF-8') as csvfile:
        fieldnames = ['source', 'swing', 'headline', 'content']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in range (loop):
            sourcename = ""
            url = df.iloc[i].url
            swing = Crunch(getNumVal(df.iloc[i].democrat_vote), getNumVal(df.iloc[i].republican_vote))
            headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'}
            if nytimes in url:
                sourcename = "New York Times"
                #page = requests.get(url, headers=headers)
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = NYTimes(soup)
            elif huffpost in url:
                sourcename = "Huffington Post"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = HuffPost(soup)
            elif latimes in url:
                sourcename = "LA Times"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = LATimes(soup)
            elif washpost in url:
                sourcename = "Washington Post"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = WashPost(soup)
            elif foxnews in url:
                sourcename = "Fox News"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = FoxNews(soup)
            elif nbc in url:
                sourcename = "NBC"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = NBC(soup)
            elif usatoday in url:
                sourcename = "USA Today"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = USAToday(soup)
            elif breitbart in url:
                sourcename = "Breitbart"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = Breitbart(soup)
            elif bbc in url:
                sourcename = "BBC"
                session = requests.Session()
                session.headers = headers
                retry = Retry(connect=3, backoff_factor=0.5)
                adapter = HTTPAdapter(max_retries=retry)
                session.mount('http://', adapter)
                session.mount('https://', adapter)
                page = session.get(url)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = BBC(soup)
            else:
                print(f"No value for {url[:30]} on Table row: " + str(i))
                out = False
                pass
                
            if out != False:
                writer.writerow({'source': sourcename, 'swing': swing, 'headline': out[0], 'content': out[1]})
                print('Written Row: ' + str(count) + ' on Table row: ' + str(i) + ' for ' + sourcename)
                count += 1

def main():
    path = r"backend/data/newsArticlesWithLabels.tsv"
    df = pd.read_csv(path, delimiter='\t')
    print(df.columns)
    loop = len(df.index)
    writeCSV(df, loop)

# ---- Scrapers ----
# Quite a few of these will be the exact same function with a different name
# Maybe a Generic(soup) function can be made at some point

def NYTimes(soup):
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('p', {'class': "css-at9mc1 evys1bk0"})), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != '[]' and body != '' and headline != ''):
        return ret
    else:
        return False

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

def WashPost(soup):
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('p', {'class': ""})), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != '[]' and body != '' and headline != '' and body != 'This article was published more than 9 years ago'):
        return ret
    else:
        return False

def FoxNews(soup):
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

def NBC(soup):
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

def USAToday(soup): 
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('p')), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != '[]' and body != '' and headline != ''):
        return ret
    else:
        return False

# THIS SCRAPER NEEDS TO BE IMPROVED - Short trailing message at the end of every body text

def Breitbart(soup): 
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('p')), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != '[]' and body != '' and headline != ''):
        return ret
    else:
        return False

def BBC(soup): 
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('div', {'class': "ssrcss-uf6wea-RichTextComponentWrapper e1xue1i86"})), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != [] and body != '' and headline != ''):
        return ret
    else:
        return False
    
def LATimes(soup): 
    ret = []
    headline = BeautifulSoup(str(soup.find_all('h1')), 'html.parser').text 
    headline.replace('[', '').replace(']', '')
    ret.append(headline)

    body = BeautifulSoup(str(soup.find_all('div', {'class': "rich-text-article-body-content rich-text-body"})), 'html.parser').text
    body = body.replace(',', '').replace(']','').replace('[', '').strip()
    ret.append(body)

    if (body != '[]' and headline != [] and body != '' and headline != ''):
        return ret
    else:
        return False

def scrapeDebug(body, headline): # Just to save time, delete later
    print("\n" + body)
    print("\n\n" + headline)

if __name__ == '__main__':
    main()

# ---- SKIPPED SCRAPERS ----
# DailyKOS
    # This one has 1,438 rows in dataset but very hard to scrape
    # Skipped for now

# ChicagoTribune(soup):
    # Significant amount of 404s returned
    # Skipped for now