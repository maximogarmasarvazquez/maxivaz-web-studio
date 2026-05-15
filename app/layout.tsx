import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import { ThemeProvider } from "@/context/themeContext";
import ThemeToggle from "@/components/theme/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),
  title: {
    default: "Maxivaz Web Studio | Desarrollo Web Profesional",
    template: "%s | Maxivaz Web Studio",
  },
  description:
    "Estudio de diseño y desarrollo web profesional enfocado en potenciar negocios y marcas digitales.",
  robots: {
    index: true,
    follow: true,
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
    "name": "Maxivaz Web Studio",
    "image": "https://maxivaz.com.ar/p.png",
    "@id": "https://maxivaz.com.ar/#website",
    "url": "https://maxivaz.com.ar",
    "priceRange": "$$",
    "telephone": "+5493546431626", // Agregado para SEO local
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calamuchita",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Valle de Calamuchita" },
      { "@type": "AdministrativeArea", "name": "Córdoba" },
      { "@type": "AdministrativeArea", "name": "Argentina" }
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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