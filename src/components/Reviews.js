import React from 'react';
import '../styles/Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Amazing service! The BMW 7 Series was in perfect condition. Will definitely rent again!',
      date: '2 days ago',
      car: 'BMW 7 Series'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Best car rental experience ever. The Mercedes was spotless and the process was seamless.',
      date: '1 week ago',
      car: 'Mercedes S-Class'
    },
    {
      id: 3,
      name: 'Amit Patel',
      rating: 4,
      comment: 'Great collection of luxury cars. Porsche 911 was a dream to drive. Highly recommended!',
      date: '2 weeks ago',
      car: 'Porsche 911'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      rating: 5,
      comment: 'Excellent customer service. The Tesla Model S was incredible. 5-star experience!',
      date: '3 weeks ago',
      car: 'Tesla Model S'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      rating: 4,
      comment: 'Smooth booking process. Range Rover was perfect for our family trip. Will use again.',
      date: '1 month ago',
      car: 'Range Rover'
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      rating: 5,
      comment: 'Luxury at its best! The Audi R8 turned heads everywhere. Exceptional service!',
      date: '1 month ago',
      car: 'Audi R8'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">What Our <span>Customers Say</span></h2>
        <p className="section-subtitle">Join thousands of satisfied customers who experienced luxury with DriveEasy</p>
        
        <div className="reviews-stats">
          <div className="stat-card">
            <div className="stat-number">4.9</div>
            <div className="stat-stars">★★★★★</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2,500+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Recommend Us</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <span className="review-car">{review.car}</span>
                  </div>
                </div>
                <div className="review-rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;