import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),

  title: {
    default: "Maxivaz Web Studio",
    template: "%s | Maxivaz Web Studio",
  },

  description:
    "Desarrollo web profesional en Calamuchita y Córdoba. Creamos páginas web modernas, rápidas y optimizadas para negocios y emprendimientos.",

  keywords: [
    "desarrollo web calamuchita",
    "paginas web cordoba",
    "desarrollo web argentina",
    "react developer",
    "next js developer",
    "maxivaz web studio",
  ],

  authors: [
    {
      name: "Maximo Garmasar Vazquez",
      url: "https://maxivaz.com.ar",
    },
  ],

  creator: "Maximo Garmasar Vazquez",

  publisher: "Maxivaz Web Studio",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://maxivaz.com.ar",
  },

  openGraph: {
    title: "Maxivaz Web Studio",

    description:
      "Páginas web modernas y optimizadas para negocios en Calamuchita y Córdoba.",

    url: "https://maxivaz.com.ar",

    siteName: "Maxivaz Web Studio",

    locale: "es_AR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Maxivaz Web Studio",

    description:
      "Desarrollo web moderno y profesional en Córdoba y Calamuchita.",
  },
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
          <main className="w-full overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}