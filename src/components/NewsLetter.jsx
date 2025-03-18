import React from 'react';
import { Mailbox } from 'react-bootstrap-icons';

// If you're using your own UI components, keep these imports:


const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="container">
        <Mailbox size={36} className="newsletter-icon" />
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Join our community to receive exclusive offers, nutrition tips, and be the first to know about new products.
        </p>
        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input"
          />
          <button className="newsletter-button">
            Subscribe
          </button>
        </div>
        <p className="newsletter-note">
          By subscribing, you agree to our Privacy Policy. We'll send you a 10% discount code for your first order!
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
