import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-24 px-6 border-t border-white/5 text-white bg-[#0B0B0B]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Maxivaz Web Studio
          </h3>

          <p className="text-gray-400 mb-4">
            Desarrollo de páginas web modernas para negocios que quieren crecer.
          </p>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Maxivaz. Todos los derechos reservados.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegación</h4>

          <ul className="space-y-2 text-gray-400">
            <li><a href="#hero" className="hover:text-white">Inicio</a></li>
            <li><a href="#services" className="hover:text-white">Servicios</a></li>
            <li><a href="#portfolio" className="hover:text-white">Trabajos</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+54 9 3546431626</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>maxivaz55@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Calamuchita, Córdoba</span>
            </div>

          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5493546431626"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Escribirme por WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
}
