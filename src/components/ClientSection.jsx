import React from 'react';
import '../styles/ClientSection.css';

const ClientSection = ({ onOpenModal }) => {
  return (
    <section className="client-section">
      <h2>Who Is This For?</h2>
      
      <div className="user-types">
        <div className="user-type healthcare">
          <h3>Night Shift Workers & Healthcare Staff</h3>
          <p>Adjust to overnight shifts without extreme fatigue.</p>
        </div>
        <div className="user-type consultant">
          <h3>Consultants & Business Travelers</h3>
          <p>Stay productive while juggling unpredictable work schedules.</p>
        </div>
        <div className="user-type freelancer">
          <h3>Freelancers & Remote Workers</h3>
          <p>Optimize your sleep schedule for peak performance.</p>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>🗣️ "I work rotating night shifts, and this app completely changed how I recover. I finally feel well-rested, even after switching schedules."</p>
            <cite>– Sarah, ER Nurse</cite>
          </div>
          <div className="testimonial">
            <p>🗣️ "As a consultant flying between time zones, I used to feel exhausted all the time. This app gave me a structured plan that actually works."</p>
            <cite>– James, Management Consultant</cite>
          </div>
        </div>
      </div>

      <div className="signup-section">
        <h2>Join 1,000+ Professionals Optimizing Their Sleep Today!</h2>
        <p>🚀 Sign up for early access & get a free Sleep Optimization Guide!</p>
        <div className="email-signup">
          <button className="signup-button" onClick={onOpenModal}>Get My Free Guide</button>
        </div>
      </div>
    </section>
  );
};

export default ClientSection; 