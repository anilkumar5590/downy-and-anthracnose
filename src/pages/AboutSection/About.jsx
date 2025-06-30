// import React, { useEffect } from 'react';
// import Header from '../../components/HeaderSection/header'; // Reuse Header component
// import './About.css';

// const About = () => {

//   useEffect(() => {
//     // Intersection Observer for triggering animations
//     const timelineItems = document.querySelectorAll('.timeline-item');
//     const observerOptions = {
//       root: null, // default is the viewport
//       threshold: 0.5, // trigger when 50% of the item is visible
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show'); // Add show class to trigger animation
//           observer.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     timelineItems.forEach(item => observer.observe(item)); // Observe each timeline item
//   }, []);

//   return (
//     <div className="about-container">
//       {/* Header */}
//       <Header />
      
//       {/* Hero Section with Unique Class */}
//       <section className="about-hero">
//         <div className="hero-text">
//           <h1>Welcome to WildlifeConservation</h1>
//           <p>Our mission is to protect endangered wildlife using technology and AI-driven insights.</p>
//         </div>
//       </section>

//       {/* Project Overview Section */}
//       <section className="project-overview">
//         <h2>About The Project</h2>
//         <p>
//           WildlifeConservation is a platform dedicated to identifying wildlife species using AI technology.
//           By analyzing images, we can determine species, assess conservation status, and provide valuable insights for conservation efforts.
//         </p>
//       </section>

//       {/* Mission Statement Section */}
//       <section className="mission">
//         <h2>Our Mission</h2>
//         <p>
//           Our mission is to leverage AI to protect endangered species and their habitats by providing accessible, detailed information about each species. 
//           Our goal is to increase awareness, promote conservation, and make a positive impact on the environment.
//         </p>
//       </section>

//       {/* Timeline Section with Scroll Animation */}
//       <section className="timeline">
//         <h2>Project Timeline</h2>
//         <div className="timeline-item">
//           <div className="timeline-icon">1</div>
//           <div className="timeline-content">
//             <h3>Initial Concept</h3>
//             <p>In 2021, we started with the concept of using AI to identify wildlife species and help with their conservation.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">2</div>
//           <div className="timeline-content">
//             <h3>Building the AI Model</h3>
//             <p>By mid-2022, we developed a machine learning model capable of identifying and classifying over 100 species.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">3</div>
//           <div className="timeline-content">
//             <h3>Launch of WildlifeConservation</h3>
//             <p>In 2023, we launched the platform, allowing users to upload images and access valuable species data.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">4</div>
//           <div className="timeline-content">
//             <h3>Looking Forward</h3>
//             <p>In 2024, we aim to expand our species database and introduce features like real-time animal tracking and conservation efforts.</p>
//           </div>
//         </div>
//       </section>

//       {/* About the Team Section */}
//       <section className="about-team">
//         <h2>Meet Our Team</h2>
//         <p>Our team consists of passionate individuals dedicated to leveraging technology for wildlife conservation.</p>
//         <div className="team-members">
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="Team Member" />
//               <div className="card-info">
//                 <h4>John Doe</h4>
//                 <p>Lead Developer and AI Specialist</p>
//               </div>
//             </div>
//           </div>
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="Team Member" />
//               <div className="card-info">
//                 <h4>Jane Smith</h4>
//                 <p>Conservation Expert and Data Analyst</p>
//               </div>
//             </div>
//           </div>
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="Team Member" />
//               <div className="card-info">
//                 <h4>Emma Johnson</h4>
//                 <p>Project Manager and Community Outreach</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// import React, { useEffect } from 'react';
// import Header from '../../components/HeaderSection/header';
// import './About.css';

// const About = () => {
//   useEffect(() => {
//     // Intersection Observer for triggering animations
//     const timelineItems = document.querySelectorAll('.timeline-item');
//     const teamMembers = document.querySelectorAll('.team-member');
//     const observerOptions = {
//       root: null, // Use viewport
//       threshold: 0.3, // Trigger when 30% of the item is visible
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show'); // Add show class to trigger animation
//           observer.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     timelineItems.forEach(item => observer.observe(item));
//     teamMembers.forEach(member => observer.observe(member));
//   }, []);

//   return (
//     <div className="about-container">
//       {/* Header */}
//       <Header />

//       {/* Hero Section with Unique Class */}
//       <section className="about-hero">
//         <div className="hero-overlay"></div>
//         <div className="hero-text">
//           <h1>Welcome to WildlifeConservation</h1>
//           <p>Our mission is to protect endangered wildlife using technology and AI-driven insights.</p>
//         </div>
//       </section>

//       {/* Project Overview Section */}
//       <section className="project-overview">
//         <h2>About The Project</h2>
//         <p>
//           WildlifeConservation is a platform dedicated to identifying wildlife species using AI technology.
//           By analyzing images, we can determine species, assess conservation status, and provide valuable insights for conservation efforts.
//         </p>
//       </section>

