import React from 'react';
import Text from './template/Text';

const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] md:min-h-[50vh] bg-white py-12 md:py-16 lg:py-24 border-t border-gray-200 overflow-hidden flex flex-col justify-between">
      
      <div className="w-full px-[var(--spacing-margin)] h-full flex flex-col justify-between flex-grow">
        
        {/* TOP ROW: Explicitly defined 12-column grid for both base and md */}
        <div className="grid grid-cols-12 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* LEFT CONTENT: Explicitly told to start at col 2 on mobile AND desktop */}
          <div className="col-start-2 col-span-11 md:col-start-2 md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Text>
                <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold uppercase tracking-tighter text-black leading-[0.9] mb-6">
                  LET'S TALK
                </h1>
              </Text>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 mt-4">
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

          {/* RIGHT CONTENT: Starts at col 2 on mobile, moves exactly to col 11 on desktop */}
          <div className="col-start-2 col-span-11 md:col-start-11 md:col-span-2 flex flex-col items-start gap-2 mt-8 md:mt-2">
            {['Instagram', 'LinkedIn', 'Behance'].map((item, i) => (
              <Text key={i}>
                <a 
                  href="#" 
                  className="text-sm md:text-base xl:text-2xl font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {item}
                </a>
              </Text>
            ))}
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="w-full grid grid-cols-12 md:grid-cols-12 gap-[var(--spacing-gutter)] mt-12 md:mt-auto">
          {/* WATERMARK: Explicitly forced to col 2 on all sizes */}  
          <div className="col-start-2 col-span-11 md:col-start-2 md:col-span-10">
            <Text>
              <h2 className="text-[10vw] lg:text-[11.5vw] leading-none font-bold uppercase text-[#7a7a7a] tracking-normal -ml-[0.5vw] opacity-30 whitespace-nowrap">
                HOLLO STUDIO
              </h2>
            </Text>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;