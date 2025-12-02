import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down'); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up'); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className="header"
      style={{
        transform: scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease-in-out'
      }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">LegalEaseAI</span>
          <span className="logo-dot"></span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">
            <span className="link-text">Home</span>
            <span className="link-line"></span>
          </Link>
          <Link to="/about" className="nav-link">
            <span className="link-text">About</span>
            <span className="link-line"></span>
          </Link>
          <Link to="/services" className="nav-link">
            <span className="link-text">Services</span>
            <span className="link-line"></span>
          </Link>
          <Link to="/chatbot" className="nav-link">
            <span className="link-text">Chatbot</span>
            <span className="link-line"></span>
          </Link>
          <Link to="/login" className="nav-link">
            <span className="link-text">Login</span>
            <span className="link-line"></span>
          </Link>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
