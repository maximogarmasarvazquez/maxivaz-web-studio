"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Sección de proyectos y portfolio"
      className="relative py-32 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🧠 Título SEO */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabajos & Portfolio
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proyectos reales de desarrollo web con React y Next.js enfocados en
            rendimiento, diseño moderno y conversión de clientes.
          </p>
        </header>

        {/* 🔥 PROYECTO DESTACADO (SEO fuerte) */}
        <article className="mb-12">
          <a
            href="https://page-portfolio-maxivaz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir portfolio personal de Maxivaz"
            className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-black/5 dark:to-white/5 p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl"
          >
            {/* Imagen */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
              <img
                src="/image/portfolio.png"
                alt="Portfolio personal desarrollado con Next.js"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2">

              <span className="inline-block mb-4 text-xs uppercase tracking-[0.2em] text-purple-500 font-semibold">
                Proyecto principal
              </span>

              <h3 className="text-3xl font-bold mb-4">
                Maxivaz Portfolio
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Portfolio personal desarrollado con Next.js y TailwindCSS donde
                muestro proyectos reales, habilidades frontend y experiencia en
                desarrollo web moderno.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="px-3 py-1 rounded-full text-sm bg-black/5 dark:bg-white/10">
                  React
                </span>

                <span className="px-3 py-1 rounded-full text-sm bg-black/5 dark:bg-white/10">
                  Next.js
                </span>

                <span className="px-3 py-1 rounded-full text-sm bg-black/5 dark:bg-white/10">
                  TailwindCSS
                </span>

              </div>

              <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition">
                Ver portfolio
              </span>

              <p className="text-sm text-gray-500 mt-4">
                Diseño optimizado, responsive y enfocado en performance
              </p>

            </div>
          </a>
        </article>

        {/* Grid proyectos */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Proyecto */}
          <article>
            <a
              href="https://complejo-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto web de cabañas"
              className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-xl block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/image/p7.png"
                  alt="Sitio web de cabañas turístico"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  Web de Cabañas
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Landing page optimizada para alquiler turístico en Calamuchita,
                  Córdoba.
                </p>

                <div className="flex gap-4 items-center">
                  <span className="text-sm font-medium underline underline-offset-4">
                    Ver demo
                  </span>

                  <span className="text-sm text-gray-500">
                    • Proyecto real para cliente
                  </span>
                </div>

              </div>
            </a>
          </article>

          {/* CTA */}
          <aside className="group flex flex-col items-center justify-center text-center bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 rounded-2xl p-10 hover:scale-[1.03] transition-all duration-300">

            <h3 className="text-xl font-semibold mb-2">
              Tu proyecto puede estar acá
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Estoy disponible para nuevos proyectos freelance 🚀
            </p>

            <Link
              href="#contact"
              aria-label="Ir a sección de contacto"
              className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl text-sm hover:scale-105 transition"
            >
              Trabajemos juntos
            </Link>

          </aside>

        </div>
      </div>
    </section>
  );
}