"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      return saved || "light";
    }
    return "light";
  });

  // 🔥 hidratar SOLO en cliente
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // 🔥 sync cambios
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // 🔥 CLAVE: evitar render mismatch visual
  if (!mounted) return <>{children}</>;

  return (
    <>
      {children}

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
    </>
  );
}