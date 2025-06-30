// import React from 'react';
// import './HowItWorks.css';
// const HowItWorks = () => {
//   return (
//     <section className="how-it-works">
//       <h2>How It Works</h2>
//       <p>Our system makes identifying animals easy and fun! Here's a step-by-step guide to get you started:</p>
//       <div className="steps">
//         <div className="step">
//           <h3>1. Upload Your Image</h3>
//           <p>Simply upload a clear image of the animal you want to identify. Ensure the image is high quality for accurate analysis.</p>
//         </div>
//         <div className="step">
//           <h3>2. Image Analysis</h3>
//           <p>Our advanced AI-powered system will process the image and analyze the features to identify the animal.</p>
//         </div>
//         <div className="step">
//           <h3>3. Receive Results</h3>
//           <p>Get instant feedback with the predicted animal name along with relevant details like habitat, diet, and conservation status.</p>
//         </div>
//       </div>
//       <p>Ready to discover the wildlife around you? Try it now!</p>
//     </section>
//   );
// };

// export default HowItWorks;


import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Our system helps you quickly identify plant diseases like <strong>Anthracnose</strong> and <strong>Downy Mildew</strong> using AI. Here’s how it works:</p>
      <div className="steps">
        <div className="step">
          <h3>1. Upload a Leaf Image</h3>
          <p>Take or upload a clear image of the plant leaf showing visible signs of disease. High-quality images help improve prediction accuracy.</p>
        </div>
        <div className="step">
          <h3>2. AI-Powered Analysis</h3>
          <p>Our deep learning model analyzes the image using features trained specifically to detect Anthracnose and Downy Mildew symptoms.</p>
        </div>
        <div className="step">
          <h3>3. Get Instant Diagnosis</h3>
          <p>Receive the predicted disease name with a confidence score, along with simple explanations and suggested control methods.</p>
        </div>
      </div>
      <p>Protect your crops with early detection. Try the plant disease checker now!</p>
    </section>
  );
};

export default HowItWorks;
