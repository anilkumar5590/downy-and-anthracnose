// import React from 'react';
// import './FeaturedSpecies.css'; // Import the styles

// // FeaturedSpecies component
// const FeaturedSpecies = () => {
//   return (
//     <section className="featured-species">
//       <h2 className="title">Featured Species</h2>

//       <div className="species-container">
//         <div className="species-card">
//           <img src="/antracnose.png" alt="Tiger" className="species-image" />
//           <div className="species-info">
//             <h3>Anthracnose</h3>
//             <p className="conservation-status">Common Fungal Disease</p>
//             <p className="species-description">
//               Anthracnose affects many plants, causing dark, sunken lesions on leaves, stems, flowers, and fruits. It thrives in warm, wet conditions.
//             </p>
//           </div>
//         </div>

//         <div className="species-card">
//           <img src="/panda.jpg" alt="Panda" className="species-image" />
//           <div className="species-info">
//             <h3>Panda</h3>
//             <p className="conservation-status">Vulnerable</p>
//             <p className="species-description">
//               The panda is an iconic symbol of wildlife conservation, primarily found in China.
//             </p>
//           </div>
//         </div>

//           {/* Lion Species Card */}
//           <div className="species-card">
//           <img src="/lion.jpg" alt="Lion" className="species-image" />
//           <div className="species-info">
//             <h3>Lion</h3>
//             <p className="conservation-status">Vulnerable</p>
//             <p className="species-description">
//               The lion is known as the king of the jungle, a powerful predator found in the savannas of Africa.
//             </p>
//           </div>
//         </div>

//         {/* Zebra Species Card */}
//           <div className="species-card">
//             <img src="/zebra.avif" alt="Zebra" className="species-image" />
//             <div className="species-info">
//               <h3>Zebra</h3>
//               <p className="conservation-status">Least Concern</p>
//               <p className="species-description">
//               Zebras are herbivores with black and white stripes, found in African grasslands and savannas, often in herds.
//               </p>
//             </div>
//           </div>

//       </div>

//     </section>
//   );
// };

// export default FeaturedSpecies;


import React from 'react';
import './FeaturedSpecies.css'; // Reuse same styles or rename to FeaturedDiseases.css

const diseaseList = [
  {
    name: 'Anthracnose',
    image: '/antracnose.png',
    status: 'Common Fungal Disease',
    description:
      'Anthracnose affects many plants, causing dark, sunken lesions on leaves, stems, flowers, and fruits. It thrives in warm, wet conditions.',
  },
  {
    name: 'Downy Mildew',
    image: '/downymildew.jpg',
    status: 'Severe Leaf Disease',
    description:
      'Downy Mildew appears as yellow or white patches on the upper leaf surface with grayish mold underneath. It spreads rapidly in cool, moist environments.',
  },
];

const FeaturedDiseases = () => {
  return (
    <section className="featured-species">
      <h2 className="title">Featured Plant Diseases</h2>
      <p className="intro">
        Learn more about the plant diseases our system currently detects.
      </p>

      <div className="species-container">
        {diseaseList.map((disease, index) => (
          <div className="species-card" key={index}>
            <img
              src={disease.image}
              alt={disease.name}
              className="species-image"
            />
            <div className="species-info">
              <h3>{disease.name}</h3>
              <p className="conservation-status">{disease.status}</p>
              <p className="species-description">{disease.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDiseases;




