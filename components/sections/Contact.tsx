"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Contacto Maxivaz Web Studio"
      className="relative py-24 px-6 border-t border-black/10 dark:border-white/10 bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors"
    >
      {/* 🔥 Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 CTA principal */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para crear tu página web profesional?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contactame y empecemos a trabajar en una web que genere clientes reales para tu negocio.
          </p>

          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
          >
            Hablemos por WhatsApp
          </a>

        </div>

        {/* 🔻 FOOTER */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Maxivaz Web Studio
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Desarrollo de sitios web modernos, rápidos y optimizados para SEO que ayudan a crecer negocios en Argentina.
            </p>

            <p className="text-gray-500 text-sm">
              © {year} Maxivaz Web Studio. Todos los derechos reservados.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del sitio">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>

            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="#hero" className="hover:opacity-70 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-70 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:opacity-70 transition">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:opacity-70 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto directo</h4>

            <address className="not-italic space-y-4 text-gray-600 dark:text-gray-400">

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+54 9 3546 431626</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>maxivaz55@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span>Calamuchita, Córdoba, Argentina</span>
              </div>

            </address>

          </div>

        </div>
      </div>
    </footer>
  );
}