"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-[#0B0B0B] text-black dark:text-white">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-black leading-none select-none opacity-10 dark:opacity-20">
            404
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Página no encontrada
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#050816] dark:bg-white text-white dark:text-black rounded-2xl font-semibold hover:scale-105 transition-transform"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>

          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}