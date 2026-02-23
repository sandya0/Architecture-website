import React from 'react';
import Image from 'next/image';

export default function ExteriorFrame({ src, alt }) {
  return (
    <div className="w-full h-full flex items-center px-[var(--spacing-margin)] relative z-10">
      <div className="absolute inset-0 bg-black/5 -z-10" />
      {/* Mobile: single relative container so image is always centred inside the card */}
      <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
        {/* Card + inset image — stacked via relative/absolute on mobile */}
        <div className="col-span-4 md:col-start-3 md:col-span-8 md:row-start-1 relative bg-white shadow-2xl h-56 sm:h-64 xl:h-96 w-full">
          {/* Mobile: image sits inset inside the card */}
          <div className="absolute inset-4 md:hidden shadow-sm overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Desktop: image overlaps the card via grid row overlap */}
        <div className="hidden md:block md:col-start-5 md:col-span-4 md:row-start-1 relative h-72 xl:h-80 z-10 shadow-sm">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}