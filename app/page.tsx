import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import About from "@/components/sections/About";
import PageTransition from "@/components/pageTransition";

export const metadata: Metadata = {
  title:
    "Desarrollo Web en Calamuchita y Córdoba",

  description:
    "Creamos páginas web profesionales, modernas y optimizadas para Google en Córdoba y el Valle de Calamuchita.",

  openGraph: {
    title:
      "Desarrollo Web en Calamuchita y Córdoba",

    description:
      "Sitios web modernos enfocados en SEO, velocidad y conversión para negocios y marcas.",

    url: "https://maxivaz.com.ar",

    siteName: "Desarrollo Web en Calamuchita y Córdoba | Maxivaz studio",

    locale: "es_AR",

    type: "website",

    images: [
      {
        url: "/p.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo Web en Calamuchita",
      },
    ],
  },

  alternates: {
    canonical: "https://maxivaz.com.ar",
  },
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Portfolio />
      <CTA />
      <Contact />
    </PageTransition>
  );
}