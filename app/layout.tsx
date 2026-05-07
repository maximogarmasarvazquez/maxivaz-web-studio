import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxivaz Web Studio | Desarrollo Web Profesional",
  description:
    "Creamos páginas web modernas, rápidas y optimizadas para convertir visitas en clientes. Desarrollo web en Córdoba, Argentina.",
  keywords: [
    "desarrollo web",
    "landing pages",
    "react developer",
    "next js",
    "diseño web argentina",
    "freelance web developer",
  ],
  authors: [{ name: "Maxivaz Web Studio" }],
  creator: "Maxivaz",
  openGraph: {
    title: "Maxivaz Web Studio",
    description:
      "Desarrollo web moderno, rápido y optimizado para negocios.",
    url: "https://tu-dominio.com",
    siteName: "Maxivaz Web Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxivaz Web Studio",
    description: "Desarrollo web moderno y profesional",
  },
  metadataBase: new URL("https://tu-dominio.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <FloatingNav />
          <main className="w-full overflow-x-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}