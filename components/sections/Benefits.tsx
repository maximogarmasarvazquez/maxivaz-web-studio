"use client";

import { Zap, Smartphone, Palette, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";

const items = [
  {
    icon: Zap,
    title: "Velocidad optimizada para SEO",
    desc: "Sitios rápidos que mejoran posicionamiento y reducen rebote significativamente.",
    color: "text-yellow-500",
    blob: "bg-yellow-500/5",
  },
  {
    icon: Smartphone,
    title: "Diseño responsive profesional",
    desc: "Adaptación perfecta a todos los dispositivos, garantizando una experiencia fluida.",
    color: "text-blue-500",
    blob: "bg-blue-500/5",
  },
  {
    icon: Palette,
    title: "Diseño moderno y atractivo",
    desc: "Interfaces limpias y minimalistas que transmiten confianza y solidez profesional.",
    color: "text-purple-500",
    blob: "bg-purple-500/5",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en conversión",
    desc: "Estrategias de diseño optimizadas para convertir visitantes en clientes reales.",
    color: "text-emerald-500",
    blob: "bg-emerald-500/5",
  },
];

export default function Benefits() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <section
      id="benefits"
      className="
        relative py-32 px-6 overflow-hidden
        transition-colors duration-700

        bg-[#d7d7d7] dark:bg-[#100f0f]
        text-black dark:text-white
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* GRID / DIAGONAL PATTERN */}
        <div
          className={`
            absolute inset-0 [background-size:100px_100px]
            ${
              isDark
                ? "opacity-[0.03] [background-image:linear-gradient(45deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%,transparent)]"
                : "opacity-[0.05] [background-image:linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)]"
            }
          `}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
            Beneficios de una <br />
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-800 dark:from-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
              Web Profesional
            </span>
          </h2>

          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <article
                key={i}
                className="
                  group relative p-10 rounded-[2rem]

                  border border-black/5 dark:border-white/5

                  bg-white/40 dark:bg-white/[0.05]
                  backdrop-blur-md

                  transition-all duration-500 ease-out

                  hover:-translate-y-2 hover:scale-[1.01]
                  hover:bg-white/60 dark:hover:bg-white/[0.08]

                  hover:shadow-2xl
                "
              >
                {/* GLOW BLOBS */}
                <div
                  className={`
                    absolute -right-8 -top-8
                    h-32 w-32 rounded-full blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    ${item.blob}
                  `}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                      mb-6 inline-block p-4 rounded-2xl
                      bg-white dark:bg-black/20
                      border border-black/5 dark:border-white/10
                      transition-transform duration-500
                      group-hover:scale-110 group-hover:rotate-3
                    "
                  >
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl font-bold mb-4 tracking-tight
                      transition-colors
                      group-hover:text-blue-600 dark:group-hover:text-blue-400
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* INDICADOR */}
                <div
                  className={`
                    absolute bottom-6 right-8
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    translate-x-4 group-hover:translate-x-0
                  `}
                >
                  <div className={`h-1 w-12 rounded-full ${item.color} opacity-40`} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}