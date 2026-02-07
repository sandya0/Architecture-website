import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="w-full bg-[#efefef] pb-12">
      {/* 24px global margin wrapper */}
      <div className="w-full px-[var(--spacing-margin)]">
        
        {/* THE MASTER GRID: 12 Columns
            auto-rows ensures the row-spans have physical height.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[12vh] md:auto-rows-[15vh] gap-[var(--spacing-gutter)]">
          
          {/* Box 1: Top Left (Col 2-7, Rows 1-3) */}
          <div className="md:col-start-2 md:col-span-6 md:row-span-3 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 1" 
              fill 
              priority
              className="object-cover" 
            />
          </div>

          {/* Box 2: Top Mid (Col 8-9, Rows 1-3) */}
          <div className="md:col-start-8 md:col-span-2 md:row-span-3 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 2" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Box 3: Top Right (Col 10-11, Rows 1-3) -> ENDS AT LINE 12 */}
          <div className="md:col-start-10 md:col-span-2 md:row-span-3 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 3" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Box 4: Bottom Left (Col 2-7, Rows 4-8) */}
          <div className="md:col-start-2 md:col-span-6 md:row-span-5 md:row-start-4 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 4" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Box 5: Mid Mid (Col 8-9, Rows 4-6) */}
          <div className="md:col-start-8 md:col-span-2 md:row-span-3 md:row-start-4 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 5" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Box 6: Mid Right (Col 10-11, Rows 4-6) -> ENDS AT LINE 12 */}
          <div className="md:col-start-10 md:col-span-2 md:row-span-3 md:row-start-4 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 6" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Box 7: Bottom Right (Col 8-11, Rows 7-8) -> ENDS AT LINE 12 */}
          <div className="md:col-start-8 md:col-span-4 md:row-span-2 md:row-start-7 relative overflow-hidden">
            <Image 
              src="/images/M_W_0107-Edit.jpg" 
              alt="Architecture 7" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;