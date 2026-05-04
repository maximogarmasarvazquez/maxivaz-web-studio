import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-sm text-gray-500 mb-4 tracking-widest">
            SOBRE NOSOTROS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Desarrollo web desde Córdoba para todo el país
          </h2>

          <p className="text-gray-400 mb-6">
            Somos un estudio ubicado en Calamuchita, Córdoba. Trabajamos con negocios de toda Argentina creando páginas modernas y efectivas.
          </p>

          <p className="text-gray-400">
            Nos enfocamos en crear soluciones que realmente generen resultados.
          </p>
        </div>

        <div className="group border border-white/10 rounded-2xl p-10 hover:border-white/30 transition hover:scale-[1.02]">

          <MapPin className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition" />

          <h3 className="text-xl font-semibold mb-2">
            Calamuchita, Córdoba
          </h3>

          <p className="text-gray-400">
            Trabajo remoto para todo el país
          </p>

        </div>

      </div>
    </section>
  );
}
