import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation-form');
    reservationSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Hero Section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-btn" onClick={scrollToReservation} aria-live="polite">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/hero-image.jpg" alt="Interior view of Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default Hero;
