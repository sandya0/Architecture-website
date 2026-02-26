import React from 'react';
import Image from 'next/image';
import Text from './template/Text';

export default function Details() {
  return (
    <section className="w-full px-[var(--spacing-margin)] py-12 md:py-20 bg-white text-black">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12 md:mb-20">
        <div className="col-span-4 md:col-start-2 md:col-span-4 flex flex-col pt-4 md:pt-8">
          <Text>
            <h3 className="text-lg md:text-xl font-bold leading-snug mb-4 md:mb-6">
              Steric Spes House explores how architecture can mediate between exposure and retreat within a dense urban setting. Rather than creating separation through solid boundaries, the design introduces layers that filter light, air, and views, allowing the house to remain connected to its surroundings while preserving privacy.
            </h3>
          </Text>
          <Text>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              The project responds directly to its west-facing orientation through passive strategies that reduce heat gain while maintaining openness. Spatial sequencing, permeable surfaces, and controlled transparency work together to create a calm living environment shaped by natural rhythms throughout the day.
            </p>
          </Text>
        </div>
        
        <div className="col-span-4 md:col-start-7 md:col-span-5 flex flex-col mt-8 md:mt-0">
          <div className="relative w-full aspect-video bg-[#d9d9d9] mb-4 overflow-hidden">
            <Image
              src="/images/Details1.jpg"
              alt="Steric Spes House Detail 1"
              fill
              className="object-cover"
            />
          </div>
          {/* <Text>
            <span className="block text-sm md:text-base font-semibold mb-1">Lorem Ipsum dolor</span>
          </Text>
          <Text>
            <span className="block text-xs md:text-sm text-gray-500">Lorem ipsum dolor</span>
          </Text> */}
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12 md:mb-20">
        <div className="col-span-4 md:col-start-5 md:col-span-4">
          <div className="relative w-full aspect-square bg-[#d9d9d9] overflow-hidden">
            <Image
              src="/images/M_W_9737-Edit (1).jpg"
              alt="Steric Spes House Detail 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="col-span-4 md:col-start-9 md:col-span-3 flex flex-col pt-4 md:pt-8 mt-8 md:mt-0">
          <Text>
            <h3 className="text-lg md:text-xl font-bold leading-snug mb-4 md:mb-6">
              The spatial organization of Steric Spes prioritizes movement and gradual transitions between public and private zones. Rather than relying on rigid partitions, the house uses shifts in elevation, materiality, and openness to define each area.
            </h3>
          </Text>
          <Text>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Large openings frame views toward terraces and courtyards, allowing nature to remain visually present throughout the interior. This layered openness creates a balance between intimacy and expansiveness, reinforcing the house as both shelter and retreat.
            </p>
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
        <div className="col-span-4 md:col-start-5 md:col-span-7 flex flex-col">
          {[
            { label: 'Category', value: 'Houses' },
            { label: 'Architect', value: 'Gerard Tambunan' },
            { label: 'City', value: 'West Jakarta' },
            { label: 'Levels', value: 'Four Storeys' },
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex justify-between items-center py-3 md:py-4 border-b border-[#d9d9d9] first:border-t first:border-[#d9d9d9]"
            >
              <Text>
                <span className="font-semibold text-sm md:text-base">{item.label}</span>
              </Text>
              <Text>
                <span className="text-sm md:text-base text-gray-600">{item.value}</span>
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}