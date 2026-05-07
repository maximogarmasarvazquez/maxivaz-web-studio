"use client";

import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="Sobre Maxivaz Web Studio"
      className="relative py-32 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* 🔥 Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🧠 TEXTO */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 tracking-widest">
            SOBRE NOSOTROS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Desarrollo web profesional desde{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Córdoba
            </span>{" "}
            para toda Argentina
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Soy desarrollador web especializado en crear sitios modernos,
            rápidos y optimizados para negocios que quieren crecer online.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            No solo diseño páginas web: desarrollo experiencias digitales
            enfocadas en conversión, rendimiento y posicionamiento en Google.
          </p>
        </div>

        {/* 📍 CARD */}
        <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-10 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

          <MapPin className="w-12 h-12 mb-6 text-blue-500 group-hover:scale-110 transition" />

          <h3 className="text-xl font-semibold mb-2">
            Calamuchita, Córdoba 🇦🇷
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Trabajo remoto para todo el país, desarrollando proyectos web
            personalizados según cada negocio.
          </p>

        </div>

      </div>
    </section>
  );
}