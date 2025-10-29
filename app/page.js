'use client';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

const heroData = [
  {
    title: "Model 3",
    backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718555/tqzdok9ooya1zeadvdej.jpg",
    buttons: [
      { text: "Order Now", primary: true },
      { text: "Learn More", primary: false }
    ],
    showSchedule: true
  },
  {
    title: "Model S",
    backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718557/d99zs8bkkrzdx73yuw9u.jpg",
    buttons: [
      { text: "Order Now", primary: true },
      { text: "Learn More", primary: false }
    ],
    showSchedule: false
  },
  {
    title: "Model X",
    backgroundImage: "https://res.cloudinary.com/dqhawdcol/image/upload/v1761718561/ut5m13dzczphrjfx9bae.jpg",
    buttons: [
      { text: "Order Now", primary: true },
      { text: "Learn More", primary: false }
    ],
    showSchedule: false
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main>
      <Header />
      {heroData.map((hero, index) => (
        <Hero
          key={index}
          title={hero.title}
          backgroundImage={hero.backgroundImage}
          buttons={hero.buttons}
          showSchedule={hero.showSchedule}
          isActive={index === currentSlide}
        />
      ))}
      <Footer />
    </main>
  );
}
