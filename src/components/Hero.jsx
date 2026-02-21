'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    let ctx = gsap.context(() => {
      // Pinning Logic
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top', 
        pin: true,
        pinSpacing: false, // Next content slides OVER
        anticipatePin: 1,
      });

      // Parallax effect
      gsap.fromTo(
        image,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-0 bg-black"
    >
      <div className="absolute inset-0">
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="/images/M_W_0107-Edit.jpg"
            alt="Maison Architecture"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between pointer-events-none">
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
            Architecture
          </span>
        </div>
        <h1 className="text-white text-[12vw] font-bold leading-[0.8]">
          Steric Spes
        </h1>
      </div>
    </section>
  );
};

export default Hero;