import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import CarFilter from './components/CarFilter'; // Add this import
import CarFleet from './components/CarFleet';
import SpecialOffers from './components/SpecialOffers';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import { initScrollEffects } from './utils/scrollAnimation';

function App() {
  const [carFilters, setCarFilters] = useState({});

  useEffect(() => {
    initScrollEffects();
  }, []);

  const handleFilterChange = (filters) => {
    setCarFilters(filters);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchSection />
      <CarFilter onFilterChange={handleFilterChange} /> {/* Add this line */}
      <CarFleet filters={carFilters} /> {/* Update this line */}
      <SpecialOffers />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <AboutUs />
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;