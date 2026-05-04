export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0B0B0B] text-white px-6">
      <div className="max-w-4xl text-center">

        {/* Marca */}
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          MAXIVAZ WEB STUDIO
        </p>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Creamos páginas web que convierten visitas en clientes
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-300 mb-8">
          Diseño moderno, rápido y optimizado para que tu negocio crezca online.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Hablemos por WhatsApp
          </a>

          <a
            href="#portfolio"
            className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Ver trabajos
          </a>

        </div>

      </div>
    </section>
  );
}
