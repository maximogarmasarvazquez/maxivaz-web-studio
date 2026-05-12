"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Sección principal de presentación"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* Glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/20 blur-3xl" />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/40" />
      </div>

      <div className="max-w-5xl text-center">

        {/* Marca */}
        <p className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
          Maxivaz Web Studio
        </p>

        {/* H1 SEO */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Desarrollo Web Profesional en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Calamuchita y Córdoba
          </span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-6">
          Creamos páginas web modernas, tiendas online y sistemas
          personalizados para negocios y emprendimientos.
        </h2>

        {/* Texto SEO */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ayudamos a negocios de Villa General Belgrano, Santa Rosa de
          Calamuchita y Córdoba a tener una presencia online profesional
          mediante sitios web rápidos, optimizados para Google y diseñados
          para convertir visitas en clientes.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Hablemos por WhatsApp
          </a>

          {/* Portfolio */}
          <Link
            href="#portfolio"
            aria-label="Ver trabajos realizados"
            className="border border-black/20 dark:border-white/20 px-6 py-3 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Ver trabajos
          </Link>

        </div>

        {/* Keywords locales ocultas suavemente para contexto semántico */}
        <div className="sr-only">
          desarrollo web en calamuchita, paginas web villa general belgrano,
          diseño web cordoba, ecommerce argentina, desarrollador web freelance,
          desarrollo web santa rosa de calamuchita
        </div>

      </div>
    </section>
  );
}