"use client";

import { Zap, Smartphone, Palette, TrendingUp } from "lucide-react";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-32 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* 🔥 Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[400px] h-[300px] bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          ¿Por qué elegirnos?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card */}
          <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <Zap className="w-10 h-10 mb-6 text-yellow-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-3">
              Velocidad optimizada
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Sitios rápidos que mejoran la experiencia del usuario y posicionan mejor en Google.
            </p>

          </div>

          {/* Card */}
          <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <Smartphone className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-3">
              Diseño responsive
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Perfecto en celulares, tablets y computadoras.
            </p>

          </div>

          {/* Card */}
          <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <Palette className="w-10 h-10 mb-6 text-purple-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-3">
              Diseño moderno
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Interfaces atractivas que generan confianza en tus clientes.
            </p>

          </div>

          {/* Card */}
          <div className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <TrendingUp className="w-10 h-10 mb-6 text-green-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-3">
              Enfoque en conversión
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Cada detalle está pensado para transformar visitas en clientes.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}