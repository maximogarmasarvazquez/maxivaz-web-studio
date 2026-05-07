"use client";

import { Layout, Globe, ShoppingCart } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Servicios de desarrollo web"
      className="relative py-32 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🧠 SEO H2 */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios de desarrollo web
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones web modernas enfocadas en rendimiento, diseño y
            conversión de clientes para negocios y emprendedores.
          </p>
        </header>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Landing Pages */}
          <article className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-2xl hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <Layout className="w-10 h-10 mb-6 text-purple-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-4">
              Landing Pages que convierten
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Diseñadas estratégicamente para convertir visitantes en clientes
              reales y generar ventas.
            </p>

          </article>

          {/* Webs negocios */}
          <article className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-2xl hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <Globe className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-4">
              Webs profesionales para negocios
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Sitios modernos que transmiten confianza, mejoran tu marca y
              aumentan tu presencia online.
            </p>

          </article>

          {/* E-commerce */}
          <article className="group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-2xl hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

            <ShoppingCart className="w-10 h-10 mb-6 text-green-500 group-hover:scale-110 transition" />

            <h3 className="text-xl font-semibold mb-4">
              Tiendas online optimizadas
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              E-commerce rápidos y optimizados para vender más y mejorar la
              experiencia de compra.
            </p>

          </article>

        </div>
      </div>
    </section>
  );
}