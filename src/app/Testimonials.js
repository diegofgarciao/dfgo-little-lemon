import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Adrian",
      rating: 5,
      review:
        "Amazing food and great service! Little Lemon is my new favorite restaurant.",
      image: require("../assets/adrian.png"),
    },
    {
      name: "Maria",
      rating: 4,
      review:
        "The dishes were delicious, especially the Greek salad. Highly recommend!",
      image: require("../assets/maria.png"),
    },
    {
      name: "John",
      rating: 5,
      review:
        "A perfect place for a family dinner. The desserts are incredible!",
      image: require("../assets/john.png"),
    },
  ];

  return (
    <section className="testimonials" aria-label="Customer Testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p
              className="rating"
              aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
            >
              {"⭐".repeat(testimonial.rating)}
            </p>
            <blockquote>
              <p>{testimonial.review}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
