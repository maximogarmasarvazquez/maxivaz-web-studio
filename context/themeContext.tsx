"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 1. Inicializamos el tema leyendo directamente de localStorage si estamos en el cliente.
  // Esto evita tener que actualizar el estado después con un useEffect.
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      return saved ?? "dark";
    }
    return "dark";
  });

  // 2. En lugar de un estado que cause renders en cascada, calculamos 'mounted' en vivo.
  // Si 'window' existe, significa que ya estamos ejecutando código en el navegador del cliente.
  const mounted = typeof window !== "undefined";
  const isDark = theme === "dark";

  // 3. Este efecto SOLO corre cuando el usuario cambia el tema manualmente (hace click)
  // No corre al montarse porque no tiene dependencias vacías, solo reacciona a cambios.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({
      theme,
      isDark,
      setTheme,
      toggleTheme,
      mounted,
    }),
    [theme, isDark, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}