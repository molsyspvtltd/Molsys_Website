// Import necessary React and Bootstrap components
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
  

// Create a functional component for the round-shaped card
const RoundCard = ({ imageSrc, name }) => (

  //  cardStyle = {
  //   borderRadius: '50%',
  //   overflow: 'hidden',
  //   textAlign: 'center',
  //   cursor: 'pointer',
  //   marginBottom: '20px',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  //   transition: 'transform 0.3s ease-in-out',
  //   ':hover': {
  //     transform: 'scale(1.1)',
  //   },
  // },

  //  imageStyle = {
  //   width: '100%',
  //   height: 'auto',
  // },

  // nameStyle = {
  //   marginTop: '10px',88
  // },

  <div className="round-card">
    <img src={imageSrc} alt={name} className="card-image" />
    <p className="card-name">{name}</p>
  </div>
);

// Create your main App component
const ServicePlace = () => {
  // Sample data for cards
  const cardData = [
    { id: 1, imageSrc: 'image1.jpg', name: 'Card 1' },
    // ... Add data for other cards
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4">
            <RoundCard imageSrc={card.imageSrc} name={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePlace;
