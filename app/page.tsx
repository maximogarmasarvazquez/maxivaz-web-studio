import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Portfolio />
      <CTA />
      <Contact />
    </>
  );
}
