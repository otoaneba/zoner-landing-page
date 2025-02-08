import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientSection from '../components/ClientSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data) => {
    // Handle form submission here
    console.log('Form submitted:', data);
    setIsModalOpen(false);
    // You can add API call or other logic here
  };

  return (
    <div className="landing-page">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <div id="home">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <div id="community">
        <ClientSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <div id="features">
        <FeatureSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
      
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LandingPage; 