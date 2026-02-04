import About from "@/components/About";
import Hero from "@/components/Hero";


export default function Home() {
  
  return (
    <>
      {/* Grid overlay layer */}
      {/* <div className="grid-overlay" /> */}

      <main className="relative">
        <Hero />
        <About />
      </main>
    </>
  );
}
