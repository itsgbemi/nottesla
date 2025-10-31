'use client';
import { useRef } from 'react';

export default function VehicleShowcase({ vehicles }) {
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
const container = scrollContainerRef.current;
if (container) {
const scrollAmount = diff > 0 ? container.offsetWidth : -container.offsetWidth;
container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
}
};

return (
<section className="vehicle-showcase">
<div className="container">
<h2 className="showcase-title">Vehicle Lineup</h2>
<div 
ref={scrollContainerRef}
className="vehicle-scroll-container"
onTouchStart={handleTouchStart}
onTouchMove={handleTouchMove}
onTouchEnd={handleTouchEnd}
>
{vehicles.map((vehicle, index) => (
<div key={index} className="vehicle-card">
<div className="vehicle-image-container">
<img src={vehicle.image} alt={vehicle.heading} className="vehicle-image" />
</div>
<div className="vehicle-content">
<div className="vehicle-preheading">{vehicle.preHeading}</div>
<div className="vehicle-bottom-content">
<h3 className="vehicle-heading">{vehicle.heading}</h3>
<p className="vehicle-subtitle">{vehicle.subtitle}</p>
<div className="vehicle-buttons">
{vehicle.buttons.map((button, btnIndex) => (
<button
key={btnIndex}
className={`vehicle-btn ${button.primary ? 'vehicle-btn-primary' : 'vehicle-btn-secondary'}`}
>
{button.text}
</button>
))}
</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
