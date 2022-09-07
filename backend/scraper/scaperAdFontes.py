import requests
import bs4
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

path = r"backend/data/AdFontes.csv"
df = pd.read_csv(path)
df['Text'] = ''
df['Swing'] = None

for i in range(df.shape[0]):
    if (df.at[i,'Bias']<=-27):
        df.at[i,'Swing'] = '-2'
    elif (df.at[i,'Bias']>=-26 and df.at[i,'Bias']<=-10):
        df.at[i,'Swing'] = '-1'
    elif (df.at[i,'Bias']>=-9 and df.at[i,'Bias']<=9):
        df.at[i,'Swing'] = '0'
    elif (df.at[i,'Bias']>=10 and df.at[i,'Bias']<=26):
        df.at[i,'Swing'] = '1'
    elif (df.at[i,'Bias']>=27):
        df.at[i,'Swing'] = '2'


df.drop(df.columns[[2, 3]], axis=1, inplace=True)
print(df.columns)
print(df.head)

for i in range(df.shape[0]):
    print(i)
    try:
        result=requests.get(str(df.iloc[i]['Url']))
    except Exception:
        print(str(i)+" - error")
        continue
    src=result.content
    soup=BeautifulSoup(src,'lxml')   
    text=[]	
    for p_tag in soup.find_all('p'):
        text.append(p_tag.text)
    df.at[i,"Text"] = text

df['Text'] = df['Text'].apply(lambda x: np.nan if x == ""  else x)
df['Text'] = df['Text'].apply(lambda x: np.nan if x == '[]' else x)
df['Text'] = df['Text'].apply(lambda x: np.nan if x == [] else x)

df.dropna(subset=['Text'],inplace=True)

def Punctuation(string): 

    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
  
    for x in string.lower(): 
        if x in punctuations: 
            string = string.replace(x, "") 
  
    return string


df['Text'] = df['Text'].apply(lambda x:Punctuation(str(x)))

path = r'backend/data/data_out.csv'
df.to_csv(path)