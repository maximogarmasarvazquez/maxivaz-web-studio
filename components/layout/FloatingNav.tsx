"use client";

import { useState } from "react";
import NavItem from "@/components/ui/NavItem";
import { Home, Layers, Star, Briefcase, Mail, Menu, X } from "lucide-react";

export default function FloatingNav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

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
            label="Hero"
            isActive={active === "hero"}
            onClick={() => setActive("hero")}
          />

          <NavItem
            href="#services"
            icon={<Layers />}
            label="Services"
            isActive={active === "services"}
            onClick={() => setActive("services")}
          />

          <NavItem
            href="#benefits"
            icon={<Star />}
            label="Benefits"
            isActive={active === "benefits"}
            onClick={() => setActive("benefits")}
          />

          <NavItem
            href="#portfolio"
            icon={<Briefcase />}
            label="Portfolio"
            isActive={active === "portfolio"}
            onClick={() => setActive("portfolio")}
          />

          <NavItem
            href="#contact"
            icon={<Mail />}
            label="Contact"
            isActive={active === "contact"}
            onClick={() => setActive("contact")}
          />
        </div>
      </nav>

      {/* 📱 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-[70] p-4 rounded-2xl bg-white text-black dark:bg-black dark:text-white shadow-xl"
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
            label="Hero"
            vertical
            isActive={active === "hero"}
            onClick={() => {
              setActive("hero");
              setOpen(false);
            }}
          />

          <NavItem
            href="#services"
            icon={<Layers />}
            label="Services"
            vertical
            isActive={active === "services"}
            onClick={() => {
              setActive("services");
              setOpen(false);
            }}
          />

          <NavItem
            href="#benefits"
            icon={<Star />}
            label="Benefits"
            vertical
            isActive={active === "benefits"}
            onClick={() => {
              setActive("benefits");
              setOpen(false);
            }}
          />

          <NavItem
            href="#portfolio"
            icon={<Briefcase />}
            label="Portfolio"
            vertical
            isActive={active === "portfolio"}
            onClick={() => {
              setActive("portfolio");
              setOpen(false);
            }}
          />

          <NavItem
            href="#contact"
            icon={<Mail />}
            label="Contact"
            vertical
            isActive={active === "contact"}
            onClick={() => {
              setActive("contact");
              setOpen(false);
            }}
          />
        </div>
      </div>
    </>
  );
}