'use client';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

const heroData = [
{
title: "Model 3",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718555/tqzdok9ooya1zeadvdej.jpg",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728713/vnv9jhbhut4sajs0d5xu.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: true
},
{
title: "Model S",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718557/d99zs8bkkrzdx73yuw9u.jpg",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728713/fb2qr0nn0onpzlvmzs6o.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: false
},
{
title: "Model X",
backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718561/ut5m13dzczphrjfx9bae.jpg",
mobileBackgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761728712/rckwee0mtzethxsuv6k3.avif",
buttons: [
{ text: "Order Now", primary: true },
{ text: "Learn More", primary: false }
],
showSchedule: false
}
];

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
const [isMobile, setIsMobile] = useState(false);

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

return (
<main>
<Header />
{heroData.map((hero, index) => (
<Hero
key={index}
title={hero.title}
backgroundImage={isMobile ? hero.mobileBackgroundImage : hero.backgroundImage}
buttons={hero.buttons}
showSchedule={hero.showSchedule}
isActive={index === currentSlide}
/>
))}
<div className="dots-container">
{heroData.map((_, index) => (
<button
key={index}
className={`dot ${index === currentSlide ? 'active' : ''}`}
onClick={() => setCurrentSlide(index)}
/>
))}
</div>
<Footer />
</main>
);
}
