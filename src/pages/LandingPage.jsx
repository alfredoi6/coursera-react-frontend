// src/pages/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // we'll style it separately

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h2>Orange County Plant Emporium Presents...</h2>
        <h1>Indoor Plants</h1>
        <p>
          Orange County Plant Emporium is a family-owned boutique dedicated to bringing 
          the beauty of nature into your home. We specialize in carefully selected indoor plants, each nurtured by our
          passionate team to thrive in any living space. 
          Whether you're a seasoned plant parent or just beginning your green journey, 
          Orange County Plant Emporium offers a curated collection of easy-care, flowering, and statement plants to refresh your home and purify your space. 
          Discover the joy of greenery with us.
        </p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
