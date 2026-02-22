import React from 'react';
import Text from './template/Text';

const Footer = () => {
  return (
    <footer className="w-full h-auto min-h-[60vh] md:min-h-[400px] md:h-[50vh] bg-white py-12 md:py-16 border-t border-gray-200 overflow-hidden flex flex-col justify-between">
      
      <div className="w-full px-[var(--spacing-margin)] h-full flex flex-col justify-between">
        
        {/* TOP ROW: 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* LEFT CONTENT: Starts from Column 2 on larger screens */}
          <div className="md:col-start-2 md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Text>
                {/* Smoother typography scaling from mobile to desktop */}
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-black leading-[0.9] mb-4 md:mb-6">
                  LET'S TALK
                </h1>
              </Text>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 mt-2 md:mt-4">
                <Text>
                  <p className="text-sm md:text-base text-gray-400 font-medium">
                    Have a project in mind?
                  </p>
                </Text>
                <Text>
                  {/* <a href="mailto:hello@hollowstudio.com" className="text-sm md:text-base text-black font-bold hover:underline">
                    hello@hollowstudio.com
                  </a> */}
                </Text>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: Social Links */}
          {/* Mobile: Bottom-stacked -> Tablet (md): Col 9 -> Desktop (lg): Col 11 */}
          <div className="md:col-start-9 lg:col-start-11 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-3 md:gap-2 mt-12 md:mt-2">
            {['Instagram', 'LinkedIn', 'Behance'].map((item, i) => (
              <Text key={i}>
                <a 
                  href="#" 
                  className="text-base md:text-sm lg:text-base font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {item}
                </a>
              </Text>
            ))}
          </div>

        </div>

        {/* BOTTOM ROW: Watermark aligned to Cols 2-11 */}
        {/* Added top margin on mobile to separate from social links */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] mt-20 md:mt-auto">
          <div className="md:col-start-2 md:col-span-10 flex items-end">
            <Text>
              {/* Increased vw value on mobile (16vw) vs desktop (11.5vw) so it always spans perfectly */}
              <h2 className="text-[16vw] md:text-[11.5vw] leading-none font-bold uppercase text-[#b0b0b0] tracking-normal -ml-[0.5vw] md:-ml-[0.8vw] opacity-30 whitespace-nowrap">
                HOLLOW STUDIO
              </h2>
            </Text>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;