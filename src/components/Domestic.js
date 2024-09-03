import React from 'react';
import './Domestic.css';

// Importing images individually
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.png';
import i4 from './i4.jpg';
import i6 from './i6.jpg';
import i7 from './i7.jpg';
import i8 from './i8.jpg';

const Domestic = () => {
  const hotels = [
    { name: 'Hotel 1', location: 'New Delhi', image: i1 },
    { name: 'Oberoi Udaivilas', location: 'Udaipur', image: i2 },
    { name: 'The Leela', location: 'Goa', image: i3 },
    { name: 'Taj Palace', location: 'Hyderabad', image: i4 },
    { name: 'Oberoi Udaivilas', location: 'Mumbai', image: i6 },
    { name: 'The Leela', location: 'Jammu', image: i7 },
    { name: 'Taj Palace', location: 'Banglore', image: i8 },
    { name: 'Oberoi Udaivilas', location: 'chennai', image: i1 },
    { name: 'The Leela', location: 'Goa', image: i2 },
    // Add more hotel data...
  ];

  return (
    <div className="domestic">
      <h1>Domestic Hotels</h1>
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

export default Domestic;
