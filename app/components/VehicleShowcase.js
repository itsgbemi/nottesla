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
<section className="bg-white relative">
<div 
ref={scrollContainerRef}
className="flex h-[70vh] overflow-x-auto snap-x mandatory scrollbar-hide gap-5 px-10 md:px-25"
>
{vehicles.map((vehicle, index) => (
<div 
key={index} 
className="min-w-[calc(90vw-120px)] md:min-w-[calc(85vw-160px)] h-[calc(100%-60px)] my-7.5 snap-start bg-cover bg-center flex flex-col justify-between p-20 md:p-10 relative rounded-xl overflow-hidden"
style={{ backgroundImage: `url(${vehicle.image})` }}
>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
<div className="relative z-2 flex flex-col h-full text-white text-left">
<div className="text-sm mb-auto">{vehicle.preHeading}</div>
<div className="mt-auto">
<h3 className="text-4xl font-bold mb-2">{vehicle.heading}</h3>
<p className="text-base underline mb-7.5 cursor-pointer">{vehicle.subtitle}</p>
<div className="flex gap-5">
{vehicle.buttons.map((button, btnIndex) => (
<button
key={btnIndex}
className={`py-3 flex-1 rounded text-sm font-semibold cursor-pointer border-none ${button.primary ? 'bg-primary text-white' : 'bg-white/90 text-black'}`}
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
<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-10">
{vehicles.map((_, index) => (
<button
key={index}
className={`w-2.5 h-2.5 rounded-full cursor-pointer border-none ${index === currentSlide ? 'bg-black' : 'bg-black/30'}`}
onClick={() => {
setCurrentSlide(index);
const container = scrollContainerRef.current;
if (container) {
container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' });
}
}}
/>
))}
</div>
</section>
);
}
