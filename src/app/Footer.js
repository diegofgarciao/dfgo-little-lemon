import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address: 123 Lemon Street, Chicago, IL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
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
