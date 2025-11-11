import React, { useState, useMemo } from 'react';
import '../styles/CarFleet.css';

const CarFleet = ({ filters = {} }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [currentBookingCar, setCurrentBookingCar] = useState(null);

  // Wrap cars array in useMemo to prevent unnecessary re-renders
  const cars = useMemo(() => [
    {
      id: 1,
      name: 'BMW 7 Series',
      type: 'Luxury Sedan',
      image: 'https://www.bmw.in/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-css-7-series-protection-ms-new-standard.jpg',
      price: '₹12,000/day',
      features: ['5 Seats', 'Petrol', 'Automatic', 'Premium Sound'],
      details: {
        seating: '5 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Black Sapphire',
        engine: '3.0L Turbo I6',
        horsepower: '335 HP',
        features: ['Premium Sound System', 'Massage Seats', 'Panoramic Roof', 'Heated Seats']
      }
    },
    {
      id: 2,
      name: 'Mercedes-Benz S-Class',
      type: 'Executive Sedan',
      image: 'https://autodesignmagazine.com/wp-content/uploads/2020/09/2020090401_Mercedes_SClass.jpg',
      price: '₹15,000/day',
      features: ['5 Seats', 'Petrol', 'Automatic', 'Massage Seats'],
      details: {
        seating: '5 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Obsidian Black',
        engine: '3.0L Turbo I6',
        horsepower: '362 HP',
        features: ['Massage Seats', 'Burmester Sound', 'Air Suspension', 'Night Vision']
      }
    },
    {
      id: 3,
      name: 'Audi A8',
      type: 'Luxury Sedan',
      image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80',
      price: '₹11,500/day',
      features: ['5 Seats', 'Petrol', 'Automatic', 'Quattro AWD'],
      details: {
        seating: '5 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Glacier White',
        engine: '3.0L Turbo V6',
        horsepower: '335 HP',
        features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound', 'Air Suspension']
      }
    },
    {
      id: 4,
      name: 'Porsche 911',
      type: 'Sports Car',
      image: 'https://images.drive.ru/i/0/5d498984ec05c4270700001d.jpg',
      price: '₹25,000/day',
      features: ['2 Seats', 'Petrol', 'Automatic', 'Sport Mode'],
      details: {
        seating: '2 Seats',
        transmission: 'PDK Automatic',
        fuel: 'Petrol',
        color: 'Guards Red',
        engine: '3.0L Twin-Turbo H6',
        horsepower: '443 HP',
        features: ['Sport Chrono Package', 'Active Suspension', 'Sport Exhaust', '20-inch Wheels']
      }
    },
    {
      id: 5,
      name: 'Range Rover Autobiography',
      type: 'Luxury SUV',
      image: 'https://oscarjacobs.co.uk/wp-content/uploads/2024/01/01.RangeRover.jpg',
      price: '₹18,000/day',
      features: ['7 Seats', 'Diesel', 'Automatic', 'Terrain Response'],
      details: {
        seating: '7 Seats',
        transmission: 'Automatic',
        fuel: 'Diesel',
        color: 'Santorini Black',
        engine: '3.0L Turbo Diesel',
        horsepower: '296 HP',
        features: ['Terrain Response', 'Air Suspension', 'Meridian Sound', 'Panoramic Roof']
      }
    },
    {
      id: 6,
      name: 'Lexus LX',
      type: 'Premium SUV',
      image: 'https://hagerty-media-prod.imgix.net/2021/11/2021_Lexus_LX_570-16.jpg?auto=format%2Ccompress&ixlib=php-3.3.0',
      price: '₹16,500/day',
      features: ['7 Seats', 'Diesel', 'Automatic', 'Mark Levinson Audio'],
      details: {
        seating: '7 Seats',
        transmission: 'Automatic',
        fuel: 'Diesel',
        color: 'Atomic Silver',
        engine: '3.3L Turbo Diesel',
        horsepower: '309 HP',
        features: ['Mark Levinson Audio', 'Adaptive Variable Suspension', '4WD', 'Cooled Seats']
      }
    },
    {
      id: 7,
      name: 'Jaguar F-Type',
      type: 'Sports Coupe',
      image: 'https://www.awin.ca/wp-content/uploads/2018/08/Review-2018-Jaguar-F-Type-coupe-18-scaled.jpg',
      price: '₹22,000/day',
      features: ['2 Seats', 'Petrol', 'Automatic', 'Active Exhaust'],
      details: {
        seating: '2 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'British Racing Green',
        engine: '2.0L Turbo I4',
        horsepower: '296 HP',
        features: ['Active Exhaust', 'Sport Suspension', 'Leather Interior', '20-inch Wheels']
      }
    },
    {
      id: 8,
      name: 'Tesla Model S',
      type: 'Electric Sedan',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*',
      price: '₹14,000/day',
      features: ['5 Seats', 'Electric', 'Automatic', 'Ludicrous Mode'],
      details: {
        seating: '5 Seats',
        transmission: 'Single-Speed Automatic',
        fuel: 'Electric',
        color: 'Pearl White',
        engine: 'Dual Motor AWD',
        horsepower: '670 HP',
        features: ['Ludicrous Mode', 'Autopilot', 'Glass Roof', 'Premium Sound']
      }
    },
    {
      id: 9,
      name: 'BMW X7',
      type: 'Luxury SUV',
      image: 'https://di-uploads-pod25.dealerinspire.com/bmwofsandiego/uploads/2020/12/A-2021-BMW-X7-PARKED-IN-A-DRIVEWAY.png',
      price: '₹17,500/day',
      features: ['7 Seats', 'Petrol', 'Automatic', 'Panoramic Roof'],
      details: {
        seating: '7 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Mineral White',
        engine: '3.0L Turbo I6',
        horsepower: '335 HP',
        features: ['Panoramic Roof', 'Air Suspension', 'Harman Kardon Sound', 'Gesture Control']
      }
    },
    {
      id: 10,
      name: 'Audi R8',
      type: 'Super Car',
      image: 'https://acko-cms.ackoassets.com/Audi_R8_131dc8710b.png',
      price: '₹35,000/day',
      features: ['2 Seats', 'Petrol', 'Automatic', 'Quattro AWD'],
      details: {
        seating: '2 Seats',
        transmission: 'S-Tronic Automatic',
        fuel: 'Petrol',
        color: 'Daytona Gray',
        engine: '5.2L V10',
        horsepower: '562 HP',
        features: ['Quattro AWD', 'Carbon Ceramic Brakes', 'Magnetic Ride', 'Sport Exhaust']
      }
    },
    {
      id: 11,
      name: 'Lamborghini Huracan',
      type: 'Super Car',
      image: 'https://images.clickdealer.co.uk/vehicles/6426/6426105/large1/152928181.jpg',
      price: '₹45,000/day',
      features: ['2 Seats', 'Petrol', 'Automatic', 'Sport Mode'],
      details: {
        seating: '2 Seats',
        transmission: '7-Speed Automatic',
        fuel: 'Petrol',
        color: 'Arancio Borealis',
        engine: '5.2L V10',
        horsepower: '610 HP',
        features: ['ALA Aerodynamics', 'Carbon Ceramic Brakes', 'Magnetic Suspension', 'Sport Exhaust']
      }
    },
    {
      id: 12,
      name: 'Rolls Royce Ghost',
      type: 'Ultra Luxury',
      image: 'https://images.otf3.pixelmotiondemo.com/OTBhP-20240618212621.jpg',
      price: '₹50,000/day',
      features: ['5 Seats', 'Petrol', 'Automatic', 'VIP Interior'],
      details: {
        seating: '5 Seats',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Diamond Black',
        engine: '6.75L V12',
        horsepower: '563 HP',
        features: ['Starlight Headliner', 'Massage Seats', 'Air Suspension', 'Bespoke Audio']
      }
    },
    {
  id: 13,
  name: 'BMW i7',
  type: 'Electric Sedan',
  image: 'https://www.usnews.com/object/image/00000195-f89c-d9b4-add5-fadd38740000/img-9805.jpeg?update-time=1743632742453&size=responsiveGallery&format=webp',
  price: '₹16,000/day',
  features: ['5 Seats', 'Electric', 'Automatic', 'Crystal Headlights'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Electric',
    color: 'Mineral White',
    engine: 'Dual Motor Electric',
    horsepower: '536 HP',
    features: ['Theatre Screen', 'Crystal Headlights', 'Sky Lounge Roof', 'Bowers & Wilkins Sound']
  }
},
{
  id: 14,
  name: 'Mercedes-AMG GT',
  type: 'Sports Coupe',
  image: 'https://www.thedrive.com/wp-content/uploads/content-b/message-editor/1595365781897-img_7721copy.jpg?strip=all&quality=85h',
  price: '₹28,000/day',
  features: ['2 Seats', 'Petrol', 'Automatic', 'AMG Performance'],
  details: {
    seating: '2 Seats',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Selenite Grey',
    engine: '4.0L V8 Biturbo',
    horsepower: '577 HP',
    features: ['AMG Performance', 'Race Mode', 'Carbon Ceramic Brakes', 'Sport Exhaust']
  }
},
{
  id: 15,
  name: 'Audi Q8',
  type: 'Luxury SUV',
  image: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2024/11/Audi-Q8-1.jpg',
  price: '₹19,000/day',
  features: ['5 Seats', 'Petrol', 'Automatic', 'Quattro AWD'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Navarra Blue',
    engine: '3.0L Turbo V6',
    horsepower: '335 HP',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Air Suspension', 'Bang & Olufsen Sound']
  }
},
{
  id: 16,
  name: 'Porsche Panamera',
  type: 'Executive Sedan',
  image: 'https://www.i-auto.sk/wp-content/uploads/2025/07/10/1b4870e1-59e7-4bf4-b5d4-64a6fa9ac3b2rulemo-1024_edited.jpg',
  price: '₹22,000/day',
  features: ['5 Seats', 'Petrol', 'Automatic', 'Sport Chrono'],
  details: {
    seating: '5 Seats',
    transmission: 'PDK Automatic',
    fuel: 'Petrol',
    color: 'Carmine Red',
    engine: '2.9L V6 Twin-Turbo',
    horsepower: '440 HP',
    features: ['Sport Chrono', 'Air Suspension', 'Panoramic Roof', 'Bose Sound System']
  }
},
{
  id: 17,
  name: 'Range Rover Velar',
  type: 'Premium SUV',
  image: 'https://www.cemasina.superspeed.tv/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-07-at-17.04.47-1.jpeg.webp',
  price: '₹14,000/day',
  features: ['5 Seats', 'Diesel', 'Automatic', 'Touch Pro Duo'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Diesel',
    color: 'Fuji White',
    engine: '2.0L Turbo Diesel',
    horsepower: '240 HP',
    features: ['Touch Pro Duo', 'Air Suspension', 'Meridian Sound', 'Panoramic Roof']
  }
},
{
  id: 18,
  name: 'Lexus ES',
  type: 'Executive Sedan',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Lexus_ES_350_%28GSZ10%29_IMG_4332.jpg',
  price: '₹12,000/day',
  features: ['5 Seats', 'Petrol', 'Automatic', 'Mark Levinson'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Sonic Quartz',
    engine: '2.5L Hybrid',
    horsepower: '215 HP',
    features: ['Mark Levinson Audio', 'Panoramic Roof', 'Heated Seats', 'Adaptive Cruise Control']
  }
},
{
  id: 19,
  name: 'Jaguar XF',
  type: 'Executive Sedan',
  image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/XF/8670/Jaguar-XF-2.0-Petrol-R-Dynamic-S/1635170619851/front-left-side-47.jpg',
  price: '₹13,000/day',
  features: ['5 Seats', 'Diesel', 'Automatic', 'Meridian Sound'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Diesel',
    color: 'Portofino Blue',
    engine: '2.0L Turbo Diesel',
    horsepower: '240 HP',
    features: ['Meridian Sound', 'Panoramic Roof', 'Leather Interior', 'Adaptive Dynamics']
  }
},
{
  id: 20,
  name: 'Tesla Model X',
  type: 'Electric SUV',
  image: 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/inno5xbcnmct5gl4xdgn.jpg',
  price: '₹20,000/day',
  features: ['7 Seats', 'Electric', 'Automatic', 'Falcon Doors'],
  details: {
    seating: '7 Seats',
    transmission: 'Single-Speed Automatic',
    fuel: 'Electric',
    color: 'Midnight Silver',
    engine: 'Dual Motor AWD',
    horsepower: '670 HP',
    features: ['Falcon Wing Doors', 'Autopilot', 'Glass Roof', 'Premium Sound']
  }
},
{
  id: 21,
  name: 'Lamborghini Urus',
  type: 'Super SUV',
  image: 'https://www.lamborghiniwashington.com/static/dealer-14437/Model_pages/urus_performante2.jpg',
  price: '₹40,000/day',
  features: ['5 Seats', 'Petrol', 'Automatic', 'Sport Mode'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Verde Mantis',
    engine: '4.0L Twin-Turbo V8',
    horsepower: '641 HP',
    features: ['ALA System', 'Carbon Ceramic Brakes', 'Air Suspension', 'Sport Exhaust']
  }
},
{
  id: 22,
  name: 'Rolls Royce Cullinan',
  type: 'Ultra Luxury SUV',
  image: 'https://www.europeanprestige.co.uk/blobs/stock/521/images/7006aeb5-82f7-43ac-b0e9-38e8730296e7/hi4a0643.jpg?width=2000&height=1333',
  price: '₹55,000/day',
  features: ['5 Seats', 'Petrol', 'Automatic', 'VIP Interior'],
  details: {
    seating: '5 Seats',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Temple Red',
    engine: '6.75L V12',
    horsepower: '563 HP',
    features: ['Starlight Headliner', 'Massage Seats', 'Air Suspension', 'Bespoke Audio']
  }
},

    
  ], []); // Empty dependency array means this only runs once

  // Filter cars function - NOW BEING USED
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      // Brand filter
      if (filters.brand && !car.name.toLowerCase().includes(filters.brand.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const price = parseInt(car.price.replace(/[^\d]/g, ''));
        switch (filters.priceRange) {
          case 'Under ₹10,000/day':
            if (price >= 10000) return false;
            break;
          case '₹10,000 - ₹15,000/day':
            if (price < 10000 || price > 15000) return false;
            break;
          case '₹15,000 - ₹20,000/day':
            if (price < 15000 || price > 20000) return false;
            break;
          case '₹20,000 - ₹30,000/day':
            if (price < 20000 || price > 30000) return false;
            break;
          case 'Above ₹30,000/day':
            if (price <= 30000) return false;
            break;
          default:
            break;
        }
      }

      // Car type filter
      if (filters.carType && car.type !== filters.carType) {
        return false;
      }

      // Transmission filter
      if (filters.transmission && !car.details.transmission.toLowerCase().includes(filters.transmission.toLowerCase())) {
        return false;
      }

      // Fuel type filter
      if (filters.fuelType && car.details.fuel !== filters.fuelType) {
        return false;
      }

      return true;
    });
  }, [cars, filters]);

  const handleKnowMore = (car) => {
    setSelectedCar(car);
    setShowDetails(true);
  };

  const handleBookNow = (car) => {
    setCurrentBookingCar(car);
    setShowBookingPage(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedCar(null);
  };

  const closeBookingPage = () => {
    setShowBookingPage(false);
    setCurrentBookingCar(null);
  };

  // Simple Booking Component
  const SimpleBookingPage = () => {
    const [bookingData, setBookingData] = useState({
      name: '',
      email: '',
      phone: '',
      pickupDate: '',
      returnDate: ''
    });

    const handleBookingSubmit = (e) => {
      e.preventDefault();
      alert(`Booking confirmed for ${currentBookingCar.name}! We'll contact you soon.`);
      closeBookingPage();
    };

    return (
      <div className="modal-overlay" onClick={closeBookingPage}>
        <div className="modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeBookingPage}>×</button>
          <h2>Book {currentBookingCar.name}</h2>
          <form onSubmit={handleBookingSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required 
                value={bookingData.name} 
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required 
                value={bookingData.email} 
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required 
                value={bookingData.phone} 
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Pickup Date" required 
                value={bookingData.pickupDate} 
                onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Return Date" required 
                value={bookingData.returnDate} 
                onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})} 
              />
            </div>
            <button type="submit" className="book-now-btn">Confirm Booking</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="car-fleet" id="fleet">
        <div className="container">
          <h2 className="section-title">Luxury Car <span>Fleet</span></h2>
          <p className="section-subtitle">Experience premium comfort and performance with our exclusive luxury collection</p>
          
          {/* Filter Results Info */}
          {Object.values(filters).some(filter => filter !== '') && (
            <div className="filter-results-info">
              <p>
                Showing {filteredCars.length} of {cars.length} cars
                {Object.values(filters).filter(f => f !== '').length > 0 && 
                  ' matching your filters'
                }
              </p>
            </div>
          )}

          <div className="cars-grid">
            {filteredCars.map(car => (
              <div key={car.id} className="car-card">
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="car-type">{car.type}</div>
                  <div className="car-price-badge">{car.price}</div>
                </div>
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <div className="button-group">
                    <button 
                      className="know-more-btn"
                      onClick={() => handleKnowMore(car)}
                    >
                      Know Me 
                    </button>
                    <button 
                      className="book-now-btn"
                      onClick={() => handleBookNow(car)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCars.length === 0 && (
            <div className="no-results">
              <h3>No cars found matching your filters</h3>
              <p>Try adjusting your filters or browse our complete collection</p>
            </div>
          )}
        </div>
      </section>

      {/* Car Details Modal */}
      {showDetails && selectedCar && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeDetails}>×</button>
            
            <div className="modal-header">
              <h2>{selectedCar.name}</h2>
              <p className="car-type-badge">{selectedCar.type}</p>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCar.image} alt={selectedCar.name} />
              </div>
              
              <div className="modal-details">
                <div className="detail-section">
                  <h3>Specifications</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Seating:</span>
                      <span className="spec-value">{selectedCar.details.seating}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Transmission:</span>
                      <span className="spec-value">{selectedCar.details.transmission}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Fuel Type:</span>
                      <span className="spec-value">{selectedCar.details.fuel}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Color:</span>
                      <span className="spec-value">{selectedCar.details.color}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Engine:</span>
                      <span className="spec-value">{selectedCar.details.engine}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Horsepower:</span>
                      <span className="spec-value">{selectedCar.details.horsepower}</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Premium Features</h3>
                  <div className="features-list">
                    {selectedCar.details.features.map((feature, index) => (
                      <span key={index} className="feature-badge">{feature}</span>
                    ))}
                  </div>
                </div>

                <div className="price-section-modal">
                  <div className="modal-price">{selectedCar.price}</div>
                  <button 
                    className="modal-book-btn"
                    onClick={() => {
                      closeDetails();
                      handleBookNow(selectedCar);
                    }}
                  >
                    Book This Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple Booking Modal */}
      {showBookingPage && currentBookingCar && <SimpleBookingPage />}
    </>
  );
};

export default CarFleet;