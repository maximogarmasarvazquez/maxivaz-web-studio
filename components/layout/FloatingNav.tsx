"use client";

import { useEffect, useRef, useState } from "react";
import NavItem from "@/components/ui/NavItem";
import { Home, Layers, Star, Briefcase, Mail, Menu, X } from "lucide-react";

const sections = ["hero", "services", "benefits", "portfolio", "contact"] as const;
type SectionId = (typeof sections)[number];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const scrollMiddle = window.scrollY + windowHeight / 2;

        if (window.scrollY + windowHeight >= document.body.scrollHeight - 50) {
          setActive("contact");
        } else {
          for (const id of sections) {
            const el = document.getElementById(id);
            if (!el) continue;

            if (
              scrollMiddle >= el.offsetTop &&
              scrollMiddle <= el.offsetTop + el.offsetHeight
            ) {
              setActive(id);
            }
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeEl = document.querySelector(
      `[data-nav="${active}"]`
    ) as HTMLElement | null;

    const indicator = indicatorRef.current;
    if (!activeEl || !indicator) return;

    indicator.style.transform = `translate3d(0, ${activeEl.offsetTop}px, 0)`;
    indicator.style.height = `${activeEl.offsetHeight}px`;
  }, [active]);

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 z-50 group">
        <div
          ref={containerRef}
          className="
            relative z-20 flex flex-col gap-4 px-3 py-6 rounded-[2.5rem]
            backdrop-blur-3xl border transition-all duration-500
            bg-white/70 border-white/40 shadow-xl
            dark:bg-black/40 dark:border-white/10
            w-[72px] hover:w-[190px] overflow-hidden
          "
        >
          {/* INDICADOR BLANCO */}
          <div
            ref={indicatorRef}
            className="
              absolute left-2 right-2 rounded-2xl pointer-events-none z-10 top-0
              transition-all duration-500 ease-out
              bg-white/10 dark:bg-white/10
              border-r-2 border-white/60 dark:border-white/40
            "
          />

          {sections.map((id) => (
            <div key={id} className="relative z-20" data-nav={id}>
              <NavItem
                href={`#${id}`}
                icon={
                  id === "hero" ? (
                    <Home />
                  ) : id === "services" ? (
                    <Layers />
                  ) : id === "benefits" ? (
                    <Star />
                  ) : id === "portfolio" ? (
                    <Briefcase />
                  ) : (
                    <Mail />
                  )
                }
                label={id.charAt(0).toUpperCase() + id.slice(1)}
                isActive={active === id}
              />
            </div>
          ))}
        </div>
      </nav>

      {/* 📱 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-[70] p-4 rounded-2xl shadow-2xl bg-white text-black dark:bg-white dark:text-black"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* 📱 MOBILE MENU */}
      <div
        className={`
        md:hidden fixed inset-0 z-[60] transition-all duration-500
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      >
        <div
          className="absolute inset-0 bg-white/80 dark:bg-black/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />

        <div className="absolute bottom-24 right-6 left-6 flex flex-col gap-3">
          {sections.map((id) => (
            <NavItem
              key={id}
              href={`#${id}`}
              icon={
                id === "hero" ? (
                  <Home />
                ) : id === "services" ? (
                  <Layers />
                ) : id === "benefits" ? (
                  <Star />
                ) : id === "portfolio" ? (
                  <Briefcase />
                ) : (
                  <Mail />
                )
              }
              label={id.charAt(0).toUpperCase() + id.slice(1)}
              vertical
              isActive={active === id}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </>
  );
}