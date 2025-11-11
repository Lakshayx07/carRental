import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LuxWheels Rentals</h3>
            <p>Your trusted partner for car rentals across India. Quality service, affordable prices.</p>
            <div className="social-links">
              <a href="#facebook">FB</a>
              <a href="#twitter">TW</a>
              <a href="#instagram">IG</a>
              <a href="#linkedin">IN</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#offers">Offers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@LuxWheels.com</p>
            <p>📍 123 Business Street, Mumbai, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 LuxWheels Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;