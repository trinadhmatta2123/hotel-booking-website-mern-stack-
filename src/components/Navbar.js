import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = (section) => {
    navigate('/');
    setTimeout(() => {
      const sectionElement = document.querySelector(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="navbar">
      <h2>HotelBooking</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Hotels
          {showDropdown && (
            <ul className="dropdown">
              <li><Link to="/domestic">Domestic</Link></li>
              <li><Link to="/international">International</Link></li>
            </ul>
          )}
        </li>
        <li><a href="#" onClick={() => handleScroll('.about-us')}>About Us</a></li>
        <li><a href="#" onClick={() => handleScroll('.contact-us')}>Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
