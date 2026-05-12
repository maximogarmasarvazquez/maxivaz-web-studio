"use client";

import { Layout, Globe, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages que convierten",
    desc: "Diseñadas estratégicamente para generar ventas reales.",
    color: "text-purple-500",
  },
  {
    icon: Globe,
    title: "Webs para negocios",
    desc: "Sitios modernos que transmiten confianza y profesionalismo.",
    color: "text-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce optimizados",
    desc: "Tiendas online rápidas enfocadas en conversión.",
    color: "text-green-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative py-28 px-6
        border-t border-black/10 dark:border-white/10
        bg-white dark:bg-[#0B0B0B]
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Servicios de desarrollo web
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <article
              key={i}
              className="
                p-7 rounded-2xl
                bg-black/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
                hover:border-black/20 dark:hover:border-white/20
                transition-all duration-300
              "
            >
              <s.icon className={`w-9 h-9 mb-5 ${s.color}`} />

              <h3 className="text-lg font-semibold mb-3">
                {s.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}