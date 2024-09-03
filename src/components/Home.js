import React, { useRef } from 'react';
import './Home.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="overlay"></div>
        <div>
          <h1>Welcome to HotelBooking</h1>
          <p>Discover the best hotels at unbeatable prices.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutRef}>
        <AboutUs />
      </div>

      {/* Contact Us Section */}
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
