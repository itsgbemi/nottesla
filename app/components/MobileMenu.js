export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="mobile-menu-header">
        <div className="logo">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="white">
            <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12-5.5c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"/>
          </svg>
        </div>
        <button className="close-menu" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <ul className="mobile-nav-links">
        <li><a href="#">Vehicles</a></li>
        <li><a href="#">Energy</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>
  );
}
