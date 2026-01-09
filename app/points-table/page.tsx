'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FooterGrad from "@/components/footergrad"
import Pointstable from "@/components/pointstable"
import Image from "next/image"
import Heroo from "@/components/herosection"

const page = () => {

  const stats = [
  "Super Raids",
  "Raid Points",
  "All Out Points",
  "Super Tackles",
  "Tackle Points",
  "High 5s", // Added a few more generic ones to ensure length
  "Successful Raids"
];
  return (
     <main className="min-h-screen bg-zinc-50 font-sans">
     <Navbar />
       <Heroo title="POINTS TABLE" subtitle="The league that fuels ambition, celebrates skill, and brings volleyball to life." />
       <div className="relative w-full h-16 md:h-20 bg-[#f3f4f6] overflow-hidden border-y border-gray-200">
      
      {/* 1. BACKGROUND TEXTURE */}
      {/* Matches the grainy/light look in the image */}
      <div className="absolute inset-0 z-0">
         {/* Gradient to give it depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
        <Image
          src="/assets/footerimg.jpg" // Using your texture asset
          alt="Texture"
          fill
          className="object-cover opacity-5 mix-blend-multiply"
        />
      </div>

      {/* 2. SCROLLING CONTAINER */}
      {/* 'flex' aligns items in a row. 'items-center' keeps them vertically centered */}
      <div className="relative z-10 w-full h-full flex items-center">
        
        {/* The Moving Track */}
        <div className="flex whitespace-nowrap animate-marquee hover:pause">
          
          {/* RENDER LIST TWICE FOR SEAMLESS LOOP */}
          
          {/* Set 1 */}
          <div className="flex items-center">
            {stats.map((item, index) => (
              <StatItem key={`a-${index}`} text={item} />
            ))}
          </div>

          {/* Set 2 (Duplicate) */}
          <div className="flex items-center">
            {stats.map((item, index) => (
              <StatItem key={`b-${index}`} text={item} />
            ))}
          </div>
          
           {/* Set 3 (Safety Duplicate for wide screens) */}
           <div className="flex items-center">
            {stats.map((item, index) => (
              <StatItem key={`c-${index}`} text={item} />
            ))}
          </div>

        </div>
      </div>

      {/* 3. CUSTOM ANIMATION STYLES */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); } /* Move left by one full set width */
        }
      `}</style>
    </div>
      <Pointstable />
      <FooterGrad />
      <Footer />
    </main>
  )
}

export default page
function StatItem({ text }: { text: string }) {
  return (
    <div className="flex items-center px-8 md:px-16">
      <span className="text-[#d66095] font-medium text-lg md:text-2xl tracking-wide">
        {text}
      </span>
    </div>
  );
}
