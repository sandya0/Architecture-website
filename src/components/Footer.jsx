import React from 'react';
import Text from './template/Text';

const Footer = () => {
  return (
    <footer id="contact" className="w-full min-h-[400px] md:min-h-[450px] bg-white pt-12 pb-4 md:pt-16 md:pb-6 border-t border-gray-200 overflow-hidden flex flex-col justify-end">

      <div className="w-full px-[var(--spacing-margin)] flex flex-col justify-end h-full">

        {/* ── INFO ROW ────────────────────────────── */}
        <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)] mt-auto mb-8 md:mb-12">

          {/* LEFT SIDE: PROJECT CREDITS */}
          <div className="col-span-4 md:col-start-2 md:col-span-8">
            <Text>
              <h3 className="text-xs xl:text-base font-bold uppercase tracking-widest text-black mb-4 md:mb-6 border-b border-gray-200 pb-2">
                Project Credits
              </h3>
            </Text>

            {/* Adjusted grid gap and base text size */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 text-sm xl:text-lg">

              {/* Column 1: Architects */}
              <div className="flex flex-col gap-1">
                <Text><span className="font-bold text-black uppercase text-[10px] xl:text-xs tracking-wider">Architects</span></Text>
                <Text><span className="text-gray-500">Gets Architects</span></Text>
                <Text><span className="text-gray-500">Gerard Tambunan (Principal)</span></Text>
              </div>

              {/* Column 2: Design Team */}
              <div className="flex flex-col gap-1">
                <Text><span className="font-bold text-black uppercase text-[10px] xl:text-xs tracking-wider">Design Team</span></Text>
                <Text><span className="text-gray-500">Priyo Warsito</span></Text>
                <Text><span className="text-gray-500">Abigael Mardianto</span></Text>
                <Text><span className="text-gray-500">Dian Xu</span></Text>
              </div>

              {/* Column 3: Collaborators */}
              <div className="flex flex-col gap-1">
                <Text><span className="font-bold text-black uppercase text-[10px] xl:text-xs tracking-wider">Collaborators</span></Text>
                <Text><span className="text-gray-500">Interior by Wilson (IBW)</span></Text>
                <Text><span className="text-gray-500">Nurco Lighting</span></Text>
                <Text><span className="text-gray-500">Mario Wibowo (Photography)</span></Text>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: SOCIALS & CREDITS */}
          <div className="col-span-4 md:col-start-11 md:col-span-2 flex flex-col gap-8 mt-10 md:mt-0">

            {/* Socials */}
            <div>
              <Text>
                <h3 className="text-xs xl:text-base font-bold uppercase tracking-widest text-black mb-4 md:mb-6 border-b border-gray-200 pb-2">
                  Connect
                </h3>
              </Text>
              {/* Increased text size here as well */}
              <div className="flex flex-col gap-2 text-sm xl:text-lg">
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
                      className="text-gray-500 hover:text-black transition-colors block"
                    >
                      {item.name}
                    </a>
                  </Text>
                ))}
              </div>
            </div>

            {/* Made By */}
            <div className="flex flex-col gap-1 text-sm xl:text-lg">
              <Text><span className="font-bold text-black uppercase text-[10px] xl:text-xs tracking-wider block">Website By</span></Text>
              <Text>
                <a
                  href="https://hollostudio.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors block"
                >
                  Hollo Studio
                </a>
              </Text>
            </div>

          </div>

        </div>

        {/* ── BOTTOM ROW: WATERMARK ──────────────────────────────────── */}
        <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="col-span-4 md:col-start-2 md:col-span-11 flex items-end">
            <Text>
              <a
                href="https://hollostudio.site"
                className="block w-full"
                aria-label="Visit Hollo Studio Website"
              >
                <h2 className="text-[14vw] md:text-[11.5vw] leading-none font-bold uppercase text-[#7a7a7a] tracking-normal -ml-[0.5vw] opacity-30 whitespace-nowrap hover:opacity-100 hover:text-black transition-all duration-500">
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