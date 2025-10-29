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
<button className="utility-icon">Ask a Question</button>
<button className="utility-icon">Language</button>
<button className="utility-icon">Account</button>
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
