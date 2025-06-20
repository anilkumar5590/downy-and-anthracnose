

import streamlit as st
from tensorflow.keras.models import load_model
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import os
import requests
from huggingface_hub import hf_hub_download

# Load model from Hugging Face Hub
def load_model_from_huggingface():
    cache_dir = "/tmp/huggingface"
    os.makedirs(cache_dir, exist_ok=True)
    print("Downloading model from Hugging Face Hub...")
    try:
        model_path = hf_hub_download(
            repo_id="anilkumar5590/downy-anthracnose-model",
            filename="downy_anthracnose.keras",
            cache_dir=cache_dir
        )
        print(f"Model downloaded successfully at: {model_path}")
        model = tf.keras.models.load_model(model_path)
        print("Model loaded successfully!")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        raise

# Load model at startup
model = load_model_from_huggingface()

# Class names and descriptions
CLASS_NAMES = ['Downy Mildew', 'Anthracnose']
DESCRIPTIONS = {
    'Downy Mildew': 'Downy mildew is a fungal disease that affects plant leaves, causing yellowish spots and downy growth.',
    'Anthracnose': 'Anthracnose is a group of fungal diseases causing dark, sunken lesions on leaves, stems, flowers, or fruits.'
}

# Function to process and predict image
def predict(img):
    img = img.resize((224, 224))  # Resize to model's expected size
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize
    predictions = model.predict(img_array)[0]  # Get first batch's predictions
    confidence = np.max(predictions)
    predicted_class = CLASS_NAMES[np.argmax(predictions)]
    return predicted_class, confidence * 100  # Return confidence as percentage

# Streamlit UI
st.title("Plant Disease Classifier: Downy Mildew vs Anthracnose 🌿")
st.write("Upload a leaf image or capture using camera to classify plant disease.")

# File uploader or camera input
option = st.radio("Select Input Method:", ('Upload Image', 'Use Camera'))

img = None
if option == 'Upload Image':
    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
    if uploaded_file is not None:
        img = Image.open(uploaded_file)
elif option == 'Use Camera':
    camera_file = st.camera_input("Take a picture")
    if camera_file is not None:
        img = Image.open(camera_file)

if img is not None:
    st.image(img, caption='Uploaded Image', use_container_width=True)
    st.write("Classifying...")

    # Prediction
    predicted_class, confidence = predict(img)
    if predicted_class=="Downy Mildew":
        predicted_class="Anthracnose"
    else:
        predicted_class="Downy Mildew"

    if confidence >= 90:
        st.success(f"**Prediction:** {predicted_class} ({confidence:.2f}% confidence)")
        st.info(f"**Description:** {DESCRIPTIONS[predicted_class]}")
    else:
        st.error("⚠️ Cannot provide a confident prediction (Confidence < 90%). Try another image.")
