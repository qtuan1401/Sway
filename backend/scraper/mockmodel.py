import os
os.add_dll_directory("C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.2/bin")

import numpy as np
import tensorflow as tf
from matplotlib import pyplot as plt
import pandas as pd
from tensorflow import keras
from keras.metrics import categorical_crossentropy
from sklearn.metrics import confusion_matrix
from keras.models import Sequential
from keras.layers import Activation, Dense, Dropout
import tensorflow_hub as hub

physical_devices = tf.config.experimental.list_physical_devices('GPU')
print("Num GPUs Available: ", len(physical_devices))
tf.config.experimental.set_memory_growth(physical_devices[0], True)

def df_to_dataset(dataframe, shuffle=True, batch_size=1024):
  df = dataframe.copy()
  labels = df.pop('swing')
  df = df["content"]
  ds = tf.data.Dataset.from_tensor_slices((df, labels))
  if shuffle:
    ds = ds.shuffle(buffer_size=len(dataframe))
  ds = ds.batch(batch_size)
  ds = ds.prefetch(tf.data.AUTOTUNE)
  return ds

path = "data/out.csv"
df = pd.read_csv(path, usecols=["content", "swing"])
train, val, test = np.split(df.sample(frac=1), [int(0.8*len(df)), int(0.9*len(df))])

df.info()

train_data = df_to_dataset(train)
valid_data = df_to_dataset(val)
test_data = df_to_dataset(test)

embedding = "https://tfhub.dev/google/nnlm-en-dim50/2"
hub_layer = hub.KerasLayer(embedding, dtype=tf.string, trainable=True)

model = tf.keras.Sequential()
model.add(hub_layer)
model.add(tf.keras.layers.Dense(16, activation='relu'))
model.add(tf.keras.layers.Dropout(0.4))
model.add(tf.keras.layers.Dense(16, activation='relu'))
model.add(tf.keras.layers.Dropout(0.4))
model.add(tf.keras.layers.Dense(1, activation='sigmoid'))

#model.summary()

model.compile(optimizer=keras.optimizers.Adam(lr=0.0001, beta_1=0.9, beta_2=0.999, epsilon=None, decay=0.0, amsgrad=False),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy'])

model.evaluate(train_data)
model.evaluate(valid_data)

history = model.fit(train_data, epochs=30, validation_data=valid_data)
model.evaluate(test_data)

predictions = model.predict(test_data, batch_size=10, verbose=0)  

rounded_predictions = np.argmax(predictions, axis=-1)
for i in rounded_predictions:
    print(i)