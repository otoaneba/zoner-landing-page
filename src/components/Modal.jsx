import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const formData = new FormData(e.target);
      const userEmail = formData.get('email');
      
      // First email: User submission to your business email
      const businessTemplateParams = {
        to_email: 'support@spiceitglobal.com',
        from_name: formData.get('name') || 'Sleepless Traveler',
        from_email: userEmail,
        profession: formData.get('profession'),
        message: 'New Sleep Guide Request'
      };

      // Second email: Auto-reply to user
      const autoReplyParams = {
        to_email: userEmail,
        to_name: formData.get('name') || 'Traveler',
        guide_link: 'YOUR_GUIDE_LINK', // Add your guide link here
        // Add any other parameters your auto-reply template needs
      };

      // Send both emails
      await Promise.all([
        emailjs.send(
          'service_jknkreg',
          'template_mvllj5i',
          businessTemplateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          'service_jknkreg',
          'template_paso4ba',
          autoReplyParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
      ]);

      setStatus('success');
      console.log('Email sent successfully', businessTemplateParams, autoReplyParams);
      onSubmit(Object.fromEntries(formData));
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Get Your Free Sleep Guide</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name (optional)</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession (required)</label>
            <select id="profession" name="profession" required>
              <option value="">Select your profession</option>
              <option value="healthcare">Healthcare Professional</option>
              <option value="shift-worker">Shift Worker</option>
              <option value="consultant">Consultant</option>
              <option value="freelancer">Freelancer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Me The Guide'}
          </button>
          {status === 'success' && (
            <p className="status-message success">
              ✅ Thank you! Check your email for the guide.
            </p>
          )}
          {status === 'error' && (
            <p className="status-message error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal; 