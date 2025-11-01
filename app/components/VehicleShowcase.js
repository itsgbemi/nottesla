'use client';
import { useRef } from 'react';

export default function VehicleShowcase({ vehicles, currentSlide, setCurrentSlide }) {
const scrollContainerRef = useRef(null);
const touchStartX = useRef(0);
const touchEndX = useRef(0);

const handleTouchStart = (e) => {
touchStartX.current = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
touchEndX.current = e.touches[0].clientX;
};

const handleTouchEnd = () => {
if (!touchStartX.current || !touchEndX.current) return;

const diff = touchStartX.current - touchEndX.current;
if (Math.abs(diff) > 50) {
if (diff > 0) {
setCurrentSlide((prev) => (prev + 1) % vehicles.length);
} else {
setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
}
const container = scrollContainerRef.current;
if (container) {
const scrollAmount = diff > 0 ? container.offsetWidth : -container.offsetWidth;
container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
}
};

return (

<section className="vehicle-showcase"> <div ref={scrollContainerRef} className="vehicle-scroll-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} > {vehicles.map((vehicle, index) => ( <div key={index} className="vehicle-card" style={{ backgroundImage: `url(${vehicle.image})` }} > <div className="vehicle-content"> <div className="vehicle-preheading">{vehicle.preHeading}</div> <div className="vehicle-bottom-content"> <h3 className="vehicle-heading">{vehicle.heading}</h3> <p className="vehicle-subtitle">{vehicle.subtitle}</p> <div className="vehicle-buttons"> {vehicle.buttons.map((button, btnIndex) => ( <button key={btnIndex} className={`vehicle-btn ${button.primary ? 'vehicle-btn-primary' : 'vehicle-btn-secondary'}`} > {button.text} </button> ))} </div> </div> </div> </div> ))} </div> <div className="vehicle-dots-container"> {vehicles.map((_, index) => ( <button key={index} className={`vehicle-dot ${index === currentSlide ? 'active' : ''}`} onClick={() => { setCurrentSlide(index); const container = scrollContainerRef.current; if (container) { container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' }); } }} /> ))} </div> </section> ); }
