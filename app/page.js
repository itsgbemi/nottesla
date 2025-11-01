'use client';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import VehicleShowcase from './components/VehicleShowcase';
import OffersSection from './components/OffersSection';

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
preHeading: "Sport Sedan",
heading: "Model 3",
subtitle: "2.99% APR Available",
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

const offersData = [
{
heading: "Free Supercharging",
text: "Get free unlimited Supercharging when you take delivery of a new Model S or Model X by Dec 31.",
buttonText: "Learn More"
},
{
heading: "Solar & Powerwall",
text: "Power your home with solar and battery storage. Schedule a virtual consultation.",
buttonText: "Order Now"
}
];

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
const [currentVehicleSlide, setCurrentVehicleSlide] = useState(0);
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

useEffect(() => {
const interval = setInterval(() => {
setCurrentVehicleSlide((prev) => (prev + 1) % vehicleData.length);
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
<div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
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
<VehicleShowcase vehicles={vehicleData} currentSlide={currentVehicleSlide} setCurrentSlide={setCurrentVehicleSlide} />
<OffersSection offers={offersData} />
<div className="ask-question">
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
<path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
<line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
<span>Ask a Question "What's Dog Mode?"</span>
</div>
<Footer />
</main>
);
}
