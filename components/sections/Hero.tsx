"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/themeContext";

const LiquidBackground = dynamic(
  () => import("../background/LiquidBackground"),
  { ssr: false }
);

type PaintParticle = {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blur: number;
};

export default function Hero() {
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<PaintParticle[]>([]);

// Reemplaza tus useEffects por esto:

useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setMounted(true);
  }, 0);

  return () => {
    window.clearTimeout(timeoutId);
    setMounted(false);
  };
}, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      const newParticle: PaintParticle = {
        id: Math.random().toString(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        size: Math.random() * 45 + 25,
        opacity: isDark ? 0.25 : 0.45,
        blur: Math.random() * 15 + 10,
      };

      setParticles((prev) => [...prev.slice(-40), newParticle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mounted, isDark]);

  // Importante: El "esqueleto" de carga debe ser oscuro si tu web arranca en dark
  if (!mounted) {
    return <section id="hero" className="min-h-screen w-full bg-[#0B0B0B]" />;
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden transition-colors duration-700 
                 bg-white dark:bg-[#0B0B0B]" 
    >
      {/* El fondo líquido sigue necesitando isDark por ser un Canvas */}
      <LiquidBackground mouse={mouse} particles={particles} isDark={isDark} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        
        {/* Badge: Ahora usa clases dark: de Tailwind */}
        <div className="
          mb-10 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 backdrop-blur-2xl
          border-blue-200/60 bg-white/30 
          dark:border-white/10 dark:bg-white/[0.04]
        ">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-blue-950/70 dark:text-zinc-400">
            Maxivaz Web Studio
          </span>
        </div>

        {/* Title: Clases nativas dark: */}
        <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[96px]">
          <span className="text-[#050816] dark:text-white">
            Desarrollo web
          </span>
          <span className="
            mt-2 block leading-tight pb-2 bg-gradient-to-r bg-clip-text text-transparent
            from-fuchsia-600 via-violet-500 to-blue-600
            dark:from-violet-400 dark:via-fuchsia-500 dark:to-cyan-400
          ">
            & Arte digital
          </span>
        </h1>

        {/* Paragraph */}
        <p className="
          mt-10 max-w-3xl text-base leading-relaxed sm:text-lg md:text-[22px]
          text-slate-700 dark:text-zinc-300
        ">
          Creamos experiencias visuales personalizadas de alto impacto, diseñadas para cautivar a tu audiencia.
        </p>

           {/* BUTTONS */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            className={`
              group relative overflow-hidden
              rounded-2xl
              px-9 py-4
              font-semibold
              transition-all duration-300
              hover:scale-[1.04]
              ${
                isDark
                  ? `
                    bg-white
                    text-black
                  `
                  : `
                    bg-[#050816]
                    text-white
                    shadow-[0_10px_40px_rgba(37,99,235,0.25)]
                  `
              }
            `}
          >
            <span className="relative z-10">
              WhatsApp
            </span>

            <div
              className="
                absolute inset-0
                translate-y-full
                bg-gradient-to-r
                from-blue-600
                via-indigo-500
                to-violet-500
                transition-transform duration-500
                group-hover:translate-y-0
              "
            />
          </a>

          <Link
            href="#portfolio"
            className={`
              rounded-2xl
              px-9 py-4
              font-medium
              transition-all duration-300
              backdrop-blur-xl
              hover:scale-[1.03]
              ${
                isDark
                  ? `
                    border border-white/10
                    hover:bg-white
                    hover:text-black
                  `
                  : `
                    border border-blue-200/60
                    bg-white/35
                    text-slate-900
                    shadow-lg shadow-blue-500/5
                    hover:bg-white/70
                  `
              }
            `}
          >
            Ver trabajos
          </Link>
        </div>
      </div>
    </section>
  );
}