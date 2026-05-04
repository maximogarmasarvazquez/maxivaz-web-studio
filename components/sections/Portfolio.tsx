export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-[#0B0B0B] text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Trabajos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Web de Cabañas
            </h3>
            <p className="text-gray-400">
              Landing moderna para alquiler turístico.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Próximamente
            </h3>
            <p className="text-gray-400">
              Más proyectos en camino.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
