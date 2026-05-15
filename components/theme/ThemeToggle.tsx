"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/themeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 🔥 evita mismatch SSR/CSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="
          fixed bottom-6 left-6 z-50
          w-12 h-12 rounded-full
          bg-white/20 dark:bg-black/30
          backdrop-blur-md
        "
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 left-6 z-50

        flex items-center justify-center
        w-12 h-12 rounded-full

        backdrop-blur-md
        border border-white/10
        bg-white/20 dark:bg-black/30

        transition-all duration-300
        hover:scale-110
        active:scale-95

        shadow-lg
      "
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}