import os
from flask import Flask, request
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import json

app = Flask(__name__)
cors = CORS(app)

@app.route("/url", methods=["GET", "POST"])
def test():
    print(request.json["url"])
    dict = {
        "bodyText": ScrapeURL(request.json["url"])
    }
    print(dict["bodyText"])

    return json.dumps(dict)

def getText(soup): 
    char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
    body = BeautifulSoup(str(soup.find_all('p')), 'html.parser').text
    body_clean = ''.join(e for e in body if e.lower() in char)

    if (body_clean != '[]' and body_clean != ''):
        return body_clean
    else:
        return False

def ScrapeURL(url): 
    headers = {'User-Agent':'*'}
    try:
        session = requests.Session()
        session.headers = headers
        retry = Retry(connect=3, backoff_factor=0.5)
        adapter = HTTPAdapter(max_retries=retry)
        session.mount('http://', adapter)
        session.mount('https://', adapter)
        page = session.get(url)
        soup = BeautifulSoup(page.text, 'html.parser')
        if soup is not None:
            scrape = getText(soup)
            if scrape != False:
                return scrape
            else:
                return 'No response'
    except:
        return 'No response'

if __name__ == "__main__":
	app.run(debug=True)