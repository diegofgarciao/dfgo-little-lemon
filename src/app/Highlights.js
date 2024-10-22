import React from 'react';
import './Highlights.css';

function Highlights() {
  const specials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "../assets/greek-salad.jpg"
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "../assets/bruschetta.jpg"
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "../assets/lemon-dessert.jpg"
    }
  ];

  return (
    <section className="highlights" aria-label="Weekly Specials">
    <h2>This week's specials!</h2>
    <div className="specials-container">
      {specials.map((special, index) => (
        <div key={index} className="special-card">
          <img src={special.image} alt={`Image of ${special.name}`} />
          <h3>{special.name}</h3>
          <p>{special.description}</p>
          <span className="price">{special.price}</span>
          <button className="order-btn" aria-live="polite">Order a delivery</button>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Highlights;
