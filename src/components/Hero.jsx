import React, { useState } from 'react';
import '../styles/Hero.css';
import Modal from './Modal';
// import heroImage from '../assets/hero-illustration.svg';  // If you have this

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data) => {
    // Handle form submission here
    console.log('Form submitted:', data);
    setIsModalOpen(false);
    // You can add API call or other logic here
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Master Your Sleep Schedule
          <span className="highlight"> Stay Alert, Anywhere, Anytime.</span>
        </h1>
        <p>Struggling with night shifts, long work hours, or frequent schedule changes? Our AI-powered sleep planner helps you reset your body clock fast—so you perform at your best, no matter the time zone.</p>
        <div className="cta-group">
          <button 
            className="register-button"
            onClick={() => setIsModalOpen(true)}
          >
            SEND ME THE GUIDE
          </button>
          <p className="cta-subtext">No spam. Just actionable sleep science.</p>
          {/* <button className="download-button">👉 Download the App</button> */}
        </div>
      </div>
      <div className="hero-image">
        <img src="" alt="Sleep Schedule App Interface" />
      </div>
      
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Hero; 