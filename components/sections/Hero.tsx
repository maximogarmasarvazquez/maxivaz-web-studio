"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Sección principal de presentación"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 py-24 md:py-0
        overflow-hidden
        bg-white text-black dark:bg-[#0B0B0B] dark:text-white
        transition-colors
        scroll-mt-28
      "
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="
          absolute top-[-140px] left-1/2 -translate-x-1/2
          w-[420px] md:w-[500px]
          h-[260px] md:h-[300px]
          bg-purple-500/20 blur-3xl
        " />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/40" />
      </div>

      <div className="max-w-5xl text-center">

        {/* 🟣 Brand */}
        <p className="
          text-xs md:text-sm
          tracking-[0.3em] uppercase
          text-gray-500 dark:text-gray-400
          mb-6 md:mb-4
        ">
          Maxivaz Web Studio
        </p>

        {/* 🧠 H1 */}
        <h1 className="
          text-3xl sm:text-4xl md:text-6xl
          font-bold leading-tight
          mb-6 md:mb-6
        ">
          Desarrollo Web Profesional en{" "}
          <span className="
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-500 to-blue-500
          ">
            Calamuchita y Córdoba
          </span>
        </h1>

        {/* 🧠 Subtitulo */}
        <h2 className="
          text-lg sm:text-xl md:text-2xl
          font-medium
          text-gray-700 dark:text-gray-200
          mb-6 md:mb-6
        ">
          Creamos páginas web modernas, tiendas online y sistemas personalizados
        </h2>

        {/* 🧠 Texto SEO */}
        <p className="
          text-base md:text-lg
          text-gray-600 dark:text-gray-300
          mb-10 md:mb-8
          max-w-2xl md:max-w-3xl
          mx-auto
          leading-relaxed
        ">
          Ayudamos a negocios de Villa General Belgrano, Santa Rosa de Calamuchita y Córdoba
          a tener una presencia online profesional optimizada para Google y conversión.
        </p>

        {/* CTA */}
        <div className="
          flex flex-col sm:flex-row
          gap-4
          justify-center
          w-full
        ">

          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-black text-white dark:bg-white dark:text-black
              px-6 py-3 rounded-xl font-medium
              hover:scale-[1.03] active:scale-95
              transition
            "
          >
            Hablemos por WhatsApp
          </a>

          <Link
            href="#portfolio"
            className="
              border border-black/20 dark:border-white/20
              px-6 py-3 rounded-xl
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              transition
            "
          >
            Ver trabajos
          </Link>

        </div>

        {/* SEO hidden */}
        <div className="sr-only">
          desarrollo web en calamuchita, paginas web villa general belgrano,
          diseño web cordoba, ecommerce argentina, desarrollador web freelance
        </div>

      </div>
    </section>
  );
}