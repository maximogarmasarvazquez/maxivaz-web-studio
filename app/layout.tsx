import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),

  title: {
    default: "Maxivaz Web Studio | Desarrollo Web en Calamuchita",
    template: "%s | Maxivaz Web Studio",
  },

  description:
    "Desarrollo de páginas web modernas y optimizadas para negocios en Calamuchita, Villa General Belgrano, Santa Rosa y Córdoba. Sitios web rápidos, ecommerce y sistemas personalizados.",

  keywords: [
    "desarrollo web calamuchita",
    "paginas web calamuchita",
    "desarrollo web villa general belgrano",
    "paginas web villa general belgrano",
    "desarrollo web santa rosa de calamuchita",
    "diseño web cordoba",
    "creacion de paginas web argentina",
    "desarrollador web freelance",
    "react developer argentina",
    "next js developer",
    "ecommerce cordoba",
    "tiendas online cordoba",
    "maxivaz web studio",
    "maximo garmasar vazquez",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://maxivaz.com.ar",
  },

  openGraph: {
    title: "Maxivaz Web Studio | Desarrollo Web en Calamuchita",

    description:
      "Creamos páginas web modernas, rápidas y optimizadas para negocios y emprendimientos en Calamuchita y Córdoba.",

    url: "https://maxivaz.com.ar",

    siteName: "Maxivaz Web Studio",

    locale: "es_AR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Maxivaz Web Studio | Desarrollo Web",

    description:
      "Páginas web modernas y optimizadas para negocios en Calamuchita y Córdoba.",
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