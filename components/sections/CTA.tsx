"use client";

export default function CTA() {
  return (
    <section
      className="relative py-32 px-6 text-center bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">

        <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
          IMPULSÁ TU NEGOCIO ONLINE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Tu negocio merece una presencia digital{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            profesional
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Landing pages, webs para negocios y tiendas online diseñadas para
          atraer clientes y generar resultados.
        </p>

        <a
          href="https://wa.me/5493546431626"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
        >
          Solicitar presupuesto
        </a>

      </div>
    </section>
  );
}