import About from "@/components/About";
import Gallery from "@/components/Gallery";
import GalleryText from "@/components/GalleryText";
import Hero from "@/components/Hero";
import InternalHero from "@/components/InternalHero";

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
          <InternalHero />
        </div>
        
      </main>
    </>
  );
}