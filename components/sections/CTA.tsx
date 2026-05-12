"use client";

export default function CTA() {
  return (
    <section
      className="
        relative py-28 px-6 text-center
        bg-white dark:bg-[#0B0B0B]
      "
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Tu negocio merece una web que convierta
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Diseño y desarrollo web moderno optimizado para crecer tu marca en internet.
        </p>

        <a
          href="https://wa.me/5493546431626"
          className="
            inline-block px-8 py-4 rounded-xl
            bg-black text-white
            dark:bg-white dark:text-black
            font-medium
            hover:opacity-90 transition
          "
        >
          Solicitar presupuesto
        </a>

      </div>
    </section>
  );
}