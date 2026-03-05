import React from 'react';
import Text from './template/Text';

const About = () => {
  return (
    <section id="about" className="w-full min-h-[100svh] max-h-none lg:max-h-[100svh] flex flex-col justify-center bg-[#efefef] py-24 md:py-32 2xl:py-48">
      <div className="w-full px-[var(--spacing-margin)]">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12">
          {/* Strictly starts at 2nd column and spans 7 on md screens and larger */}
          <div className="md:col-start-2 md:col-span-7">
            <Text>
              <h2 className="text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl tracking-wide font-sans text-black">
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
              <p className="text-sm md:text-base xl:text-base 2xl:text-xl leading-relaxed text-black font-medium">
                Steric Spes is a four-storey urban residence that reinterprets privacy and openness through stacked volumes and a permeable breeze-block facade. Designed for a west-facing site, the house filters harsh sunlight while maintaining natural airflow, layered views, and a calm retreat from its dense surroundings, with spatial sequencing that enhances comfort and a subtle connection between indoor and outdoor living.
              </p>
            </Text>
          </div>

          {/* Column 2: Credits */}
          {/* Tablet: starts col 7 | Desktop: uses your original col-start-9 */}
          <div className="md:col-start-7 lg:col-start-9 md:col-span-5 lg:col-span-3">
            <dl className="flex flex-col gap-4 text-sm md:text-base xl:text-base 2xl:text-xl leading-snug text-black font-medium m-0">

              <div className="flex flex-col gap-1">
                <Text>
                  <dt className="block opacity-50 text-[12px] uppercase tracking-widest">Photographs</dt>
                </Text>
                <Text>
                  <dd className="m-0">Mario Wibowo</dd>
                </Text>
              </div>

              <div className="flex flex-col gap-1">
                <Text>
                  <dt className="block opacity-50 text-[12px] uppercase tracking-widest">Team</dt>
                </Text>
                <Text>
                  <dd className="m-0">
                    <ul className="list-none p-0 m-0 space-y-1">
                      <li>Principal Architect: Gerard Tambunan</li>
                      <li>Designer In Charge: Priyo Warsito</li>
                      <li>Project Designer: Abigael Mardianto</li>
                      <li>Design Team: Dian Xu</li>
                    </ul>
                  </dd>
                </Text>
              </div>

              <div className="flex flex-col gap-1">
                <Text>
                  <dt className="block opacity-50 text-[12px] uppercase tracking-widest">Consultants</dt>
                </Text>
                <Text>
                  <dd className="m-0">
                    <ul className="list-none p-0 m-0 space-y-1">
                      <li>Engineering &amp; Consulting Lighting: Nurco Lighting</li>
                      <li>Interior Design: Interior by Wilson (IBW)</li>
                    </ul>
                  </dd>
                </Text>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;