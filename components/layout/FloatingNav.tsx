"use client";

import { useEffect, useRef, useState } from "react";
import NavItem from "@/components/ui/NavItem";
import {
  Home,
  Layers,
  Star,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";

const sections = ["hero", "services", "benefits", "portfolio", "contact"] as const;

type SectionId = (typeof sections)[number];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  // 🔥 SCROLL SPY OPTIMIZADO
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const scrollMiddle = window.scrollY + windowHeight / 2;

        if (
          window.scrollY + windowHeight >=
          document.body.scrollHeight - 50
        ) {
          setActive("contact");
          ticking = false;
          return;
        }

        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;

          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollMiddle >= top && scrollMiddle <= bottom) {
            setActive((prev) => (prev === id ? prev : id));
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 INDICADOR MÁS ESTABLE
  useEffect(() => {
    const container = containerRef.current;
    const activeEl = document.querySelector(
      `[data-nav="${active}"]`
    ) as HTMLElement | null;
    const indicator = indicatorRef.current;

    if (!container || !activeEl || !indicator) return;

    const offset = activeEl.offsetTop;

    indicator.style.transform = `translate3d(0, ${offset}px, 0)`;
    indicator.style.height = `${activeEl.offsetHeight}px`;
  }, [active]);

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">

          {/* BACKGROUND */}
          <div className="absolute inset-0 rounded-3xl bg-white/20 dark:bg-black/20 backdrop-blur-3xl scale-110 opacity-60" />

          {/* CONTAINER */}
          <div
            ref={containerRef}
            className="
              relative z-20
              flex flex-col gap-6 px-4 py-6 rounded-3xl
              backdrop-blur-3xl
              bg-white/50 dark:bg-black/30
              border border-white/20 dark:border-white/10
              shadow-2xl
              overflow-hidden
              w-[170px]
            "
          >
            {/* INDICADOR */}
            <div
              ref={indicatorRef}
              className="
                absolute left-2 right-2 rounded-2xl
                bg-black/10 dark:bg-white/10
                blur-md
                pointer-events-none z-10 top-0
                transition-transform duration-300 ease-out
                will-change-transform
              "
            />

            <div className="relative z-20" data-nav="hero">
              <NavItem href="#hero" icon={<Home className="w-5 h-5" />} label="Inicio" isActive={active === "hero"} />
            </div>

            <div className="relative z-20" data-nav="services">
              <NavItem href="#services" icon={<Layers className="w-5 h-5" />} label="Servicios" isActive={active === "services"} />
            </div>

            <div className="relative z-20" data-nav="benefits">
              <NavItem href="#benefits" icon={<Star className="w-5 h-5" />} label="Beneficios" isActive={active === "benefits"} />
            </div>

            <div className="relative z-20" data-nav="portfolio">
              <NavItem href="#portfolio" icon={<Briefcase className="w-5 h-5" />} label="Trabajos" isActive={active === "portfolio"} />
            </div>

            <div className="relative z-20" data-nav="contact">
              <NavItem href="#contact" icon={<Mail className="w-5 h-5" />} label="Contacto" isActive={active === "contact"} />
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-white text-black dark:bg-black dark:text-white"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center px-4 backdrop-blur-2xl bg-white/40 dark:bg-black/60">
          <div className="w-full max-w-xs flex flex-col items-center gap-6 px-6 py-8 rounded-3xl backdrop-blur-2xl bg-white/70 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-2xl">

            <NavItem href="#hero" icon={<Home className="w-6 h-6" />} label="Inicio" vertical isActive={active === "hero"} onClick={() => setOpen(false)} />
            <NavItem href="#services" icon={<Layers className="w-6 h-6" />} label="Servicios" vertical isActive={active === "services"} onClick={() => setOpen(false)} />
            <NavItem href="#benefits" icon={<Star className="w-6 h-6" />} label="Beneficios" vertical isActive={active === "benefits"} onClick={() => setOpen(false)} />
            <NavItem href="#portfolio" icon={<Briefcase className="w-6 h-6" />} label="Trabajos" vertical isActive={active === "portfolio"} onClick={() => setOpen(false)} />
            <NavItem href="#contact" icon={<Mail className="w-6 h-6" />} label="Contacto" vertical isActive={active === "contact"} onClick={() => setOpen(false)} />

          </div>
        </div>
      )}
    </>
  );
}