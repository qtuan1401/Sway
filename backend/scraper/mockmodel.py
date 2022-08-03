import os
os.add_dll_directory("C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.2/bin")

import requests
from bs4 import BeautifulSoup
import numpy as np
import tensorflow as tf
import pandas as pd
from tensorflow import keras
from keras.metrics import categorical_crossentropy
from sklearn.metrics import confusion_matrix

from keras.preprocessing.text import Tokenizer

physical_devices = tf.config.experimental.list_physical_devices('GPU')
print("Num GPUs Available: ", len(physical_devices))
tf.config.experimental.set_memory_growth(physical_devices[0], True)

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

path = "data/FULLTESTOUT.csv"
newdf = pd.read_csv(path)

vocab_size = 10000
embedding_dim = 16
max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"
training_size = 2000

sentences = []
labels = []

for i in range(len(newdf.index)):
    sentences.append(newdf['content'].iloc[i])
    labels.append(newdf['swing'].iloc[i])

training_sentences = sentences[0:training_size]
testing_sentences = sentences[training_size:]
training_labels = labels[0:training_size]
testing_labels = labels[training_size:]

tokenizer = Tokenizer(num_words=vocab_size, oov_token=oov_tok)
tokenizer.fit_on_texts(training_sentences)

word_index = tokenizer.word_index

training_sequences = tokenizer.texts_to_sequences(training_sentences)
training_padded = tf.keras.utils.pad_sequences(training_sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)

testing_sequences = tokenizer.texts_to_sequences(testing_sentences)
testing_padded = tf.keras.utils.pad_sequences(testing_sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)

training_padded = np.array(training_padded)
training_labels = np.array(training_labels)
testing_padded = np.array(testing_padded)
testing_labels = np.array(testing_labels)

model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, embedding_dim, input_length=max_length),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(24, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])

model.summary()

num_epochs = 30
history = model.fit(training_padded, training_labels, epochs=num_epochs, validation_data=(testing_padded, testing_labels), verbose=2)

e = model.layers[0]
weights = e.get_weights()[0]
print(weights.shape) # shape: (vocab_size, embedding_dim)

url = 'https://www.washingtonpost.com/politics/house-conservatives-face-up-to-their-defeat/2013/10/16/00c745b8-3697-11e3-80c6-7e6dd8d22d8f_story.html'
headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'}

page = requests.get(url, headers=headers)
soup = BeautifulSoup(page.text, 'html.parser')
out = WashPost(soup)
sentence = out[1]

sequences = tokenizer.texts_to_sequences(sentence)
padded = tf.keras.utils.pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
prediction = model.predict(padded)
#print('prediction shape:', prediction.shape)
print(prediction)