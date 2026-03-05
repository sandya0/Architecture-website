'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  const titles = [
    "External Facade", "Interior Void", "Light Play",
    "Main Volume", "Material Detail", "Floating Terrace", "Cantilever View"
  ];

  // Unified responsive layout combining mobile and desktop grids
  const layoutConfigs = [
    { classes: "col-span-2 h-[40vw] md:h-auto md:col-start-2 md:col-span-6 md:row-span-3" },
    { classes: "col-span-1 h-[30vw] md:h-auto md:col-start-8 md:col-span-2 md:row-span-3" },
    { classes: "col-span-1 h-[30vw] md:h-auto md:col-start-10 md:col-span-2 md:row-span-3" },
    { classes: "col-span-1 h-[45vw] md:h-auto md:col-start-2 md:col-span-6 md:row-span-5 md:row-start-4" },
    { classes: "col-span-1 h-[45vw] md:h-auto md:col-start-8 md:col-span-2 md:row-span-3 md:row-start-4" },
    { classes: "col-span-1 h-[30vw] md:h-auto md:col-start-10 md:col-span-2 md:row-span-3 md:row-start-4" },
    { classes: "col-span-1 h-[30vw] md:h-auto md:col-start-8 md:col-span-4 md:row-span-2 md:row-start-7" },
  ];

  const images = [
    "/images/Gallery1.jpg",
    "/images/Gallery2.jpg",
    "/images/Gallery3.jpg",
    "/images/Gallery4.jpg",
    "/images/Gallery5.jpg",
    "/images/Gallery6.jpg",
    "/images/Gallery7.jpg",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="w-full bg-[#efefef] py-8 md:py-12 overflow-hidden">
      <div className="w-full px-[var(--spacing-margin)]">

        {/* ── UNIFIED GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-12 md:auto-rows-[15vh] gap-[var(--spacing-gutter)]">
          {layoutConfigs.map((config, index) => (
            <div
              key={index}
              className={`${config.classes} gallery-item relative overflow-hidden group cursor-pointer`}
            >
              <Image
                src={images[index]}
                alt={titles[index]}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 right-3 text-right">
                  <p className="text-xs md:text-sm font-bold uppercase text-white tracking-tight drop-shadow-md">
                    {titles[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;