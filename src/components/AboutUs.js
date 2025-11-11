import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const team = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & CEO',
      bio: 'Passionate about luxury cars and customer experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Manager',
      bio: 'Ensuring seamless rental experiences for our clients',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Rohan Mehra',
      role: 'Fleet Manager',
      bio: 'Expert in luxury car maintenance and quality control',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '500+', label: 'Luxury Cars' },
    { number: '50+', label: 'Cities' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <h2 className="section-title">About <span>LuxWheels</span></h2>
        
        <div className="about-hero">
          <div className="about-content">
            <h3>Redefining Luxury Car Rentals</h3>
            <p>
              LuxWheels was founded with a simple vision: to make luxury car rentals accessible, 
              reliable, and unforgettable. We understand that every journey deserves to be special, 
              and what better way to make it memorable than with a premium luxury vehicle?
            </p>
            <p>
              Our curated fleet features the world's most prestigious automotive brands, 
              meticulously maintained and regularly updated to ensure you experience nothing but 
              the best. From business trips to weekend getaways, weddings to special occasions, 
              we provide the perfect car for every moment.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=400&fit=crop" 
              alt="Luxury Car Showcase" 
            />
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h4>Our Mission</h4>
            <p>
              To provide unparalleled luxury car rental experiences through exceptional service, 
              premium vehicles, and customer-centric solutions that exceed expectations.
            </p>
          </div>
          <div className="mission-card">
            <div className="card-icon">👁️</div>
            <h4>Our Vision</h4>
            <p>
              To become India's most trusted luxury car rental service, setting new standards 
              in quality, reliability, and customer satisfaction.
            </p>
          </div>
          <div className="mission-card">
            <div className="card-icon">💎</div>
            <h4>Our Values</h4>
            <p>
              Excellence, Integrity, Innovation, and Customer Delight guide every decision we make 
              and every service we provide.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <h3 className="section-subtitle">Why Choose LuxWheels?</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="section-subtitle">Meet Our Team</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="commitment-section">
          <div className="commitment-content">
            <h3>Our Commitment to Excellence</h3>
            <p>
              At LuxWheels, we're committed to delivering more than just a car rental service. 
              We provide peace of mind, luxury experiences, and memories that last a lifetime. 
              Every vehicle in our fleet undergoes rigorous quality checks, and our team is 
              dedicated to ensuring your complete satisfaction.
            </p>
            <div className="commitment-features">
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <span>Secure & Insured</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⭐</span>
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>Quick Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;