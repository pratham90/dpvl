'use client';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTimes } from 'react-icons/fa';



export default function Heroo({ 
  title = "GALLERY", 
  subtitle = "d" 
}) {
  return (
    <section className={`relative w-full h-[350px] md:h-[450px] overflow-hidden `}>
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 w-full h-full z-0  bg-[#1a237e]">
        {/* The Background Image (Monument/Texture) */}
        <Image
          src="/assets/footerimg.jpg" // Using the requested image
          alt="Background"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        
        {/* Blue/Purple Gradient Overlay to tint the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a72]/95 opacity-80 via-[#1a237e]/80 to-[#4a148c]/60" />
        
        {/* Optional: Diagonal Grid Pattern Overlay (Left side detail in image) */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)' }} 
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between">
        
        {/* Left: Text Content */}
        {/* Mobile: Centered | Desktop: Left Aligned */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg mt-10 md:mt-0">
          <h1 className="text-white font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-widest mb-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
            {title}
          </h1>
          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right: 3D Volleyball Image */}
        {/* Mobile: Smaller & Lower | Desktop: Large & Right */}
        <div className="absolute bottom-4 right-4 md:right-20 md:bottom-10 w-32 h-32 md:w-64 md:h-64 animate-float">
           {/* 
              Note: Replace this src with a transparent PNG of a volleyball. 
              If you don't have one, this URL is a placeholder for a 3D ball.
           */}
           <div className="relative w-full h-full drop-shadow-2xl">
              <Image 
                src="/assets/footerimg.jpg" // Replace with local asset
                alt="Volleyball"
                fill
                className="object-contain"
              />
           </div>
        </div>
      </div>

      {/* 3. FLOATING SOCIAL SIDEBAR (Right Edge) */}
      <div className="hidden md:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#0d1033] py-6 px-3 rounded-l-2xl border-l border-white/10 shadow-xl">
        <a href="#" className="text-white hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
        <a href="#" className="text-white hover:text-blue-500 transition-colors"><FaFacebookF size={20} /></a>
        <a href="#" className="text-white hover:text-green-500 transition-colors"><FaWhatsapp size={20} /></a>
        <a href="#" className="text-white hover:text-gray-400 transition-colors"><FaTimes size={20} /></a>
      </div>

    

    </section>
  );
}