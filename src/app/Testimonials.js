import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Adrian",
      rating: 5,
      review: "Amazing food and great service! Little Lemon is my new favorite restaurant.",
      image: "/adrian.jpg"
    },
    {
      name: "Maria",
      rating: 4,
      review: "The dishes were delicious, especially the Greek salad. Highly recommend!",
      image: "/maria.jpg"
    },
    {
      name: "John",
      rating: 5,
      review: "A perfect place for a family dinner. The desserts are incredible!",
      image: "/john.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="rating">{"⭐".repeat(testimonial.rating)}</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
