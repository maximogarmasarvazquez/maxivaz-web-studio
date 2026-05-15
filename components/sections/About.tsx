"use client";

import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";

export default function About() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <section
      id="about"
      aria-label="Sobre Maxivaz Web Studio"
      className="relative py-32 px-6 border-t transition-colors duration-700
      border-black/5 dark:border-white/5
      bg-[#fefcfc] dark:bg-[#100f0f]
      text-black dark:text-white
      overflow-hidden"
    >
      {/* ================= BACKGROUND ESTÉTICO (Sutil) ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid sutil que da estructura */}
        <div className={`absolute inset-0 [background-size:64px_64px] ${
            isDark 
              ? "opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" 
              : "opacity-[0.04] [background-image:linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)]"
          }`} 
        />

        {/* Aurora superior (Sutil) */}
        <div
          className={`absolute right-[-5%] top-[-10%] w-[600px] h-[500px] blur-[140px] rounded-full transition-colors duration-1000
          ${
            isDark
              ? "bg-blue-600/10 opacity-30"
              : "bg-blue-200/40 opacity-60"
          }`}
        />

        {/* Aurora inferior (Sutil) */}
        <div
          className={`absolute left-[-5%] bottom-[-10%] w-[500px] h-[500px] blur-[160px] rounded-full transition-colors duration-1000
          ${
            isDark
              ? "bg-fuchsia-600/5 opacity-20"
              : "bg-slate-100 opacity-50"
          }`}
        />

        {/* Textura de ruido para evitar banding en los gradientes */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🧠 TEXTO */}
        <div className="space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-bold
              text-zinc-500 dark:text-zinc-500"
            >
              Sobre nosotros
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
              Desarrollo web profesional desde{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Córdoba
              </span>{" "}
              para toda Argentina
            </h2>
          </div>

          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            <p>
              Equipo de desarrollo web especializado en crear sitios modernos,
              rápidos y optimizados para negocios que quieren crecer online.
            </p>
            <p>
              No solo diseñamos páginas web: desarrollamos experiencias digitales
              enfocadas en conversión, rendimiento y posicionamiento en Google.
            </p>
          </div>
        </div>

        {/* 📍 CARD (Premium Glassmorphism) */}
        <div
          className="
            group relative overflow-hidden
            rounded-[2.5rem] p-12
            border transition-all duration-500
            backdrop-blur-md

            dark:bg-white/[0.02] 
            bg-black/[0.02]

            dark:border-white/10
            border-black/5

            hover:scale-[1.02]
            hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]
            dark:hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]
          "
        >
          {/* Efecto de luz interna al hacer hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-fuchsia-500/10 blur-[80px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-8 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 shadow-sm">
              <MapPin
                className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Calamuchita, Córdoba 🇦🇷
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              Trabajo remoto para todo el país, desarrollando proyectos web
              personalizados según cada negocio.
            </p>
          </div>
          
          {/* Borde sutil de brillo en la parte superior de la card */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

      </div>
    </section>
  );
}