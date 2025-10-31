'use client';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import VehicleShowcase from './components/VehicleShowcase';

const heroData = [
{
title: "Model 3",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761738221/z5g3hm11goe43buw3ec3.avif",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728713/vnv9jhbhut4sajs0d5xu.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: false
},
{
title: "Model Y",
subtitle: "Lease Prices Increase by up to $80/mo on Nov. 4",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761738187/bpcah0gwcgevuzms8d2s.avif",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728713/fb2qr0nn0onpzlvmzs6o.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: false
},
{
title: "Cybertruck",
subtitle: "Lease From $699/mo",
linkText: "Lease Prices Increase by up to $80/mo on Nov. 4",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761738184/uxkrrrw5uwbg3akvnnvr.avif",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728712/rckwee0mtzethxsuv6k3.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: false
}
];

const vehicleData = [
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761844374/aleexjmf1y03f1fpyusi.avif",
preHeading: "Midsize SUV",
heading: "Model Y",
subtitle: "3.99% APR Available",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
]
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761844373/c2y0gqtykk0yjtspwy0z.avif",
preHeading: "Compact SUV",
heading: "Model X",
subtitle: "Lease from $699/mo",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
]
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761844373/tgrxrcexoficdqgh2bpx.avif",
preHeading: "Sedan",
heading: "Model S",
subtitle: "3.99% APR Available",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
]
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761844373/rmodukdnrdlivb2aurj9.avif",
preHeading: "Sports Car",
heading: "Roadster",
subtitle: "Coming Soon",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
]
}
];

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
const [isMobile, setIsMobile] = useState(false);
const touchStartX = useRef(0);
const touchEndX = useRef(0);

useEffect(() => {
const checkMobile = () => setIsMobile(window.innerWidth <= 768);
checkMobile();
window.addEventListener('resize', checkMobile);
return () => window.removeEventListener('resize', checkMobile);
}, []);

useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % heroData.length);
}, 5000);
return () => clearInterval(interval);
}, []);

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
setCurrentSlide((prev) => (prev + 1) % heroData.length);
} else {
setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
}
}
};

return (
<main>
<Header />
<div 
onTouchStart={handleTouchStart}
onTouchMove={handleTouchMove}
onTouchEnd={handleTouchEnd}
>
{heroData.map((hero, index) => (
<Hero
key={index}
title={hero.title}
subtitle={hero.subtitle}
linkText={hero.linkText}
backgroundImage={isMobile ? hero.mobileBackgroundImage : hero.backgroundImage}
buttons={hero.buttons}
showSchedule={hero.showSchedule}
isActive={index === currentSlide}
/>
))}
</div>
<div className="dots-container">
{heroData.map((_, index) => (
<button
key={index}
className={`dot ${index === currentSlide ? 'active' : ''}`}
onClick={() => setCurrentSlide(index)}
/>
))}
</div>
<VehicleShowcase vehicles={vehicleData} />
<Footer />
</main>
);
}

app/components/VehicleShowcase.js
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
