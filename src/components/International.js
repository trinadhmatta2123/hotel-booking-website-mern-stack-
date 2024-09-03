import React from 'react';
import './International.css';

const International = () => {
  const hotels = [
    { name: 'The Ritz', location: 'London', image: 'path/to/the-ritz.jpg' },
    { name: 'Marina Bay Sands', location: 'Singapore', image: 'path/to/marina-bay-sands.jpg' },
    { name: 'Burj Al Arab', location: 'Dubai', image: 'path/to/burj-al-arab.jpg' },
    // Add more hotel data...
  ];

  return (
    <div className="international">
      <h1>International Hotels</h1>
      <div className="hotels-grid">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default International;
