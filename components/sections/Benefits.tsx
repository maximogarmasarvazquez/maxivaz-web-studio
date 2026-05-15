"use client";

import { Zap, Smartphone, Palette, TrendingUp } from "lucide-react";
import { useTheme } from "@/context/themeContext";

const items = [
  {
    icon: Zap,
    title: "Velocidad optimizada para SEO",
    desc: "Sitios rápidos que mejoran posicionamiento y reducen rebote significativamente.",
    color: "text-yellow-500",
    blob: "bg-yellow-500/10",
  },
  {
    icon: Smartphone,
    title: "Diseño responsive profesional",
    desc: "Adaptación perfecta a todos los dispositivos, garantizando una experiencia fluida.",
    color: "text-blue-500",
    blob: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "Diseño moderno y atractivo",
    desc: "Interfaces limpias y minimalistas que transmiten confianza y solidez profesional.",
    color: "text-purple-500",
    blob: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en conversión",
    desc: "Estrategias de diseño optimizadas para convertir visitantes en clientes reales.",
    color: "text-emerald-500",
    blob: "bg-emerald-500/10",
  },
];

export default function Benefits() {
  const { isDark } = useTheme();

  return (
    <section
      id="benefits"
      className="
        relative py-28 md:py-32 px-6 overflow-hidden
        transition-colors duration-700
        bg-[#f4f6f8] dark:bg-[#0B0B0B]
        text-black dark:text-white
      "
    >
      {/* GRID BACKGROUND (FIXED CONTRAST) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`
            absolute inset-0 [background-size:80px_80px]

            ${
              isDark
                ? `
                  opacity-[0.04]
                  [background-image:linear-gradient(45deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%,transparent)]
                `
                : `
                  opacity-70
                  [background-image:linear-gradient(to_right,rgba(15,23,42,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.18)_1px,transparent_1px)]
                `
            }
          `}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
            Beneficios de una <br />
            <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
              Web Profesional
            </span>
          </h2>

          <div className="h-1.5 w-28 bg-black/30 dark:bg-blue-500/60 mx-auto rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <article
                key={i}
                className="
                  group relative p-6 sm:p-8 md:p-10 rounded-3xl

                  border border-black/10 dark:border-white/10

                  bg-white/80 dark:bg-white/[0.04]
                  backdrop-blur-md

                  transition-all duration-500 ease-out

                  hover:-translate-y-2 hover:scale-[1.01]
                  hover:bg-white dark:hover:bg-white/[0.08]

                  hover:shadow-xl
                "
              >
                {/* GLOW */}
                <div
                  className={`
                    absolute -right-10 -top-10
                    h-36 w-36 rounded-full blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    ${item.blob}
                  `}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                      mb-5 inline-flex p-3 sm:p-4 rounded-2xl
                      bg-white dark:bg-black/30
                      border border-black/10 dark:border-white/10
                      transition-transform duration-500
                      group-hover:scale-110 group-hover:rotate-3
                    "
                  >
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-xl sm:text-2xl font-bold mb-3 tracking-tight
                      text-black dark:text-white
                      group-hover:text-blue-600 dark:group-hover:text-blue-400
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* INDICATOR */}
                <div
                  className="
                    absolute bottom-5 right-6
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    translate-x-4 group-hover:translate-x-0
                  "
                >
                  <div className="h-1 w-14 rounded-full bg-black/30 dark:bg-white/30" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}