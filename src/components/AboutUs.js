import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us">
    <p>Welcome to our hotel booking website! We provide the best deals and offers on hotels worldwide.</p>
    <img src="path/to/your-image.jpg" alt="Thrinadh" />
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
    </div>
  </div>
);

export default AboutUs;
