'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import ExteriorFrame from './ExteriorFrame';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 'exterior-slide-1',
    bgImage: '/images/Slide1.jpg',
    content: <ExteriorFrame src="/images/Slide1.jpg" alt="Exterior Detail 1" />,
  },
  {
    id: 'exterior-slide-2',
    bgImage: '/images/Slide2.jpg',
    content: <ExteriorFrame src="/images/Slide2.jpg" alt="Exterior Detail 2" />,
  },
  {
    id: 'exterior-slide-3',
    bgImage: '/images/Slide3.jpg',
    content: <ExteriorFrame src="/images/Slide3.jpg" alt="Exterior Detail 3" />,
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
          scrub: 0.5,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.8 },
            delay: 0,
            ease: 'power1.inOut',
          },
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
          force3D: true,
        }).to(
          inner,
          {
            yPercent: 0,
            duration: 1,
            ease: 'none',
            force3D: true,
          },
          '<'
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#efefef]"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="gallery-section absolute inset-0 w-full h-full"
          style={{ zIndex: i }}
        >
          <div
            className="outer w-full h-full overflow-hidden"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            <div
              className="inner w-full h-full overflow-hidden"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            >
              <div
                className="bg-layer relative w-full h-full"
                style={{ backgroundColor: '#000' }}
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