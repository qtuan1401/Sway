from __future__ import absolute_import, division, print_function, unicode_literals
import os
os.add_dll_directory("C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.2/bin")

import numpy as np
import tensorflow as tf
from matplotlib import pyplot as plt
import pandas as pd
import tensorflow_hub as hub
from sklearn.model_selection import train_test_split
from sklearn.utils import class_weight

physical_devices = tf.config.experimental.list_physical_devices('GPU')
print("Num GPUs Available: ", len(physical_devices))
tf.config.experimental.set_memory_growth(physical_devices[0], True)

path = r"backend/data/out.csv"
df = pd.read_csv(path, usecols=["content", "swing"])
pd.set_option('display.max_colwidth', -1)
x_train, x_test = train_test_split(df, test_size=0.2, random_state=111)

x_train, x_test = train_test_split(df, test_size=0.2, random_state=111)

df['swing'].value_counts()

swingdata = df['swing']

class_weights = list(class_weight.compute_class_weight(class_weight='balanced', classes=np.unique(df['swing']), y=swingdata))

np.unique(df['swing'])

class_weights.sort()

df['swing'].value_counts()

weights={}

for index, weight in enumerate(class_weights):
    weights[index]=weight

dataset_train = tf.data.Dataset.from_tensor_slices((x_train['content'].values, x_train['swing'].values))
dataset_test = tf.data.Dataset.from_tensor_slices((x_test['content'].values, x_test['swing'].values))

def fetch(text, labels):
    return text, tf.one_hot(labels, 9)

train_data_f=dataset_train.map(fetch)
test_data_f=dataset_test.map(fetch)

train_data, train_labels = next(iter(train_data_f.batch(5)))

embedding = "https://tfhub.dev/google/tf2-preview/nnlm-en-dim128/1"
hub_layer = hub.KerasLayer(embedding, output_shape=[128], input_shape=[], dtype=tf.string, trainable=True)
hub_layer(train_data[:1])

model = tf.keras.Sequential()
model.add(hub_layer)
for units in [128, 128, 64, 32]:
    model.add(tf.keras.layers.Dense(units, activation='relu'))
    model.add(tf.keras.layers.Dropout(0.4))
model.add(tf.keras.layers.Dense(9, activation="softmax"))

model.summary()

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss=tf.keras.losses.CategoricalCrossentropy(from_logits=True),
    metrics=['accuracy']
)

train_data_f=train_data_f.shuffle(70000).batch(512)
test_data_f=test_data_f.batch(512)

history = model.fit(
    train_data_f,
    epochs=15,
    validation_data=test_data_f,
    verbose=1,
    class_weight=weights
)

#plt.plot(history.history['loss'], label="Training acc")
#plt.plot(history.history['val_loss'], label="Validation acc")
#plt.title("Loss of model")
#plt.ylabel("Loss")
#plt.xlabel("Epoch")
#plt.legend()

#plt.show()

path = r'backend/data/test_data.csv'
test_data = pd.read_csv('', usecols=["content"])
predictions = model.predict(test_data, steps=len(test_data), verbose=0)
print(np.round(predictions))

plt.hist(predictions, bins=50)
plt.gca().set(title='Frequency Histogram', ylabel='Frequency');
plt.show
