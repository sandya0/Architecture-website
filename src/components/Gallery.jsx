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

  // Mobile layout: 2-column grid with varied heights for visual rhythm
  const mobileConfigs = [
    { col: "col-span-2", height: "h-[40vw]" },  // full width, tall
    { col: "col-span-1", height: "h-[30vw]" },  // half width
    { col: "col-span-1", height: "h-[30vw]" },  // half width
    { col: "col-span-1", height: "h-[45vw]" },  // half width, taller
    { col: "col-span-1", height: "h-[45vw]" },  // half width, taller
    { col: "col-span-1", height: "h-[30vw]" },  // half width
    { col: "col-span-1", height: "h-[30vw]" },  // half width
  ];

  // Desktop layout (unchanged)
  const desktopConfigs = [
    { col: "md:col-start-2 md:col-span-6", row: "md:row-span-3", start: "" },
    { col: "md:col-start-8 md:col-span-2", row: "md:row-span-3", start: "" },
    { col: "md:col-start-10 md:col-span-2", row: "md:row-span-3", start: "" },
    { col: "md:col-start-2 md:col-span-6", row: "md:row-span-5", start: "md:row-start-4" },
    { col: "md:col-start-8 md:col-span-2", row: "md:row-span-3", start: "md:row-start-4" },
    { col: "md:col-start-10 md:col-span-2", row: "md:row-span-3", start: "md:row-start-4" },
    { col: "md:col-start-8 md:col-span-4", row: "md:row-span-2", start: "md:row-start-7" },
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
    <section ref={containerRef} className="w-full bg-[#efefef] py-8 md:py-12 overflow-hidden">
      <div className="w-full px-[var(--spacing-margin)]">

        {/* ── MOBILE GRID (hidden on md+) ── */}
        <div className="grid grid-cols-2 gap-[var(--spacing-gutter)] md:hidden">
          {desktopConfigs.map((_, index) => (
            <div
              key={index}
              className={`${mobileConfigs[index].col} ${mobileConfigs[index].height} gallery-item relative overflow-hidden group cursor-pointer`}
            >
              <Image
                src={images[index]}
                alt={titles[index]}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 right-3 text-right">
                  <p className="text-xs font-bold uppercase text-white tracking-tight drop-shadow-md">
                    {titles[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP GRID (hidden below md) ── */}
        <div className="hidden md:grid md:grid-cols-12 md:auto-rows-[15vh] gap-[var(--spacing-gutter)]">
          {desktopConfigs.map((config, index) => (
            <div
              key={index}
              className={`${config.col} ${config.row} ${config.start} gallery-item relative overflow-hidden group cursor-pointer`}
            >
              <Image
                src={images[index]}
                alt={titles[index]}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-sm font-bold uppercase text-white tracking-tight drop-shadow-md">
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