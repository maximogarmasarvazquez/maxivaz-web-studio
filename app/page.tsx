// app/page.tsx

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
    "Desarrollo Web en Calamuchita | Maximo Garmasar Vazquez",
  description:
    "Desarrollo de páginas web profesionales en Calamuchita, Villa General Belgrano y Córdoba. Diseño web moderno, tiendas online y sistemas personalizados para negocios y emprendimientos.",
  keywords: [
    "desarrollo web calamuchita",
    "paginas web calamuchita",
    "desarrollo web villa general belgrano",
    "diseño web cordoba",
    "desarrollador web freelance argentina",
    "creacion de paginas web",
    "tiendas online cordoba",
    "react developer argentina",
    "next js developer",
    "maximo garmasar vazquez",
  ],
  openGraph: {
    title:
      "Desarrollo Web en Calamuchita | Maximo Garmasar Vazquez",
    description:
      "Páginas web modernas, rápidas y optimizadas para negocios y emprendimientos en Calamuchita y Córdoba.",
    url: "https://maxivaz.com.ar",
    siteName: "Maxivaz",
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