"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🔥 inicialización correcta (sin effect)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    return saved || "light";
  });

  // 🔥 solo sincroniza el DOM (esto SÍ está bien)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {children}

      <button
        onClick={toggleTheme}
        className="
          fixed bottom-6 left-6 z-50 
          bg-white text-black 
          dark:bg-black dark:text-white
          px-4 py-2 rounded-xl shadow-lg
        "
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </>
  );
}