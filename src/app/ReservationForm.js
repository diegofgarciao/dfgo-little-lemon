import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
  };

  return (
    <div id="reservation-form" className="reservation-form-container">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">Confirm Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
