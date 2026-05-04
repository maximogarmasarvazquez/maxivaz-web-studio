"use client";

import NavItem from "@/components/ui/NavItem";
import { Home, Layers, Star, Briefcase, Mail } from "lucide-react";

export default function FloatingNav() {
  return (
    <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-10 flex flex-col gap-8 text-white shadow-2xl">
      
        <NavItem href="#hero" icon={<Home />} label="Inicio" />
        <NavItem href="#services" icon={<Layers />} label="Servicios" />
        <NavItem href="#benefits" icon={<Star />} label="Beneficios" />
        <NavItem href="#portfolio" icon={<Briefcase />} label="Trabajos" />
        <NavItem href="#contact" icon={<Mail />} label="Contacto" />

      </div>
    </nav>
  );
}
