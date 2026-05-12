import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),

  title: {
    default:
      "Páginas Web que Consiguen Clientes en Calamuchita y Córdoba | Maxivaz",
    template: "%s | Maxivaz Web Studio",
  },

  description:
    "Desarrollo de páginas web modernas en Calamuchita y Córdoba enfocadas en atraer clientes, mejorar ventas y posicionar negocios online.",

  openGraph: {
    title:
      "Páginas Web en Calamuchita y Córdoba que Generan Clientes | Maxivaz Web Studio",

    description:
      "Sitios web rápidos, modernos y optimizados para negocios y emprendimientos.",

    url: "https://maxivaz.com.ar",

    siteName: "Maxivaz Web Studio",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxivaz Web Studio - Desarrollo web en Calamuchita y Córdoba",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Páginas Web que Consiguen Clientes en Córdoba | Maxivaz Web Studio",
    description:
      "Desarrollo web profesional enfocado en resultados para negocios locales.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors duration-300 scroll-smooth">

        {/* 🔥 JSON-LD SEO LOCAL MEJORADO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Maxivaz Web Studio",
              url: "https://maxivaz.com.ar",
              image: "https://maxivaz.com.ar/og-image.jpg",

              description:
                "Creamos páginas web en Calamuchita y Córdoba enfocadas en atraer clientes y aumentar ventas.",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Calamuchita",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },

              areaServed: [
                "Calamuchita",
                "Villa General Belgrano",
                "Santa Rosa de Calamuchita",
                "Córdoba",
                "Argentina",
              ],

              founder: {
                "@type": "Person",
                name: "Maximo Garmasar Vazquez",
              },

              sameAs: [
                "https://github.com/maximogarmasarvazquez",
                "https://www.linkedin.com/in/maximogarmasarvazquez/",
              ],

              priceRange: "$$",
              serviceType: "Desarrollo Web",
            }),
          }}
        />

        <ThemeProvider>
          <FloatingNav />
          <main className="w-full overflow-x-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}