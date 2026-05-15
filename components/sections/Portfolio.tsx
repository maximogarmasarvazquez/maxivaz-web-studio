"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/themeContext";

const emptySubscribe = () => () => {};

export default function Portfolio() {
  const { isDark } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const glowClasses = mounted && isDark ? "bg-purple-600/10" : "bg-purple-400/20";
  const gridClasses = mounted && isDark 
    ? "opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)]" 
    : "opacity-60 [background-image:radial-gradient(#7c3aed_1px,transparent_1px)]";

  return (
    <section
      id="portfolio"
      aria-label="Sección de proyectos y portfolio"
      className="relative py-32 px-6 overflow-hidden transition-colors duration-700 bg-[#f4f6f8] dark:bg-[#100f0f] text-black dark:text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-[150px] rounded-full opacity-30 ${glowClasses}`} />
        <div className={`absolute inset-0 [background-size:32px_32px] ${gridClasses}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-4 font-black text-purple-500">Showcase</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Trabajos & <span className="italic font-serif">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Proyectos reales enfocados en performance, diseño moderno y soluciones escalables.
          </p>
        </header>

        <article className="mb-16">
          <a
            href="https://page-portfolio-maxivaz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[55%] relative overflow-hidden h-[300px] lg:h-auto border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/[0.03] flex items-center justify-center">
                <img
                  src="/image/portfolio.png"
                  alt="Portfolio personal"
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 dark:from-black/30 to-transparent pointer-events-none" />
              </div>

              <div className="w-full lg:w-[45%] p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-purple-500 text-white">Featured</span>
                  <span className="text-xs text-zinc-500">2024 Project</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-purple-500 transition-colors">Maxivaz Studio</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg leading-relaxed">
                  Desarrollo de ecosistema digital con UI/UX moderna y animaciones fluidas.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Next.js", "Tailwind", "Framer Motion"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-xl text-xs font-bold border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Explorar proyecto <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </a>
        </article>

        <div className="grid md:grid-cols-2 gap-8">
          <article>
            <a
              href="https://complejo-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-full flex flex-col rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden border-b border-black/5 dark:border-white/10">
                <img src="/image/p7.png" alt="Cabañas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-3">Web de Cabañas</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">Landing page de alto impacto para turismo premium.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest border-b-2 border-purple-500 pb-1">Ver demo</span>
                  <ExternalLink className="w-5 h-5 opacity-40" />
                </div>
              </div>
            </a>
          </article>

          <aside className="relative group rounded-[2rem] border-2 border-dashed border-purple-500/30 dark:border-purple-500/20 p-10 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 hover:border-purple-500">
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Tu marca, aquí</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-[250px]">¿Listo para llevar tu negocio al siguiente nivel?</p>
            <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-purple-500/25">
              Comenzar ahora
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}