//       {/* Mission Statement Section */}
//       <section className="mission">
//         <h2>Our Mission</h2>
//         <p>
//           Our mission is to leverage AI to protect endangered species and their habitats by providing accessible, detailed information about each species. 
//           Our goal is to increase awareness, promote conservation, and make a positive impact on the environment.
//         </p>
//       </section>

//       {/* Timeline Section with Scroll Animation */}
//       <section className="timeline">
//         <h2>Project Timeline</h2>
//         <div className="timeline-item">
//           <div className="timeline-icon">1</div>
//           <div className="timeline-content">
//             <h3>Initial Concept</h3>
//             <p>In 2021, we started with the concept of using AI to identify wildlife species and help with their conservation.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">2</div>
//           <div className="timeline-content">
//             <h3>Building the AI Model</h3>
//             <p>By mid-2022, we developed a machine learning model capable of identifying and classifying over 100 species.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">3</div>
//           <div className="timeline-content">
//             <h3>Launch of WildlifeConservation</h3>
//             <p>In 2023, we launched the platform, allowing users to upload images and access valuable species data.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-icon">4</div>
//           <div className="timeline-content">
//             <h3>Looking Forward</h3>
//             <p>In 2024, we aim to expand our species database and introduce features like real-time animal tracking and conservation efforts.</p>
//           </div>
//         </div>
//       </section>

//       {/* About the Team Section */}
//       <section className="about-team">
//         <h2>Meet Our Team</h2>
//         <p>Our team consists of passionate individuals dedicated to leveraging technology for wildlife conservation.</p>
//         <div className="team-members">
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="John Doe" />
//               <div className="card-info">
//                 <h4>John Doe</h4>
//                 <p>Lead Developer and AI Specialist</p>
//               </div>
//             </div>
//           </div>
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="Jane Smith" />
//               <div className="card-info">
//                 <h4>Jane Smith</h4>
//                 <p>Conservation Expert and Data Analyst</p>
//               </div>
//             </div>
//           </div>
//           <div className="team-member">
//             <div className="card">
//               <img src="/placeholder-image.jpg" alt="Emma Johnson" />
//               <div className="card-info">
//                 <h4>Emma Johnson</h4>
//                 <p>Project Manager and Community Outreach</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


import React, { useEffect } from 'react';
import Header from '../../components/HeaderSection/header';
import './About.css';

const About = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineItems.forEach((item) => observer.observe(item));
    teamMembers.forEach((member) => observer.observe(member));
  }, []);

  return (
    <div className="about-container">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Welcome to Plant Disease Detector 🌱</h1>
          <p>Empowering agriculture through AI-driven plant disease identification and prevention.</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <h2>About The Project</h2>
        <p>
          Plant Disease Detector is a smart plant disease detection tool focused on classifying <strong>Anthracnose</strong> and <strong>Downy Mildew</strong>.
          Our platform allows users to upload leaf images and receive instant identification with useful insights for early disease management.
        </p>
      </section>

      {/* Mission */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to enhance sustainable agriculture by providing farmers and researchers with accessible, accurate tools to combat crop diseases.
          Early detection leads to healthier yields and reduced chemical usage.
        </p>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <h2>Development Timeline</h2>

        <div className="timeline-item">
          <div className="timeline-icon">1</div>
          <div className="timeline-content">
            <h3>Concept & Research</h3>
            <p>In early 2024, we researched the impact of Anthracnose and Downy Mildew on global crops and began planning an AI-based solution.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">2</div>
          <div className="timeline-content">
            <h3>Model Training</h3>
            <p>Using thousands of leaf images, we trained a dual CNN model (MobileNet + ResNet) to accurately classify the diseases.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">3</div>
          <div className="timeline-content">
            <h3>Launch of Plant Disease Detector</h3>
            <p>In mid-2025, our web-based tool was launched, enabling users to upload and detect leaf diseases within seconds.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">4</div>
          <div className="timeline-content">
            <h3>What's Next?</h3>
            <p>Future updates will include more disease types, multilingual support, and integration with mobile apps for offline usage.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>We are a group of tech enthusiasts, agronomists, and AI researchers dedicated to smarter farming solutions.</p>

        <div className="team-members">
          <div className="team-member">
            <div className="card">
              <img src="/placeholder-image.jpg" alt="Anil Kumar" />
              <div className="card-info">
                <h4>Anil Kumar</h4>
                <p>AI Developer & Backend Engineer</p>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="card">
              <img src="/placeholder-image.jpg" alt="Priya Reddy" />
              <div className="card-info">
                <h4>Priya Reddy</h4>
                <p>Agriculture Specialist & Dataset Curator</p>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="card">
              <img src="/placeholder-image.jpg" alt="Rohan Mehta" />
              <div className="card-info">
                <h4>Rohan Mehta</h4>
                <p>Frontend Developer & UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
