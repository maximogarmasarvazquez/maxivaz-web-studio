import { Zap, Smartphone, Palette, TrendingUp } from "lucide-react";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-32 px-6 border-t border-white/5 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/30 transition hover:scale-[1.02]">
            <Zap className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Velocidad optimizada</h3>
            <p className="text-gray-400">
              Sitios rápidos que mejoran la experiencia del usuario.
            </p>
          </div>

          <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/30 transition hover:scale-[1.02]">
            <Smartphone className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Diseño responsive</h3>
            <p className="text-gray-400">
              Perfecto en celulares y computadoras.
            </p>
          </div>

          <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/30 transition hover:scale-[1.02]">
            <Palette className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Diseño moderno</h3>
            <p className="text-gray-400">
              Interfaces atractivas y profesionales.
            </p>
          </div>

          <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/30 transition hover:scale-[1.02]">
            <TrendingUp className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Enfoque en conversión</h3>
            <p className="text-gray-400">
              Pensadas para generar clientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
