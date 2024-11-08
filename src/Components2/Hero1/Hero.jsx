import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreMore = () => {
    navigate('/mainlogin'); // Navigate to the desired page (e.g., patient dashboard)
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>WELCOME TO SHIRDI HOMOEO</h1>
        <h2>Eat Well Get Well</h2>
        <button className="btn" onClick={handleExploreMore}>
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
