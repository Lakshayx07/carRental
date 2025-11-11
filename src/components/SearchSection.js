import React, { useState } from 'react';
import '../styles/SearchSection.css';

const SearchSection = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert('Search functionality would be implemented here!');
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <h2>Find the Perfect Car for Your Needs</h2>
          <form onSubmit={handleSearch} className="search-form">
            <div className="form-group">
              <label>Pick-up Location</label>
              <input 
                type="text" 
                placeholder="Enter city or airport"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Pick-up Date & Time</label>
              <div className="datetime-group">
                <input 
                  type="date" 
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
                <input 
                  type="time" 
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Return Date & Time</label>
              <div className="datetime-group">
                <input 
                  type="date" 
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
                <input 
                  type="time" 
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="search-button">
              Search Cars
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;