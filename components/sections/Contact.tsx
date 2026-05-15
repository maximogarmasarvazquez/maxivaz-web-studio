"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 transition-colors duration-700 bg-[#d7d7d7] dark:bg-[#100f0f] text-black dark:text-white border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* CONTACT BOX */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32 bg-white/20 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 backdrop-blur-xl">
          
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter leading-tight">
              ¿Listo para <br className="hidden sm:block" /> empezar?
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mb-6 md:mb-8">
              Hablemos sobre tu proyecto y creemos algo increíble juntos.
            </p>

            <a
              href="https://wa.me/5493546431626"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-center lg:justify-between
                gap-3 bg-black text-white dark:bg-white dark:text-black
                px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold
                uppercase text-[10px] sm:text-xs tracking-[0.2em]
                hover:opacity-90 transition-all w-full sm:w-auto
              "
            >
              Hablemos por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:space-y-6">
            
            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <span className="font-bold text-base sm:text-lg break-all">
                +54 9 3546 431626
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <span className="font-bold text-base sm:text-lg break-all">
                maxivaz55@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </div>
              <span className="font-bold text-base sm:text-lg">
                Córdoba, Argentina
              </span>
            </div>

          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-12 md:pt-16 border-t border-black/5 dark:border-white/5 text-center md:text-left">
          
          {/* BRAND */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg sm:text-xl font-black">
              Maxivaz Web Studio
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Desarrollo de sitios web modernos optimizados para ayudar a crecer negocios en Argentina.
            </p>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2 sm:gap-3 items-center md:items-start">
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-zinc-400">
              Navegación
            </h4>

            {["Inicio", "Servicios", "Trabajos", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* COPYRIGHT */}
          <div className="md:text-right text-center">
            <p className="text-zinc-500 text-sm mb-2">
              © {year} Maxivaz Web Studio.
            </p>
            <p className="text-xs text-zinc-400">
              Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}