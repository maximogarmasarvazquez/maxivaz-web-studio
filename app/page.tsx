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
  // Ponemos las palabras de servicio AL PRINCIPIO del título para ganarle a la competencia local
  title: "Diseño y Desarrollo Web en Córdoba y Calamuchita",
  description:
    "Creamos páginas web profesionales, rápidas y optimizadas para Google (SEO) en Córdoba y el Valle de Calamuchita. Impulsá las ventas de tu negocio con Next.js.",
  openGraph: {
    title: "Diseño y Desarrollo Web en Córdoba y Calamuchita | Maxivaz Web Studio",
    description:
      "Sitios web modernos de alto rendimiento enfocados en atraer clientes y potenciar negocios locales en Córdoba y Calamuchita.",
    url: "https://maxivaz.com.ar",
    siteName: "Maxivaz Web Studio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/p.png",
        width: 1200,
        height: 630,
        alt: "Maxivaz Web Studio - Desarrollo Web Profesional",
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