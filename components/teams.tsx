'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Team Data with specific colors from the image
const teams = [
  { id: 1, name: 'Team Alpha', color: 'bg-[#ffc107]' }, // Yellow
  { id: 2, name: 'Team Bravo', color: 'bg-[#d67bb0]' }, // Pink
  { id: 3, name: 'Team Charlie', color: 'bg-[#e0cfa0]' }, // Beige
  { id: 4, name: 'Team Delta', color: 'bg-[#d9534f]' }, // Red
  { id: 5, name: 'Team Echo', color: 'bg-[#311b92]' }, // Deep Blue
  { id: 6, name: 'Team Foxtrot', color: 'bg-[#ffc107]' }, // Repeat for scrolling
  { id: 7, name: 'Team Golf', color: 'bg-[#d67bb0]' },
];

export default function TeamsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Responsive: Determine how many cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(5); // Desktop: 5 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    // Initial call
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = teams.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gray-100">
      
      {/* 1. SECTION BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/footerimg.jpg" // Using footerimg as requested
          alt="Background Texture"
          fill
          className="object-cover opacity-40 grayscale mix-blend-multiply"
        />
        {/* Soft overlay to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent opacity-90 to-white/80" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4">
        
        {/* 2. HEADING */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-2" style={{ fontFamily: 'sans-serif' }}>
            TEAMS
          </h2>
          {/* Purple Underline */}
          <div className="w-20 h-1 bg-[#4a148c]" />
        </div>

        {/* 3. CAROUSEL TRACK */}
        <div className="relative w-full overflow-hidden px-2 md:px-0">
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform gap-4 md:gap-6"
            style={{
              // Logic: Translate based on percentage of card width
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {teams.map((team, index) => (
              <div
                key={`${team.id}-${index}`}
                className="relative shrink-0 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{
                  // Dynamic width calculation minus the gap compensation
                  flexBasis: `calc(${100 / cardsPerView}% - ${(cardsPerView > 1 ? 24 : 0)}px)`,
                  aspectRatio: '1/1', // Keep square shape
                }}
              >
                {/* CARD BACKGROUND COLOR */}
                <div className={`absolute inset-0 ${team.color}`} />

                {/* CARD TEXTURE (footerimg.jpg) */}
                <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay">
                  <Image
                    src="/assets/footerimg.jpg"
                    alt="Card Texture"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* GLOSSY SHINE EFFECT (Top right corner) */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl" />

                {/* LION MASCOT (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                   {/* 
                      Since I cannot browse the web for a new Lion SVG, 
                      I am using a generic Lion placeholder URL. 
                      You can replace the src below with your local lion asset.
                   */}
                   <div className="relative w-3/4 h-3/4 drop-shadow-xl">
                     <Image
                        src="/assets/footerimg.jpg"
                        alt="Team Mascot"
                        fill
                        className="object-contain"
                     />
                   </div>
                </div>

                {/* Team Name Overlay (Optional, appears on hover) */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-xl uppercase tracking-widest">{team.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. NAVIGATION BUTTONS */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#4a148c] text-white flex items-center justify-center shadow-lg hover:bg-[#6a1b9a] hover:scale-110 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#4a148c] text-white flex items-center justify-center shadow-lg hover:bg-[#6a1b9a] hover:scale-110 transition-all duration-300"
            aria-label="Next Slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}