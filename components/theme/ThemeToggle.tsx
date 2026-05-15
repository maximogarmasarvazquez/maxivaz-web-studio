"use client";

import { useTheme } from "@/context/themeContext";
import { Sun, Moon } from "lucide-react";
import dynamic from "next/dynamic";

// Clases visuales idénticas para el esqueleto y el botón real
const buttonStyles = "fixed bottom-5 left-5 z-[50] flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200/80 bg-white/90 text-neutral-800 shadow-lg shadow-neutral-200/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 dark:border-neutral-800/80 dark:bg-[#0B0B0B]/90 dark:text-neutral-200 dark:shadow-black/40";
function ThemeToggleComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className={buttonStyles}
      aria-label="Cambiar tema"
    >
      {theme === "light" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}

export default dynamic(() => Promise.resolve(ThemeToggleComponent), {
  ssr: false,
});