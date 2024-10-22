import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
          <h3>Contact</h3>
          <address>
            <p>Address: 123 Lemon Street, Chicago, IL</p>
            <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul className="social-links">
            <li><a href="#facebook" aria-label="Facebook">Facebook</a></li>
            <li><a href="#instagram" aria-label="Instagram">Instagram</a></li>
            <li><a href="#twitter" aria-label="Twitter">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
