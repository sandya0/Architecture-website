import React from 'react';
import Text from './template/Text';

const GalleryText = () => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-16">
      {/* Maintains your 24px global horizontal margin */}
      <div className="w-full px-[var(--spacing-margin)]">
        
        {/* Heading Row: Reduced margin-bottom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mb-6 md:mb-8">
          <div className="md:col-start-2 md:col-span-10">
            <Text>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-normal text-black font-sans leading-none">
                Stacked Volumes, Floating Lightness
              </h2>
            </Text>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* Main Bold Intro paragraph: Reduced margin-bottom */}
          <div className="md:col-start-2 md:col-span-7 ">
            <Text>
              <p className="text-base md:text-xl font-bold leading-normal text-justify text-black">
                The architectural identity of Steric Spes is defined by three stacked and subtly shifted upper volumes, each leaning toward the right. This configuration allows most of the building mass to remain detached from its neighboring structure, improving airflow and spatial independence.
              </p>
            </Text>
          </div>

          {/* Smaller secondary text blocks */}
          <div className="md:col-start-2 md:col-span-5 space-y-6">
            <Text>
              <p className="text-sm md:text-base text-black/80 leading-relaxed text-justify font-medium">
                Cantilevered overhangs emerge naturally from this composition, forming shaded terraces and canopies below. Throughout the day, light interacts with the permeable facade to create an ever-changing shadowplay across the building.
              </p>
            </Text>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryText;