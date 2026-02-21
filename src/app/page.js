'use client';

import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GalleryText from "@/components/GalleryText";
import Hero from "@/components/Hero";
import ScrollGallery from "@/components/ScrollGallery";

export default function Home() {
  return (
    <>
      {/* <div className="grid-overlay" /> */}

      <main className="relative">
        <Hero />

        {/* 2. About component MUST have a background and a higher z-index */}
        <div className="relative z-10 bg-white"> 
          <About />
          <Gallery />
          <GalleryText />
          <ScrollGallery />
          <Footer />
        </div>
        
      </main>
    </>
  );
}