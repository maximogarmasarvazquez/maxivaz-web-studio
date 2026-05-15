import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import { ThemeProvider } from "@/context/themeContext";
import ThemeToggle from "@/components/theme/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),

  title: {
    default:
      "Desarrollo Web Profesional en Calamuchita y Córdoba",
    template: "%s",
  },

  description:
    "Creamos páginas web profesionales, rápidas y optimizadas para Google (SEO) en Córdoba y el Valle de Calamuchita.",

  keywords: [
    "desarrollo web calamuchita",
    "desarrollo web cordoba",
    "diseño web calamuchita",
    "diseño web cordoba",
    "paginas web cordoba",
    "seo cordoba",
    "next.js",
    "react",
    "landing pages",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Desarrollo Web Profesional en Calamuchita y Córdoba",

    description:
      "Diseño y desarrollo web moderno para negocios, marcas y emprendimientos.",

    url: "https://maxivaz.com.ar",

    siteName: "Maxivaz",

    locale: "es_AR",

    type: "website",

    images: [
      {
        url: "/p.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo Web Profesional en Calamuchita",
      },
    ],
  },

  alternates: {
    canonical: "https://maxivaz.com.ar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    name: "Maxivaz",

    image: "https://maxivaz.com.ar/p.png",

    "@id": "https://maxivaz.com.ar/#website",

    url: "https://maxivaz.com.ar",

    telephone: "+5493546431626",

    priceRange: "$$",

    description:
      "Servicio profesional de diseño y desarrollo web en Córdoba y Calamuchita.",

    serviceType: [
      "Desarrollo Web",
      "Diseño Web",
      "SEO",
      "Landing Pages",
      "Tiendas Online",
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Calamuchita",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Valle de Calamuchita",
      },

      {
        "@type": "AdministrativeArea",
        name: "Córdoba",
      },

      {
        "@type": "AdministrativeArea",
        name: "Argentina",
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (
                  localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <body
        className="
          overflow-x-hidden
          bg-white text-black
          dark:bg-[#0B0B0B] dark:text-white
          transition-colors duration-300
          scroll-smooth
        "
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

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