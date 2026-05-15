"use client";

import { Layout, Globe, ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "Diseñadas estratégicamente con un enfoque en UI/UX para maximizar tus conversiones.",
    color: "text-purple-500",
    bg: "bg-purple-500/5",
  },
  {
    icon: Globe,
    title: "Webs Corporativas",
    desc: "Sitios robustos y escalables que transmiten la autoridad que tu negocio necesita.",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Pro",
    desc: "Tiendas online optimizadas con pasarelas de pago y gestión de stock eficiente.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
];

export default function Services() {

  return (
    <section
      id="services"
      className="relative py-32 px-6 transition-colors duration-700 bg-[#d7d7d7] dark:bg-[#100f0f] text-black dark:text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Soluciones <span className="text-blue-600 italic">Digitales</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 max-w-xl mx-auto uppercase text-[10px] tracking-[0.4em] font-bold">
            Servicios de alto rendimiento
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="group p-10 rounded-[2.5rem] bg-white/30 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-md hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mb-8 border border-black/5 dark:border-white/10 group-hover:rotate-6 transition-transform duration-500`}>
                <s.icon className={`w-8 h-8 ${s.color}`} />
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {s.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}