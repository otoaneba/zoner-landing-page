import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      profession: formData.get('profession')
    };
    onSubmit(data);
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
          <button type="submit" className="submit-button">Send Me The Guide</button>
        </form>
      </div>
    </div>
  );
};

export default Modal; 