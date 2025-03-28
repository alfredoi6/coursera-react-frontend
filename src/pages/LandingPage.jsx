// src/pages/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // we'll style it separately

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h2>Green Haven Presents...</h2>
        <h1>Indoor Plants</h1>
        <p>
          Shop the freshest indoor plant collection, including Dracaena, Ficus, Sansevieria, 
          and rare plants. Each plant is cared for by our experts, ensuring you always get 
          the best quality.
        </p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
