"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <footer
      id="contact"
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
            ¿Listo para tener tu página web?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Escribime y vemos cómo llevar tu negocio al siguiente nivel 🚀
          </p>

          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
          >
            Hablemos por WhatsApp
          </a>
        </div>

        {/* 🔻 Footer contenido */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Maxivaz Web Studio
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Desarrollo de páginas web modernas para negocios que quieren crecer.
            </p>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Maxivaz. Todos los derechos reservados.
            </p>
          </div>

          {/* Navegación */}
          <div>
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
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">

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
                <span>Calamuchita, Córdoba</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}