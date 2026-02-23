import React from 'react';
import Image from 'next/image';
import Text from './template/Text';

export default function InternalHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/internal.jpg"
        alt="Internal Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 px-[var(--spacing-margin)] py-12 md:py-16 z-10">
          <div className="grid h-full grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
            <div className="col-span-4 md:col-start-2 md:col-span-6 self-start pt-8 md:pt-12">
              <Text>
                <p className="text-xl md:text-3xl xl:text-xl 2xl:text-4xl font-bold leading-tight text-white drop-shadow-lg tracking-wide">
                  The interior spaces are designed to maximize the interplay of light and shadow, creating a dynamic atmosphere that shifts throughout the day.
                </p>
              </Text>
            </div>
            <div className="col-span-4 md:col-start-5 md:col-span-5 self-end space-y-4 pb-10 md:pb-20">
              <Text>
                <p className="text-sm md:text-base xl:text-base 2xl:text-xl text-white/90 leading-relaxed tracking-wide drop-shadow-md">
                  Permeable facades allow natural ventilation to flow through the social areas, maintaining thermal comfort without heavy reliance on artificial cooling.
                </p>
              </Text>
              <Text>
                <p className="text-sm md:text-base xl:text-base 2xl:text-xl text-white/90 leading-relaxed tracking-wide drop-shadow-md">
                  Each material was selected for its ability to age gracefully, grounding the floating volumes of the exterior in a tactile, human-centric interior experience.
                </p>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}