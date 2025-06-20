import streamlit as st
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import os
import requests

# # Load your trained model (MobileNet + ResNet fusion)
# MODEL_PATH = 'downy_anthracnose.keras'  # change to your actual model path
# model = load_model(MODEL_PATH)

# Hugging Face URL of your model
MODEL_URL = 'https://huggingface.co/anilkumar5590/downy-anthracnose-model/resolve/main/downy_anthracnose.keras'

@st.cache_resource
def load_model_from_url():
    model_path = "temp_model.keras"
    if not os.path.exists(model_path):
        response = requests.get(MODEL_URL)
        with open(model_path, 'wb') as f:
            f.write(response.content)
    return load_model(model_path)

model = load_model_from_url()

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
