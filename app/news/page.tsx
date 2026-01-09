import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FooterGrad from "@/components/footergrad"
import Heroo from "@/components/herosection"
  import { FaChevronRight, FaArrowRight } from 'react-icons/fa';
import Image from "next/image"

const page = () => {


const newsItems = [
  { id: 1, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
  { id: 2, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
  { id: 3, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
  { id: 4, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
  { id: 5, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
  { id: 6, title: "DPVL Set for Biggest Season Yet as Teams Gear Up for Action." },
];

  return (
     <main className="min-h-screen bg-zinc-50 font-sans">
     <Navbar />
       <Heroo title="NEWS" subtitle="The league that fuels ambition, celebrates skill, and brings volleyball to life." />
      <section className="relative w-full py-16 px-4 md:px-8 bg-[#3b3bb7] overflow-hidden">
      
      {/* 1. MAIN BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a72] to-[#1a237e]" />
        {/* Subtle texture overlay */}
        <Image
          src="/assets/footerimg.jpg"
          alt="Background Texture"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 2. HEADER SECTION */}
        {/* Mobile: Centered | Desktop: Left Aligned */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-10">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-white italic tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
              Latest News
            </h2>
            {/* The Red/Pink Arrow Icon next to title */}
            <FaChevronRight className="text-[#d66095] text-2xl md:text-4xl mt-1" />
          </div>
          {/* Underline */}
          <div className="w-full md:w-64 h-1 bg-[#d66095] mt-2 shadow-[0_0_10px_#d66095]" />
        </div>

        {/* 3. INNER CONTAINER (The Pink/Purple Glassy Box) */}
        <div className="relative w-full rounded-3xl p-6 md:p-10 overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Inner Background Styling */}
          <div className="absolute inset-0 z-0">
            {/* Pinkish Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d66095]/30 via-[#a259e6]/20 to-[#3b3bb7]/30 backdrop-blur-sm" />
            {/* Texture specifically for the inner box */}
            <Image
              src="/assets/footerimg.jpg"
              alt="Inner Texture"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
             {/* Diagonal Lines Pattern (CSS Pattern) */}
            <div 
              className="absolute inset-0 opacity-10" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} 
            />
          </div>

          {/* 4. NEWS GRID */}
          {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer bg-black"
              >
                {/* Card Image */}
                <Image
                  src="/assets/footerimg.jpg" // Using requested image
                  alt="News Thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
                
                {/* Dark Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 flex flex-col justify-end h-full">
                  <p className="text-white text-sm md:text-base font-medium leading-snug">
                    <span className="font-extrabold text-white text-lg mr-1">DPVL</span> 
                    {item.title.replace('DPVL ', '')}
                  </p>
                  
                  {/* Arrow Icon at bottom right */}
                  <div className="self-end mt-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <FaArrowRight className="text-white text-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
      <FooterGrad />
      <Footer />
    </main>
  )
}

export default page
