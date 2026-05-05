"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* 🔥 Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Trabajos
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔥 Proyecto real */}
          <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">

            {/* Imagen */}
            <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-sm text-gray-500">
              Vista previa del proyecto
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-2">
                Web de Cabañas
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Landing moderna para alquiler turístico en Calamuchita.
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="text-sm font-medium underline underline-offset-4 hover:opacity-70 transition"
              >
                Quiero algo similar
              </a>

            </div>
          </div>

          {/* 🔥 Placeholder con CTA */}
          <div className="group flex flex-col items-center justify-center text-center bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 rounded-2xl p-10 hover:scale-[1.03] transition-all duration-300">

            <h3 className="text-xl font-semibold mb-2">
              Tu proyecto puede estar acá
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Estoy sumando nuevos clientes 🚀
            </p>

            <Link
              href="#contact"
              className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl text-sm hover:scale-105 transition"
            >
              Trabajemos juntos
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}