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
<button className="utility-icon">
<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
</svg>
</button>
<button className="utility-icon">
<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor">
<path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
</svg>
</button>
<button className="utility-icon">
<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
