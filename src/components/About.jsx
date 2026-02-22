import React from 'react';
import Text from './template/Text';

const About = () => {
  return (
    <section className="w-full min-h-[100svh] max-h-none lg:max-h-[100svh] flex flex-col justify-center bg-[#efefef] py-24 md:py-32 2xl:py-48">
      <div className="w-full px-[var(--spacing-margin)]">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12">
          {/* Strictly starts at 2nd column and spans 7 on md screens and larger */}
          <div className="md:col-start-2 md:col-span-7">
            <Text>
              <h2 className="text-4xl md:text-5xl 2xl:text-8xl tracking-wide font-sans text-black">
                A layered retreat of light, air, and silence.
              </h2>
            </Text>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[var(--spacing-gutter)]">
          
          {/* Column 1: Narrative */}
          {/* Tablet: starts col 2 | Desktop: uses your original col-start-6 */}
          <div className="md:col-start-2 lg:col-start-6 md:col-span-5 lg:col-span-3">
            <Text>
              <p className="text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed text-black font-medium">
                Steric Spes is a four-storey urban residence that reinterprets privacy and openness through stacked volumes and a permeable breeze-block facade. Designed for a west-facing site, the house filters harsh sunlight while maintaining natural airflow, layered views, and a calm retreat from its dense surroundings, with spatial sequencing that enhances comfort and a subtle connection between indoor and outdoor living.
              </p>
            </Text>
          </div>

          {/* Column 2: Credits */}
          {/* Tablet: starts col 7 | Desktop: uses your original col-start-9 */}
          <div className="md:col-start-7 lg:col-start-9 md:col-span-5 lg:col-span-3">
            <div className="flex flex-col gap-4 text-sm md:text-base xl:text-lg 2xl:text-xl leading-snug text-black font-medium">
              
              <div>
                <Text>
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest">Photographs</span>
                </Text>
                <Text>
                  <span>Mario Wibowo</span>
                </Text>
              </div>

              <div>
                <Text>
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest">Team</span>
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
                  <span className="block opacity-50 text-[12px] uppercase tracking-widest">Consultants</span>
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