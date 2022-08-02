# %%
import pandas as pd
import requests
from bs4 import BeautifulSoup
import csv

# %%
path = "data/newsArticlesWithLabels.tsv"
df = pd.read_csv(path, delimiter='\t')

# %%
df.head()

# %%
df.columns

# %%
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

# %%
with open ('data/content.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['url', 'swing', 'headline', 'content']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for i in range (201):
        try:
            swing = Crunch(getNumVal(df.iloc[i].democrat_vote), getNumVal(df.iloc[i].republican_vote))
            headers = {'User-Agent': 'Mozilla/5.0'}
            url = df.iloc[i].url
            page = requests.get(url, headers=headers)
            soup = BeautifulSoup(page.text, 'html.parser')

            p = soup.find_all('p')
            p_cleantext = BeautifulSoup(str(p), 'html.parser').text

            h1 = soup.find_all('h1')
            h1_cleantext = BeautifulSoup(str(h1), 'html.parser').text

            writer.writerow({'url': url, 'swing': swing, 'content': p_cleantext, 'headline': h1_cleantext})
            print('Written Row:' + str(i))
        except:
            pass


# %%
newdf = pd.read_csv("content.csv")

# %%
newdf.columns

# %%
newdf.head()