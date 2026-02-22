import React from 'react';
import Text from './template/Text';

const About = () => {
  return (
    <section className="w-full min-h-[100svh] h-auto flex items-center bg-[#efefef] py-20 md:py-32 2xl:py-48">
      <div className="w-full px-[var(--spacing-margin)]">
        
        {/* Top Row */}
        {/* Adjusted bottom margin to scale across screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12 md:mb-16 lg:mb-24">
          {/* Expanded span slightly on tablets (md) for better wrapping */}
          <div className="md:col-start-2 md:col-span-10 lg:col-span-8 xl:col-span-7">
            <Text>
              {/* Smoothed out typography scaling using sm, md, lg, 2xl */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl tracking-wide font-sans text-black leading-tight">
                A layered retreat of light, air, and silence.
              </h2>
            </Text>
          </div>
        </div>

        {/* Bottom Row */}
        {/* Added gap-y-12 to space out the stacked columns on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-[var(--spacing-gutter)]">
          
          {/* Column 1: Narrative */}
          {/* Mobile: Full width -> Tablet (md): Spans 5 cols -> Desktop (lg): Spans 4 cols -> Wide (xl): Spans 3 cols */}
          <div className="md:col-start-2 lg:col-start-5 xl:col-start-6 md:col-span-5 lg:col-span-4 xl:col-span-3">
            <Text>
              <p className="text-base md:text-lg xl:text-xl leading-relaxed text-black font-medium">
                Steric Spes is a four-storey urban residence that reinterprets privacy and openness through stacked volumes and a permeable breeze-block facade. Designed for a west-facing site, the house filters harsh sunlight while maintaining natural airflow, layered views, and a calm retreat from its dense surroundings, with spatial sequencing that enhances comfort and a subtle connection between indoor and outdoor living.
              </p>
            </Text>
          </div>

          {/* Column 2: Credits */}
          {/* Mobile: Full width -> Tablet (md): Spans 4 cols -> Desktop (lg): Spans 3 cols */}
          <div className="md:col-start-8 lg:col-start-10 md:col-span-4 lg:col-span-3">
            {/* Increased gap between credit items for better readability */}
            <div className="flex flex-col gap-6 md:gap-8 text-sm md:text-base xl:text-lg leading-snug text-black font-medium">
              
              <div>
                <Text>
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest mb-1">Photographs</span>
                </Text>
                <Text>
                  <span>Mario Wibowo</span>
                </Text>
              </div>

              <div>
                <Text>
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest mb-1">Team</span>
                </Text>
                <Text>
                  <div>
                    Principal Architect: Gerard Tambunan<br />
                    Designer In Charge: Priyo Warsito<br />
                    Project Designer: Abigael Mardianto<br />
                    Design Team: Dian Xu
                  </div>
                </Text>
              </div>

              <div>
                <Text>
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest mb-1">Consultants</span>
                </Text>
                <Text>
                  <div>
                    Engineering & Consulting Lighting: Nurco Lighting<br />
                    Interior Design: Interior by Wilson (IBW)
                  </div>
                </Text>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;