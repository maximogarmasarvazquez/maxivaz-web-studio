"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "@/context/themeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 IMPORTANTE: evita mismatch SSR/CSR
  if (!mounted) {
    return (
      <button className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-2xl opacity-0">
        ...
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 left-6 z-50
        flex items-center gap-2
        bg-white/80 backdrop-blur-md text-black
        dark:bg-black/80 dark:text-white
        border border-black/10 dark:border-white/10
        px-4 py-2 rounded-2xl shadow-xl
        hover:scale-105 transition-all duration-300
      "
    >
      {theme === "dark" ? (
        <>
          <MoonStar className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium">Dark</span>
        </>
      ) : (
        <>
          <SunMedium className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">Light</span>
        </>
      )}
    </button>
  );
}