import React from 'react';

const About = () => {
  return (
    <section className="w-full min-h-[100svh] max-h-[100svh] bg-[#efefef] py-24 md:py-32 2xl:py-48">
      <div className="w-full px-[var(--spacing-margin)]">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-12">
          <div className="md:col-start-2 md:col-span-7">
            <h2 className="text-4xl md:text-5xl 2xl:text-8xl tracking-wide font-sans text-black">
              A layered retreat of light, air, and silence.
            </h2>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* Column 1: Narrative */}
          <div className="md:col-start-6 md:col-span-3">
            <p className="text-sm md:text-base xl:text-xl leading-relaxed text-black font-medium">
              Steric Spes is a four-storey urban residence that reinterprets privacy and openness through stacked volumes and a permeable breeze-block facade. Designed for a west-facing site, the house filters harsh sunlight while maintaining natural airflow, layered views, and a calm retreat from its dense surroundings, with spatial sequencing that enhances comfort and a subtle connection between indoor and outdoor living.
            </p>
          </div>

          {/* Column 2: Credits with defined spacing */}
          <div className="md:col-start-9 md:col-span-3">
            <div className="flex flex-col gap-4 text-sm md:text-base xl:text-xl leading-snug text-black font-medium">
              <div>
                <span className="block opacity-50 text-[12px] uppercase tracking-widest">Photographs</span>
                Mario Wibowo
              </div>
              <div>
                <span className="block opacity-50 text-[12px] uppercase tracking-widest">Team</span>
                Principal Architect: Gerard Tambunan<br />
                Designer In Charge: Priyo Warsito<br />
                Project Designer: Abigael Mardianto<br />
                Design Team: Dian Xu
              </div>
              <div>
                <span className="block opacity-50 text-[12px] uppercase tracking-widest">Consultants</span>
                Engineering & Consulting Lighting: Nurco Lighting<br />
                Interior Design: Interior by Wilson (IBW)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;