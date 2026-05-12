"use client";

import { Zap, Smartphone, Palette, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Velocidad optimizada para SEO",
    desc: "Sitios rápidos que mejoran posicionamiento y reducen rebote.",
    color: "text-yellow-500",
  },
  {
    icon: Smartphone,
    title: "Diseño responsive profesional",
    desc: "Adaptación perfecta a todos los dispositivos sin perder calidad.",
    color: "text-blue-500",
  },
  {
    icon: Palette,
    title: "Diseño moderno y atractivo",
    desc: "Interfaces limpias que transmiten confianza y profesionalismo.",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en conversión",
    desc: "Cada sección optimizada para generar clientes reales.",
    color: "text-green-500",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="
        relative py-28 px-6
        border-t border-black/10 dark:border-white/10
        bg-white dark:bg-[#0B0B0B]
        text-black dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Beneficios de una web profesional
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {items.map((item, i) => (
            <article
              key={i}
              className="
                group p-7 rounded-2xl
                bg-black/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
                hover:border-black/20 dark:hover:border-white/20
                transition-all duration-300
              "
            >
              <item.icon className={`w-9 h-9 mb-5 ${item.color}`} />

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}