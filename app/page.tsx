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
    "Páginas Web en Calamuchita y Córdoba que Consiguen Clientes | Maxivaz Web Studio",

  description:
    "Creamos páginas web profesionales en Calamuchita y Córdoba diseñadas para atraer clientes, vender más y mejorar la presencia online de tu negocio.",

  keywords: [
    "pagina web calamuchita",
    "pagina web villa general belgrano",
    "diseño web cordoba",
    "desarrollo web argentina",
    "web para negocios",
    "pagina web que vende",
    "ecommerce cordoba",
    "react developer argentina",
    "next js developer",
  ],

  openGraph: {
    title:
      "Páginas Web en Calamuchita y Córdoba que Atraen Clientes | Maxivaz",

    description:
      "Diseño y desarrollo de sitios web modernos enfocados en ventas y crecimiento de negocios locales.",

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