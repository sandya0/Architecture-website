import React from 'react';
import Text from './template/Text';

const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] md:min-h-[50vh] bg-white py-12 md:py-16 lg:py-24 border-t border-gray-200 overflow-hidden flex flex-col justify-between">
      
      <div className="w-full px-[var(--spacing-margin)] h-full flex flex-col justify-between flex-grow">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-12 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* LEFT CONTENT */}
          <div className="col-start-1 col-span-11 md:col-start-2 md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Text>
                <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold uppercase tracking-tighter text-black leading-[0.9] mb-6">
                  LET'S TALK
                </h1>
              </Text>

              <div className="flex flex-col gap-1 mt-4">
                <Text>
                  <p className="text-sm md:text-base text-gray-400 font-medium">
                    Have a project in mind?
                  </p>
                </Text>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="col-start-1 col-span-11 md:col-start-11 md:col-span-2 flex flex-col items-start gap-2 mt-8 md:mt-2">
            {[
              { name: 'Instagram', link: 'https://www.instagram.com/hollowebstudio' },
              { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sandya-pradayan-baa04b213/' },
              { name: 'X', link: 'https://x.com/sandyaporto' }
            ].map((item, i) => (
              <Text key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Hollo Studio on ${item.name}`}
                  className="text-sm md:text-base lg:text-lg xl:text-2xl font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              </Text>
            ))}
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="w-full grid grid-cols-12 md:grid-cols-12 gap-[var(--spacing-gutter)] mt-12 md:mt-auto">
          
          {/* CLICKABLE WATERMARK */}
          <div className="col-start-1 col-span-11 md:col-start-2 md:col-span-10">
            <Text>
              <a
                href="https://hollostudio.site"
                className="block"
                aria-label="Visit Hollo Studio Website"
              >
                <h2 className="text-[10vw] lg:text-[11.5vw] leading-none font-bold uppercase text-[#7a7a7a] tracking-normal -ml-[0.5vw] opacity-30 whitespace-nowrap hover:opacity-50 transition-opacity">
                  HOLLO STUDIO
                </h2>
              </a>
            </Text>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;