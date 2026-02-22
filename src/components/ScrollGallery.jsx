'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Text from './template/Text';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// ---------------------------
// SLIDE DEFINITIONS
// ---------------------------
const slides = [
  // --- SLIDE 1: INTERNAL HERO ---
  {
    id: 'internal-hero',
    bgImage: '/images/internal.jpg',
    content: (
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 px-[var(--spacing-margin)] py-12 md:py-16 z-10">
          <div className="grid h-full grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
            <div className="md:col-start-2 md:col-span-6 self-start pt-8 md:pt-12">
              <Text>
                <p className="text-xl md:text-3xl xl:text-2xl 2xl:text-5xl font-bold leading-tight text-white drop-shadow-lg tracking-wide">
                  The interior spaces are designed to maximize the interplay of light and shadow, creating a dynamic atmosphere that shifts throughout the day.
                </p>
              </Text>
            </div>
            <div className="md:col-start-5 md:col-span-5 self-end space-y-6 pb-12 md:pb-20">
              <Text>
                <p className="text-sm md:text-base font-medium 2xl:text-2xl text-white/90 leading-relaxed drop-shadow-md">
                  Permeable facades allow natural ventilation to flow through the social areas, maintaining thermal comfort without heavy reliance on artificial cooling.
                </p>
              </Text>
              <Text>
                <p className="text-sm md:text-base font-medium 2xl:text-2xl text-white/90 leading-relaxed drop-shadow-md">
                  Each material was selected for its ability to age gracefully, grounding the floating volumes of the exterior in a tactile, human-centric interior experience.
                </p>
              </Text>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // --- SLIDE 2: EXTERIOR FRAME ---
  {
    id: 'exterior-slide-1',
    bgImage: '/images/M_W_0107-Edit.jpg', 
    content: (
      <div className="w-full h-full flex items-center px-[var(--spacing-margin)] relative z-10">
        <div className="absolute inset-0 bg-black/5 -z-10" />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
          <div className="hidden md:block md:col-start-3 md:col-span-8 md:row-start-1 bg-white shadow-2xl h-64 xl:h-96 w-full" />
          <div className="col-span-12 md:col-start-5 md:col-span-4 md:row-start-1 relative h-48 xl:h-72 z-10 shadow-sm">
            <Image
              src="/images/M_W_0107-Edit.jpg" 
              alt="Exterior Detail 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    ), 
  },

  // --- SLIDE 3: DUPLICATE ---
  {
    id: 'exterior-slide-2',
    bgImage: '/images/M_W_0264-Edit.jpg',
    content: (
      <div className="w-full h-full flex items-center px-[var(--spacing-margin)] relative z-10">
        <div className="absolute inset-0 bg-black/5 -z-10" />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
          <div className="hidden md:block md:col-start-3 md:col-span-8 md:row-start-1 bg-white shadow-2xl h-64 xl:h-96 w-full" />
          <div className="col-span-12 md:col-start-5 md:col-span-4 md:row-start-1 relative h-48 xl:h-72 z-10 shadow-sm">
            <Image
              src="/images/M_W_0264-Edit.jpg"
              alt="Exterior Detail 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },

  // --- SLIDE 4: DUPLICATE ---
  {
    id: 'exterior-slide-3',
    bgImage: '/images/M_W_0107-Edit.jpg',
    content: (
      <div className="w-full h-full flex items-center px-[var(--spacing-margin)] relative z-10">
        <div className="absolute inset-0 bg-black/5 -z-10" />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
          <div className="hidden md:block md:col-start-3 md:col-span-8 md:row-start-1 bg-white shadow-2xl h-64 xl:h-96 w-full" />
          <div className="col-span-12 md:col-start-5 md:col-span-4 md:row-start-1 relative h-48 xl:h-72 z-10 shadow-sm">
            <Image
              src="/images/M_W_0107-Edit.jpg"
              alt="Exterior Detail 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },
];

export default function ScrollGallery() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.gallery-section');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${sections.length * 100}%`,
          pin: true,
          scrub: 0.5, // Reduced scrub time slightly for tighter control
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (sections.length - 1), 
            duration: { min: 0.2, max: 0.8 }, 
            delay: 0, 
            ease: "power1.inOut"
          }
        },
      });

      sections.forEach((section, i) => {
        if (i === 0) return; 

        const outer = section.querySelector('.outer');
        const inner = section.querySelector('.inner');
        
        gsap.set(outer, { yPercent: 100 }); 
        gsap.set(inner, { yPercent: -100 }); 
        
        tl.to(outer, {
          yPercent: 0, 
          duration: 1, 
          ease: 'none',
          force3D: true // FORCE GPU ACCELERATION
        })
        .to(inner, {
          yPercent: 0, 
          duration: 1, 
          ease: 'none',
          force3D: true // FORCE GPU ACCELERATION
        }, '<');
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#efefef]">
      
      {slides.map((slide, i) => (
        <div
          key={i}
          className="gallery-section absolute inset-0 w-full h-full"
          style={{ zIndex: i }}
        >
          {/* Outer Wrapper: Added 'will-change-transform' to hint browser */}
          <div 
            className="outer w-full h-full overflow-hidden"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }} 
          >
            
            {/* Inner Wrapper: Added 'will-change-transform' to hint browser */}
            <div 
              className="inner w-full h-full overflow-hidden"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            >
              
              {/* Background Layer */}
              <div 
                className="bg-layer relative w-full h-full"
                style={{ backgroundColor: slide.bgColor || '#000' }}
              >
                {slide.bgImage && (
                  <Image
                    src={slide.bgImage}
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                )}
                
                {slide.content && (
                  <div className="relative w-full h-full z-10">
                    {slide.content}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}