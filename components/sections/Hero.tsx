"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LiquidBackground from "../background/LiquidBackground";
import { useTheme } from "@/context/themeContext";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

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

  const [isMobile, setIsMobile] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<PaintParticle[]>([]);

  const isPaintingRef = useRef(false);

  // ================= MOBILE CHECK =================
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // ================= MOUSE + EFFECTS =================
  useEffect(() => {
    if (isMobile) return;

    let lastSpawn = 0;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;

      setMouse({ x, y });

      // PAINT TRAIL
      if (!isPaintingRef.current) return;

      const now = performance.now();
      if (now - lastSpawn < 16) return;

      lastSpawn = now;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const centerX = e.clientX - rect.left;
      const centerY = e.clientY - rect.top;

      const newParticles: PaintParticle[] = Array.from({
        length: 5,
      }).map((_, i) => ({
        id: `${now}-${i}-${Math.random()}`,
        x: centerX + (Math.random() - 0.5) * 80,
        y: centerY + (Math.random() - 0.5) * 80,
        size: Math.random() * 40 + 18,
        opacity: Math.random() * 0.35 + 0.08,
        blur: Math.random() * 20 + 8,
      }));

      setParticles((prev) => [
        ...prev.slice(-240),
        ...newParticles,
      ]);

      newParticles.forEach((particle) => {
        setTimeout(() => {
          setParticles((prev) =>
            prev.filter((p) => p.id !== particle.id)
          );
        }, 2200);
      });
    };

    const handleClick = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const id = performance.now();

      setRipples((prev) => [
        ...prev.slice(-5),
        {
          id,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        },
      ]);

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((r) => r.id !== id)
        );
      }, 2200);
    };

    const handleMouseDown = () => {
      isPaintingRef.current = true;
    };

    const handleMouseUp = () => {
      isPaintingRef.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
    };
  }, [isMobile]);

  // ================= RENDER =================
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden transition-colors duration-500"
    >
      <LiquidBackground
        mouse={mouse}
        particles={particles}
        isDark={isDark}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-black dark:text-white">

        {/* BADGE */}
        <div
          className={`mb-10 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 backdrop-blur-2xl shadow-lg ${
            isDark
              ? "border-white/10 bg-white/[0.04]"
              : "border-blue-200/60 bg-white/30 shadow-blue-500/10"
          }`}
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className={`text-[11px] font-medium uppercase tracking-[0.35em] ${
            isDark ? "text-zinc-400" : "text-blue-950/70"
          }`}>
            Maxivaz Web Studio
          </span>
        </div>

        {/* TITLE */}
        <h1 className="max-w-6xl text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[96px]">
          <span className={isDark ? "text-white" : "text-[#050816]"}>
            Desarrollo web
          </span>

          <span
            className={`mt-2 block leading-tight pb-2 bg-gradient-to-r bg-clip-text text-transparent ${
              isDark
                ? "from-violet-400 via-fuchsia-500 to-cyan-400"
                : "from-fuchsia-500 via-violet-400 to-cyan-400"
            }`}
          >
            & Arte digital
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className={`mt-10 max-w-3xl text-base leading-relaxed sm:text-lg md:text-[22px] ${
          isDark ? "text-zinc-300" : "text-slate-700"
        }`}>
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