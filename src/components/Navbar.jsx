import React from 'react';
import '../styles/Navbar.css';
// import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onOpenModal }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FontAwesomeIcon className="icon" icon={faPepperHot} />
        <p>Zoner</p>      
      </div>
      <div className="navbar-links">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Home</a>
        <a href="#community" onClick={(e) => {
          e.preventDefault();
          scrollToSection('community');
        }}>Community</a>
        <a href="#features" onClick={(e) => {
          e.preventDefault();
          scrollToSection('features');
        }}>Features</a>
        {/* <a href="#blog" onClick={(e) => {
          e.preventDefault();
          scrollToSection('blog');
        }}>Blog</a>
        <a href="#pricing" onClick={(e) => {
          e.preventDefault();
          scrollToSection('pricing');
        }}>Pricing</a> */}
      </div>
      <div className="navbar-cta">
        <button 
          className="register-button"
          onClick={onOpenModal}
        >
          Get My Free Guide →
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 