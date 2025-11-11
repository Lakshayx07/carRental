import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <video autoPlay muted loop className="hero-video">
        <source src="https://www.pexels.com/download/video/30225108/" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="video-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1>Rent a Car in Few Easy Steps</h1>
          <p>Choose from a wide range of cars - from hatchbacks to SUVs, we have the perfect car for every occasion</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

