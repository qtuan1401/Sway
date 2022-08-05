# 404 Remover
import pandas as pd
import csv
import requests
from bs4 import BeautifulSoup

path = r"backend/data/newsArticlesWithLabels.tsv"
df = pd.read_csv(path, delimiter='\t')

for i in range(0, 100):
    response = requests.get(df.iloc[i].url)
    if response.status_code == 404:
        print(f"[*] DELETING Index: {i} for URL: {df.iloc[i].url}")

        # DELETION SECTION
        # Kept commented out for now
        # df.drop(i)

# EXPORT SECTION
# Kept commented out for now
# df.to_csv('no404.tsv', sep="\t")