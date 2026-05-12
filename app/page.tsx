import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title:
    "Desarrollo Web en Calamuchita y Córdoba",

  description:
    "Diseño y desarrollo de páginas web modernas, ecommerce y sistemas personalizados para negocios en Villa General Belgrano, Santa Rosa de Calamuchita y Córdoba.",

  keywords: [
    "desarrollo web calamuchita",
    "paginas web villa general belgrano",
    "desarrollo web cordoba",
    "diseño web argentina",
    "ecommerce cordoba",
    "desarrollador web freelance",
    "react developer argentina",
    "next js developer",
  ],

  openGraph: {
    title:
      "Desarrollo Web en Calamuchita y Córdoba | Maxivaz Web Studio",

    description:
      "Páginas web modernas, rápidas y optimizadas para negocios y emprendimientos.",

    url: "https://maxivaz.com.ar",

    siteName: "Maxivaz Web Studio",

    locale: "es_AR",

    type: "website",
  },
};

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