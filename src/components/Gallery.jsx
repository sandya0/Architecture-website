import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);
  
  // Specific titles for your project
  const titles = [
    "External Facade", "Interior Void", "Light Play", 
    "Main Volume", "Material Detail", "Floating Terrace", "Cantilever View"
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#efefef] pb-12 overflow-hidden">
      <div className="w-full px-[var(--spacing-margin)]">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[12vh] md:auto-rows-[15vh] gap-[var(--spacing-gutter)]">
          
          {[
            { col: "md:col-start-2 md:col-span-6", row: "md:row-span-3", start: "" },
            { col: "md:col-start-8 md:col-span-2", row: "md:row-span-3", start: "" },
            { col: "md:col-start-10 md:col-span-2", row: "md:row-span-3", start: "" },
            { col: "md:col-start-2 md:col-span-6", row: "md:row-span-5", start: "md:row-start-4" },
            { col: "md:col-start-8 md:col-span-2", row: "md:row-span-3", start: "md:row-start-4" },
            { col: "md:col-start-10 md:col-span-2", row: "md:row-span-3", start: "md:row-start-4" },
            { col: "md:col-start-8 md:col-span-4", row: "md:row-span-2", start: "md:row-start-7" }
          ].map((config, index) => (
            <div 
              key={index}
              className={`${config.col} ${config.row} ${config.start} gallery-item relative overflow-hidden group cursor-pointer`}
            >
              <Image 
                src="/images/M_W_0107-Edit.jpg" 
                alt={titles[index]} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              
              {/* HOVER OVERLAY: Now contains ONLY the title */}
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