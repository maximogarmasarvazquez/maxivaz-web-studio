"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🔥 inicialización segura SSR + client
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  // 🔥 aplicar tema
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {children}

      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 
        bg-white text-black 
        dark:bg-black dark:text-white 
        border border-black/10 dark:border-white/10 
        px-4 py-2 rounded-xl text-sm backdrop-blur-md"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </>
  );
}