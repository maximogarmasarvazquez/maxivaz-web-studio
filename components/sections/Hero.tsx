"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
    

      {/* 🔥 Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* Glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/20 blur-3xl" />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/40" />

      </div>

      <div className="max-w-4xl text-center">

        {/* Marca */}
        <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
          MAXIVAZ WEB STUDIO
        </p>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Creamos páginas web que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            convierten visitas en clientes
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Diseño moderno, rápido y optimizado para que tu negocio crezca online.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          {/* WhatsApp (external → <a>) */}
          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Hablemos por WhatsApp
          </a>

          {/* Interno → Link */}
          <Link
            href="#portfolio"
            className="border border-black/20 dark:border-white/20 px-6 py-3 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Ver trabajos
          </Link>

        </div>

      </div>
    </section>
  );
}