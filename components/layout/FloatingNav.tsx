"use client";

import { useEffect, useState } from "react";
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

const sections = ["hero", "services", "benefits", "portfolio", "contact"];

type SectionId = (typeof sections)[number];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");

  // 🔥 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (scrollY + windowHeight >= docHeight - 50) {
        setActive("contact");
        return;
      }

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offsetTop = el.offsetTop - windowHeight / 2;
        const offsetHeight = el.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          setActive(id as SectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 INDICADOR (SIN REFS)
  useEffect(() => {
    const activeEl = document.querySelector(
      `[data-nav="${active}"]`
    ) as HTMLElement | null;

    const indicator = document.getElementById("nav-indicator");

    if (activeEl && indicator) {
      indicator.style.top = `${activeEl.offsetTop}px`;
      indicator.style.height = `${activeEl.offsetHeight}px`;
    }
  }, [active]);

  return (
    <>
      {/* 🖥️ DESKTOP NAV */}
      <nav className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">

          {/* glass container */}
          <div
            className="
              relative backdrop-blur-xl border rounded-3xl px-4 py-6 flex flex-col gap-6

              bg-white/80 text-black border-black/10 shadow-xl

              dark:bg-white/10 dark:text-white dark:border-white/10
            "
          >
            {/* 🔥 INDICADOR */}
            <div
              id="nav-indicator"
              className="
                absolute left-2 right-2 rounded-xl transition-all duration-300 ease-out
                bg-black/10 dark:bg-white/10
              "
            />

            {/* ITEMS */}
            <div data-nav="hero">
              <NavItem
                href="#hero"
                icon={<Home className="w-5 h-5" />}
                label="Inicio"
                isActive={active === "hero"}
              />
            </div>

            <div data-nav="services">
              <NavItem
                href="#services"
                icon={<Layers className="w-5 h-5" />}
                label="Servicios"
                isActive={active === "services"}
              />
            </div>

            <div data-nav="benefits">
              <NavItem
                href="#benefits"
                icon={<Star className="w-5 h-5" />}
                label="Beneficios"
                isActive={active === "benefits"}
              />
            </div>

            <div data-nav="portfolio">
              <NavItem
                href="#portfolio"
                icon={<Briefcase className="w-5 h-5" />}
                label="Trabajos"
                isActive={active === "portfolio"}
              />
            </div>

            <div data-nav="contact">
              <NavItem
                href="#contact"
                icon={<Mail className="w-5 h-5" />}
                label="Contacto"
                isActive={active === "contact"}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg

          bg-white text-black
          dark:bg-black dark:text-white
        "
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-white">

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