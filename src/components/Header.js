import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { scrollToSection } from '../utils/scrollAnimation';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleLogin = (userData) => {
    console.log('User logged in:', userData);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        console.log('Loaded user:', userData);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="logo">
              Lux<span>Wheels</span>
            </div>
            <nav className="nav">
            <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
                <li><a href="#fleet" onClick={(e) => { e.preventDefault(); handleNavClick('fleet'); }}>Our Fleet</a></li>
                <li><a href="#offers" onClick={(e) => { e.preventDefault(); handleNavClick('offers'); }}>Offers</a></li>
                <li><a href="#reviews" onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>Reviews</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>FAQ</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            </ul>
            </nav>
            <div className="header-buttons">
              {user ? (
                <div className="user-profile">
                  <img 
                    src={user.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=667eea&color=fff&size=150`} 
                    alt={user.name} 
                    className="profile-pic" 
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=667eea&color=fff&size=150`;
                    }}
                  />
                  <span className="user-name">Hello, {user.name}</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <>
                  <button className="login-btn" onClick={openLoginModal}>Login</button>
                  <button className="signup-btn" onClick={openSignupModal}>Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;