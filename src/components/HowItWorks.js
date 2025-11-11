import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: '📍',
      title: 'Choose Location',
      description: 'Select your pickup location and time'
    },
    {
      icon: '📅',
      title: 'Book Your Car',
      description: 'Choose from our wide range of vehicles'
    },
    {
      icon: '✅',
      title: 'Confirm Booking',
      description: 'Complete your booking with secure payment'
    },
    {
      icon: '🚗',
      title: 'Enjoy Your Ride',
      description: 'Pick up your car and start your journey'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It <span>Works</span></h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;