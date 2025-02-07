import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientSection from '../components/ClientSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="community">
        <ClientSection />
      </div>
      <div id="features">
        <FeatureSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage; 