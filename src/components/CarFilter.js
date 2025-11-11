import React, { useState } from 'react';
import '../styles/CarFilter.css';

const CarFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    location: '',
    carType: '',
    transmission: '',
    fuelType: ''
  });

  const filterOptions = {
    brands: [
      'All Brands',
      'BMW',
      'Mercedes-Benz',
      'Audi',
      'Porsche',
      'Range Rover',
      'Lexus',
      'Jaguar',
      'Tesla',
      'Lamborghini',
      'Rolls Royce'
    ],
    priceRanges: [
      'Any Price',
      'Under ₹10,000/day',
      '₹10,000 - ₹15,000/day',
      '₹15,000 - ₹20,000/day',
      '₹20,000 - ₹30,000/day',
      'Above ₹30,000/day'
    ],
    locations: [
      'All Cities',
      'Gurugram',
      'Hyderabad',
      'Bangalore',
      'Mumbai',
      'Delhi',
      'Chennai',
      'Pune',
      'Kolkata'
    ],
    carTypes: [
      'All Types',
      'Luxury Sedan',
      'Executive Sedan',
      'Sports Car',
      'Luxury SUV',
      'Premium SUV',
      'Sports Coupe',
      'Electric Sedan',
      'Super Car',
      'Ultra Luxury'
    ],
    transmissions: [
      'All Transmissions',
      'Automatic',
      'Manual',
      'S-Tronic',
      'PDK'
    ],
    fuelTypes: [
      'All Fuel Types',
      'Petrol',
      'Diesel',
      'Electric',
      'Hybrid'
    ]
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value === 'All Brands' || value === 'All Types' || value === 'Any Price' || 
                   value === 'All Cities' || value === 'All Transmissions' || value === 'All Fuel Types' ? '' : value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      brand: '',
      priceRange: '',
      location: '',
      carType: '',
      transmission: '',
      fuelType: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== '').length;
  };

  return (
    <section className="car-filter-section">
      <div className="container">
        <div className="filter-header">
          <h2>Find Your Perfect Luxury Car</h2>
          <p>Refine your search with our advanced filters</p>
        </div>

        <div className="filter-container">
          <div className="filter-grid">
            {/* Brand Filter */}
            <div className="filter-group">
              <label>Car Brand</label>
              <select 
                value={filters.brand || 'All Brands'}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                {filterOptions.brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="filter-group">
              <label>Price Range</label>
              <select 
                value={filters.priceRange || 'Any Price'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                {filterOptions.priceRanges.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="filter-group">
              <label>Location</label>
              <select 
                value={filters.location || 'All Cities'}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                {filterOptions.locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Car Type Filter */}
            <div className="filter-group">
              <label>Car Type</label>
              <select 
                value={filters.carType || 'All Types'}
                onChange={(e) => handleFilterChange('carType', e.target.value)}
              >
                {filterOptions.carTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Transmission Filter */}
            <div className="filter-group">
              <label>Transmission</label>
              <select 
                value={filters.transmission || 'All Transmissions'}
                onChange={(e) => handleFilterChange('transmission', e.target.value)}
              >
                {filterOptions.transmissions.map(transmission => (
                  <option key={transmission} value={transmission}>{transmission}</option>
                ))}
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div className="filter-group">
              <label>Fuel Type</label>
              <select 
                value={filters.fuelType || 'All Fuel Types'}
                onChange={(e) => handleFilterChange('fuelType', e.target.value)}
              >
                {filterOptions.fuelTypes.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="filter-actions">
            <div className="active-filters">
              <span className="filters-count">
                {getActiveFiltersCount()} filters active
              </span>
            </div>
            <button 
              className="clear-filters-btn"
              onClick={clearAllFilters}
              disabled={getActiveFiltersCount() === 0}
            >
              Clear All Filters
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="quick-filters">
            <span className="quick-filter-label">Quick Filters:</span>
            <button 
              className={`quick-filter-tag ${filters.priceRange === 'Under ₹15,000/day' ? 'active' : ''}`}
              onClick={() => handleFilterChange('priceRange', 'Under ₹15,000/day')}
            >
              Budget Luxury
            </button>
            <button 
              className={`quick-filter-tag ${filters.carType === 'Sports Car' ? 'active' : ''}`}
              onClick={() => handleFilterChange('carType', 'Sports Car')}
            >
              Sports Cars
            </button>
            <button 
              className={`quick-filter-tag ${filters.fuelType === 'Electric' ? 'active' : ''}`}
              onClick={() => handleFilterChange('fuelType', 'Electric')}
            >
              Electric Vehicles
            </button>
            <button 
              className={`quick-filter-tag ${filters.location === 'Gurugram' ? 'active' : ''}`}
              onClick={() => handleFilterChange('location', 'Gurugram')}
            >
              Gurugram Available
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarFilter;