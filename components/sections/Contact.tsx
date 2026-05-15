"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 transition-colors duration-700 
      bg-white dark:bg-[#100f0f] text-black dark:text-white border-t border-black/5 dark:border-white/5 overflow-hidden"
    >
      {/* ================= BACKGROUND ESTÉTICO (Sutil) ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid sutil */}
        <div className={`absolute inset-0 [background-size:64px_64px] ${
            isDark 
              ? "opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" 
              : "opacity-[0.06] [background-image:linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)]"
          }`} 
        />

        {/* Aurora decorativa - Intensificada en modo claro */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[160px] rounded-full transition-colors duration-1000
          ${
            isDark
              ? "bg-blue-600/5 opacity-20"
              : "bg-blue-200/60 opacity-60" /* Suavizado pero más intenso */
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* CONTACT BOX (Glassmorphism con sombras mejoradas) */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32 
          bg-white/80 dark:bg-white/[0.02] /* Fondo más sólido en modo claro para contraste */
          border border-black/5 dark:border-white/10 
          rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 backdrop-blur-2xl
          /* Sombra personalizada muy difusa para separar del fondo blanco */
          shadow-[0_20px_80px_-10px_rgba(0,0,0,0.1)] dark:shadow-none transition-shadow duration-500"
        >
          
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter leading-tight">
              ¿Listo para <br className="hidden sm:block" /> empezar?
            </h2>

            <p className="text-zinc-700 dark:text-zinc-400 text-base sm:text-lg mb-6 md:mb-8 font-medium">
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
                hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-none transition-all w-full sm:w-auto
              "
            >
              Hablemos por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:space-y-6 relative">
            
            {/* Efecto decorativo interno sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group relative z-10">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <span className="font-bold text-base sm:text-lg break-all group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                +54 9 3546 431626
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group relative z-10">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <span className="font-bold text-base sm:text-lg break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                maxivaz55@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group relative z-10">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </div>
              <span className="font-bold text-base sm:text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-medium transition-colors">
              Desarrollo de sitios web modernos optimizados para ayudar a crecer negocios en Argentina.
            </p>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2 sm:gap-3 items-center md:items-start">
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-zinc-400 mb-2">
              Navegación
            </h4>

            {["Inicio", "Servicios", "Trabajos", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* COPYRIGHT */}
          <div className="md:text-right text-center flex flex-col justify-end">
            <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-1 font-medium transition-colors">
              © {year} Maxivaz Web Studio.
            </p>
            <p className="text-[11px] text-zinc-400 uppercase tracking-tighter">
              Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}