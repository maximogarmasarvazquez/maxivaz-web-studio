"use client";

import { useState, useEffect, useRef } from "react";
import NavItem from "@/components/ui/NavItem";
import { Home, Layers, Star, Briefcase, Mail, Menu, X } from "lucide-react";

export default function FloatingNav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  
  // Usamos una referencia para bloquear el observer sin provocar re-renders innecesarios
  const isScrollingByClick = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Función para manejar el clic e ir directo a la sección
  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);

    // Activamos el bloqueo del observer
    isScrollingByClick.current = true;

    // Limpiamos timeouts previos si el usuario hace clics rápidos
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Desbloqueamos el observer después de 1 segundo (cuando el scroll ya terminó)
    timeoutRef.current = setTimeout(() => {
      isScrollingByClick.current = false;
    }, 1000); 
  };

  // Limpieza del timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Intersection Observer inteligente
  useEffect(() => {
    const createObserver = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // SI el usuario hizo clic en un botón, ignoramos por completo el scroll intermedio
          if (isScrollingByClick.current) return;

          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px" } // Margen ideal para pantallas medianas/grandes
      );

      observer.observe(element);
      return { observer, element };
    };

    const obsHero = createObserver("hero");
    const obsServices = createObserver("services");
    const obsBenefits = createObserver("benefits");
    const obsPortfolio = createObserver("portfolio");
    const obsContact = createObserver("contact");

    return () => {
      if (obsHero) obsHero.observer.unobserve(obsHero.element);
      if (obsServices) obsServices.observer.unobserve(obsServices.element);
      if (obsBenefits) obsBenefits.observer.unobserve(obsBenefits.element);
      if (obsPortfolio) obsPortfolio.observer.unobserve(obsPortfolio.element);
      if (obsContact) obsContact.observer.unobserve(obsContact.element);
    };
  }, []);

  return (
    <>
      {/* 🖥 DESKTOP NAV */}
      <nav className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <div
          className="
            relative flex flex-col gap-5 px-4 py-6
            rounded-[2.5rem] backdrop-blur-3xl
            bg-white/80 dark:bg-black/50
            border border-white/30 dark:border-white/10
            shadow-xl
            w-[78px] hover:w-[200px]
            transition-all duration-500 overflow-hidden
          "
        >
          <NavItem
            href="#hero"
            icon={<Home />}
            label="Inicio"
            isActive={active === "hero"}
            onClick={() => handleNavClick("hero")}
          />

          <NavItem
            href="#services"
            icon={<Layers />}
            label="Servicios"
            isActive={active === "services"}
            onClick={() => handleNavClick("services")}
          />

          <NavItem
            href="#benefits"
            icon={<Star />}
            label="Beneficios"
            isActive={active === "benefits"}
            onClick={() => handleNavClick("benefits")}
          />

          <NavItem
            href="#portfolio"
            icon={<Briefcase />}
            label="Portafolio"
            isActive={active === "portfolio"}
            onClick={() => handleNavClick("portfolio")}
          />

          <NavItem
            href="#contact"
            icon={<Mail />}
            label="Contacto"
            isActive={active === "contact"}
            onClick={() => handleNavClick("contact")}
          />
        </div>
      </nav>

      {/* 📱 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-[70] p-4 rounded-2xl bg-white text-black dark:bg-black dark:text-white shadow-xl"
        aria-label="Toggle menu"
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
          className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />

        <div className="absolute bottom-24 right-6 left-6 flex flex-col gap-4">
          <NavItem
            href="#hero"
            icon={<Home />}
            label="Inicio"
            vertical
            isActive={active === "hero"}
            onClick={() => handleNavClick("hero")}
          />

          <NavItem
            href="#services"
            icon={<Layers />}
            label="Servicios"
            vertical
            isActive={active === "services"}
            onClick={() => handleNavClick("services")}
          />

          <NavItem
            href="#benefits"
            icon={<Star />}
            label="Beneficios"
            vertical
            isActive={active === "benefits"}
            onClick={() => handleNavClick("benefits")}
          />

          <NavItem
            href="#portfolio"
            icon={<Briefcase />}
            label="Portfolio"
            vertical
            isActive={active === "portfolio"}
            onClick={() => handleNavClick("portfolio")}
          />

          <NavItem
            href="#contact"
            icon={<Mail />}
            label="Contacto"
            vertical
            isActive={active === "contact"}
            onClick={() => handleNavClick("contact")}
          />
        </div>
      </div>
    </>
  );
}