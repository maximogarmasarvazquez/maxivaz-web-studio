import { Layout, Globe, ShoppingCart } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-white/5 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/30 transition hover:scale-[1.02]">
            <Layout className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
            <p className="text-gray-400">
              Páginas diseñadas para convertir visitantes en clientes.
            </p>
          </div>

          <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/30 transition hover:scale-[1.02]">
            <Globe className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">Webs para negocios</h3>
            <p className="text-gray-400">
              Mostrá tu marca con un diseño profesional.
            </p>
          </div>

          <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/30 transition hover:scale-[1.02]">
            <ShoppingCart className="w-10 h-10 mb-4 text-white group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">Tiendas online</h3>
            <p className="text-gray-400">
              Vendé tus productos con una tienda optimizada.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
