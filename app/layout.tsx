import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import { ThemeProvider } from "@/context/themeContext";
import ThemeToggle from "@/components/theme/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),
  title: {
    default: "Páginas Web que Consiguen Clientes | Maxivaz",
    template: "%s | Maxivaz Web Studio",
  },
  description:
    "Desarrollo de páginas web modernas en Calamuchita y Córdoba.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="
          overflow-x-hidden
          bg-white text-black
          dark:bg-[#0B0B0B] dark:text-white
          transition-colors duration-300
          scroll-smooth
        "
      >
        <ThemeProvider>
          <FloatingNav />
          <ThemeToggle />
          <main className="w-full overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}