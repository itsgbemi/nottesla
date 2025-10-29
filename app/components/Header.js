'use client';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const checkMobile = () => setIsMobile(window.innerWidth <= 768);
checkMobile();
window.addEventListener('resize', checkMobile);
return () => window.removeEventListener('resize', checkMobile);
}, []);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<>
<header className={`header ${isMobile ? 'transparent' : ''}`}>
<img 
src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761718553/xvtekklcntsfqyt2qtzp.png" 
alt="Tesla" 
className="logo"
/>

<nav className="desktop-nav">
<a href="#" className="nav-link">Vehicles</a>
<a href="#" className="nav-link">Energy</a>
<a href="#" className="nav-link">Charging</a>
<a href="#" className="nav-link">Discover</a>
<a href="#" className="nav-link">Shop</a>
</nav>

<div className="utility-icons">
<button className="utility-icon" data-tooltip="Support">
<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
<path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
<line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
</button>
<button className="utility-icon" data-tooltip="Region & Language">
<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<circle cx="12" cy="12" r="10"/>
<line x1="2" y1="12" x2="22" y2="12"/>
<path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
</svg>
</button>
<button className="utility-icon" data-tooltip="Account">
<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
<circle cx="12" cy="7" r="4"/>
</svg>
</button>
</div>

<div className="mobile-nav">
<button className="menu-btn" onClick={toggleMenu}>
Menu
</button>
</div>
</header>

<MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
</>
);
}
