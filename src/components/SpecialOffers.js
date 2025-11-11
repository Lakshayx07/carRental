import React from 'react';
import '../styles/SpecialOffers.css';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'First Ride Discount',
      discount: '25% OFF',
      description: 'Get 25% off on your first luxury car rental',
      code: 'FIRST25',
      validUntil: 'Dec 31, 2026',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'Weekend Special',
      discount: '30% OFF',
      description: 'Enjoy 30% off on all weekend bookings',
      code: 'WEEKEND30',
      validUntil: 'Ongoing',
      color: '#764ba2'
    },
    {
      id: 3,
      title: 'Long Term Rental',
      discount: '20% OFF',
      description: 'Book for 7+ days and get 20% discount',
      code: 'LONGTERM20',
      validUntil: 'Dec 31, 2026',
      color: '#e74c3c'
    },
    {
      id: 4,
      title: 'Refer & Earn',
      discount: '₹2,000 OFF',
      description: 'Refer a friend and get ₹2000 off your next rental',
      code: 'REFER2000',
      validUntil: 'Ongoing',
      color: '#2ecc71'
    }
  ];

  return (
    <section className="special-offers-section" id="offers">
      <div className="container">
        <h2 className="section-title">Special <span>Offers</span></h2>
        <p className="section-subtitle">Exclusive deals and discounts for our valued customers</p>
        
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ '--accent-color': offer.color }}>
              <div className="offer-badge" style={{ backgroundColor: offer.color }}>
                {offer.discount}
              </div>
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-code">
                  <span>Use Code: </span>
                  <strong>{offer.code}</strong>
                </div>
                <div className="offer-validity">
                  Valid until: {offer.validUntil}
                </div>
              </div>
              <div className="offer-ribbon"></div>
            </div>
          ))}
        </div>
        
        <div className="offers-cta">
          <p>🎁 More offers coming soon! Stay connect  for updates.</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;