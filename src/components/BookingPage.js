import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css';

const API_BASE_URL = "https://carrental-orqw.onrender.com" || 'http://localhost:5000';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    licenseNumber: '',
    pickupDate: '',
    returnDate: '',
    paymentMethod: 'credit-card'
  });

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [errorBookings, setErrorBookings] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoadingBookings(true);
    setErrorBookings(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/booking`);
      if (!res.ok) throw new Error('Failed to fetch bookings');
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      setErrorBookings(err.message);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotal = () => {
    if (bookingData.pickupDate && bookingData.returnDate) {
      const pickup = new Date(bookingData.pickupDate);
      const returnDate = new Date(bookingData.returnDate);
      const days = Math.ceil((returnDate - pickup) / (1000 * 60 * 60 * 24));
      const pricePerDay = parseInt(car.price.replace(/[^\d]/g, ''));
      return days > 0 ? days * pricePerDay : 0;
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!bookingData.fullName || !bookingData.email || !bookingData.phone || 
        !bookingData.address || !bookingData.licenseNumber || 
        !bookingData.pickupDate || !bookingData.returnDate) {
      alert('Please fill all required fields!');
      return;
    }
    if (calculateTotal() <= 0) {
      alert('Please select valid pickup and return dates!');
      return;
    }
    // Prepare booking payload
    const payload = {
      user: '64b7e2f8c2a1d2e4f8a1b2c3', // Replace with actual user ID from auth if available
      car: car.name,
      startDate: bookingData.pickupDate,
      endDate: bookingData.returnDate,
      totalPrice: calculateTotal(),
      fullName: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
      address: bookingData.address,
      licenseNumber: bookingData.licenseNumber,
      paymentMethod: bookingData.paymentMethod
    };
    try {
      const res = await fetch(`${API_BASE_URL}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Booking failed');
      setIsBookingConfirmed(true);
      fetchBookings(); // Refresh bookings list
    } catch (err) {
      alert('Booking failed: ' + err.message);
    }
  };

  if (isBookingConfirmed) {
    return (
      <div className="booking-success">
        <div className="success-content">
          <div className="success-icon">🎉</div>
          <h2>Booking Confirmed!</h2>
          <p className="success-message">
            Thank you for choosing LuxWheels! Your <strong>{car.name}</strong> has been successfully booked.
          </p>
          
          <div className="booking-details">
            <h3>Booking Details:</h3>
            <div className="detail-item">
              <span>Booking ID:</span>
              <strong>BK{Date.now()}</strong>
            </div>
            <div className="detail-item">
              <span>Car:</span>
              <strong>{car.name}</strong>
            </div>
            <div className="detail-item">
              <span>Total Amount:</span>
              <strong>₹{calculateTotal().toLocaleString()}</strong>
            </div>
            <div className="detail-item">
              <span>Pickup Date:</span>
              <strong>{new Date(bookingData.pickupDate).toLocaleDateString()}</strong>
            </div>
          </div>

          <div className="success-actions">
            <p className="welcome-message">
              🚗 Your luxury experience awaits! We can't wait to serve you again. 
              Enjoy the premium drive and create unforgettable memories! ✨
            </p>
            <div className="action-buttons">
              <button onClick={() => navigate('/')} className="home-btn">
                Back to Home
              </button>
              <button onClick={() => window.print()} className="print-btn">
                Print Receipt
              </button>
            </div>
          </div>

          <div className="special-offer">
            <h4>🎁 Special Offer for You!</h4>
            <p>Get 15% off on your next booking when you refer a friend!</p>
          </div>
        </div>
      </div>
    );
  }

  const totalAmount = calculateTotal();

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book Your Dream Car</h1>
        <p>Complete your booking in just a few steps</p>
      </div>

      <div className="booking-content">
        <div className="car-summary">
          <div className="car-image">
            <img src={car?.image} alt={car.name} />
          </div>
          <div className="car-details">
            <h3>{car.name}</h3>
            <p className="car-type">{car.type}</p>
            <p className="car-price">{car.price}</p>
            <div className="car-features">
              {car.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={bookingData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={bookingData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Driver's License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={bookingData.licenseNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Rental Period</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Pickup Date *</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={bookingData.pickupDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="form-group">
                <label>Return Date *</label>
                <input
                  type="date"
                  name="returnDate"
                  value={bookingData.returnDate}
                  onChange={handleInputChange}
                  min={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label>Payment Method *</label>
              <select
                name="paymentMethod"
                value={bookingData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net-banking">Net Banking</option>
              </select>
            </div>
          </div>

          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-details">
              <div className="summary-item">
                <span>Car Rental:</span>
                <span>{car.price}</span>
              </div>
              <div className="summary-item">
                <span>Rental Period:</span>
                <span>
                  {bookingData.pickupDate && bookingData.returnDate 
                    ? Math.ceil((new Date(bookingData.returnDate) - new Date(bookingData.pickupDate)) / (1000 * 60 * 60 * 24)) + ' days'
                    : 'Select dates'
                  }
                </span>
              </div>
              <div className="summary-item total">
                <span>Total Amount:</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button type="submit" className="confirm-booking-btn">
            Confirm Booking - ₹{totalAmount.toLocaleString()}
          </button>
        </form>

        {loadingBookings ? (
          <div>Loading bookings...</div>
        ) : errorBookings ? (
          <div>Error: {errorBookings}</div>
        ) : bookings.length > 0 ? (
          <div className="bookings-list">
            <h3>All Bookings</h3>
            <ul>
              {bookings.map((b) => (
                <li key={b._id}>
                  Car: {b.car}, User: {b.fullName || (b.user && b.user.email) || 'N/A'}, From: {new Date(b.startDate).toLocaleDateString()} To: {new Date(b.endDate).toLocaleDateString()}, Total: ₹{b.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;