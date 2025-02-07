import React from 'react';
import '../styles/FeatureSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBell, faChartLine, faMobile, faBrain, faRobot, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2>Why Choose Our App?</h2>
      
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-card-icon">
            <FontAwesomeIcon icon={faBrain} />
          </div>
          <h3>Smart Circadian Rhythm Adjustments</h3>
          <p>Get a custom sleep and light exposure plan based on your work shifts or travel schedule.</p>
        </div>

        <div className="feature-card">
          <div className="feature-card-icon">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <h3>AI-Driven Smart Alerts</h3>
          <p>Know exactly when to sleep, take breaks, or get sunlight to shift your body clock faster.</p>
        </div>

        <div className="feature-card">
          <div className="feature-card-icon">
            <FontAwesomeIcon icon={faBoltLightning} />
          </div>
          <h3>Personalized Energy Optimization</h3>
          <p>Reduce grogginess, improve focus, and minimize sleep debt.</p>
        </div>

        <div className="feature-card">
          <div className="feature-card-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <h3>Works Anywhere, Anytime</h3>
          <p>No special devices needed—just follow the app's tailored guidance.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 