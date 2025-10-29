'use client';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="white">
            <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12-5.5c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"/>
          </svg>
        </div>
        
        <nav className="desktop-nav">
          <a href="#" className="nav-link">Vehicles</a>
          <a href="#" className="nav-link">Energy</a>
          <a href="#" className="nav-link">Charging</a>
          <a href="#" className="nav-link">Discover</a>
          <a href="#" className="nav-link">Shop</a>
        </nav>
        
        <div className="mobile-nav">
          <button className="hamburger" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
