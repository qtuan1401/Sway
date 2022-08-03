import pandas as pd
import csv
import requests
from bs4 import BeautifulSoup

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

    if (body != '[]' and headline != [] and body != '' and headline != ''):
        return ret
    else:
        return False

def writeCSV(df, loop):
    nytimes = 'http://www.nytimes.com'
    huffpost = 'http://www.huffingtonpost.com'
    washpost = 'http://www.washingtonpost.com'
    foxnews = 'http://www.foxnews.com'
    nbc = 'http://www.nbc.com'
    count = 0
    with open ('data/out.csv', 'w', newline='', encoding='UTF-8') as csvfile:
        fieldnames = ['url', 'swing', 'headline', 'content']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in range (loop):
            url = df.iloc[i].url
            swing = Crunch(getNumVal(df.iloc[i].democrat_vote), getNumVal(df.iloc[i].republican_vote))
            headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'}
            if nytimes in url:
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = NYTimes(soup)
            elif huffpost in url:
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = HuffPost(soup)
            elif washpost in url:
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = WashPost(soup)
            elif foxnews in url:
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = FoxNews(soup)
            elif nbc in url:
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.text, 'html.parser')
                out = NBC(soup)
            else:
                out = False
                pass
                
            if out != False:
                writer.writerow({'url': url, 'swing': swing, 'headline': out[0], 'content': out[1]})
                print('Written Row:' + str(count) + ' on Table row: ' + str(i))
                count += 1

def main():
    path = "data/newsArticlesWithLabels.tsv"
    df = pd.read_csv(path, delimiter='\t')
    print(df.columns)
    #loop = len(df.index)
    loop = 100
    writeCSV(df, loop)

if __name__ == main():
    main()
    
