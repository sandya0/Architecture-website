import React from 'react';
import Image from 'next/image';

const InternalHero = () => {
  return (
    /* Removed pb-24/32 to eliminate the extra space below the image */
    <section className="w-full bg-[#efefef] overflow-hidden">
      
      {/* 1. Full-Screen Container locked to 100% viewport height */}
      <div className="relative w-full h-[100vh] md:h-[100svh]">
        
        {/* THE BACKGROUND IMAGE */}
        <Image 
          src="/images/M_W_0107-Edit.jpg" 
          alt="Full screen interior architectural view" 
          fill 
          priority
          className="object-cover"
        />

        {/* 2. ABSOLUTE GRID OVERLAY 
            Padding here ensures text respects your 24px site margin 
        */}
        <div className="absolute inset-0 px-[var(--spacing-margin)] py-12 md:py-16">
          <div className="grid h-full grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
            
            {/* Top Bold Paragraph: Starts at Column 2, Spans 5 columns */}
            <div className="md:col-start-2 md:col-span-5 self-start pt-8 md:pt-12">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg tracking-tight">
                The interior spaces are designed to maximize the interplay of light and shadow, creating a dynamic atmosphere that shifts throughout the day.
              </p>
            </div>

            {/* Bottom Smaller Paragraphs: Starts at Column 5, Spans 3 columns */}
            <div className="md:col-start-5 md:col-span-3 self-end space-y-6 pb-12 md:pb-20">
              <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed drop-shadow-md">
                Permeable facades allow natural ventilation to flow through the social areas, maintaining thermal comfort without heavy reliance on artificial cooling.
              </p>
              <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed drop-shadow-md">
                Each material was selected for its ability to age gracefully, grounding the floating volumes of the exterior in a tactile, human-centric interior experience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalHero;