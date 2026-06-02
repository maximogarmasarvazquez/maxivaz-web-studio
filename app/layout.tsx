import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import { ThemeProvider } from "@/context/themeContext";
import ThemeToggle from "@/components/theme/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxivaz.com.ar"),

title: {
  default:
    "Páginas Web Calamuchita | Crear Página Web Profesional",
  template: "%s | Páginas Web Calamuchita",
},

  description:
    "Creamos páginas web profesionales, rápidas y optimizadas para Google (SEO) en Calamuchita, Córdoba y toda Argentina.",

  keywords: [
    "paginas web calamuchita",
    "paginas web cordoba",
    "desarrollo web calamuchita",
    "diseño web calamuchita",
    "crear pagina web calamuchita",
    "desarrollo web cordoba",
    "diseño web cordoba",
    "seo cordoba",
    "next.js",
    "react",
    "landing pages",
    "desarrollador web freelance",
    "crear pagina web",
    "agencia de diseño web",
    "desarrollo web Argentina",
    "paginas web profesionales",
    "seo para negocios",
    "tiendas online cordoba",
    "desarrollo web villa general belgrano",
    "diseño UI UX",
    "desarrollo web responsive",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Páginas Web Calamuchita | Maxivaz Web Studio",

    description:
      "Creación de páginas web profesionales en Calamuchita y Córdoba. Diseño moderno, rápido y optimizado para SEO.",

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
      "Páginas web profesionales en Calamuchita y Córdoba. Servicio de diseño y desarrollo web.",

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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "ProfessionalService",
      "name": "Maxivaz",
      "image": "https://maxivaz.com.ar/p.png",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
    },
    "name": "Excelente servicio de desarrollo web",
    "author": {
      "@type": "Person",
      "name": "Cliente satisfecho",
    },
    "reviewBody": " professionalism and quality of work exceeded our expectations. Highly recommended for any web project.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma desarrollar un sitio web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 5-7 días, mientras que un sitio web corporativo o e-commerce puede tomar 2-4 semanas.",
        },
      },
      {
        "@type": "Question",
        "name": "¿El sitio web es optimizado para SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros proyectos incluyen optimización SEO básica: metadata, estructura semántica, velocidad optimizada, imágenes comprimidas y compatibilidad con dispositivos móviles.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Puedo editar el contenido del sitio después de entregado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Entregamos un CMS intuitivo o panel de administración para que puedas modificar textos, imágenes y secciones sin conocimientos técnicos.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen mantenimiento posterior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones, soporte técnico y mejoras continuas.",
        },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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