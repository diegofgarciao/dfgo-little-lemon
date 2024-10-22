import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo">
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;