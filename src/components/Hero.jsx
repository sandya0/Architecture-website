import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative max-w-full h-screen overflow-hidden">
      {/* 1. Background Image: Strictly full screen, no margins */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/M_W_0107-Edit.jpg"
          alt="Maison Architecture"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay to help text pop */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. Content Layer: This handles the 24px margin (p-6) */}
      <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between pointer-events-none">
        
        {/* Top Label - Inset by 24px because of parent padding */}
        <div className="flex justify-start">
          <span className="text-sm font-medium uppercase tracking-widest text-white/60">

          </span>
        </div>

        {/* Bottom Title - Inset by 24px because of parent padding */}
        <div className="w-full">
          <h1 className="text-white text-[12vw] md:text-[15vw] font-bold leading-[0.8] tracking-tighter drop-shadow-2xl mb-[-0.1em]">
            Steric Spes
          </h1>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;