"use client";

export default function CTA() {
  return (
    <section
      className="
        relative py-28 px-6 text-center
        bg-white dark:bg-[#0B0B0B]
        overflow-hidden
        transition-colors duration-500
      "
    >
      {/* ================= AURORA BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full blur-[160px] bg-blue-500/10 dark:bg-blue-500/10" />

        <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] bg-violet-500/10 dark:bg-violet-500/10" />

      </div>

      {/* ================= CARD ================= */}
      <div
        className="
          max-w-5xl mx-auto relative z-10

          rounded-[3rem]
          p-12 md:p-20

          border border-black/10 dark:border-white/10

          backdrop-blur-2xl

          bg-white/40 dark:bg-white/[0.04]

          shadow-[0_30px_120px_rgba(59,130,246,0.12)]

          overflow-hidden
        "
      >
        {/* ================= NOISE (FIXED LAYER) ================= */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            opacity-[0.06]
            mix-blend-overlay
            
          "
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10">

          {/* TITLE */}
          <h2
            className="
              text-4xl md:text-6xl font-black
              mb-8
              tracking-[-0.04em]
              leading-tight
            "
          >
            Tu negocio merece una <br />
            web que{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-500 via-violet-500 to-cyan-400
                bg-clip-text text-transparent
              "
            >
              convierta
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-lg md:text-xl
              max-w-2xl mx-auto
              mb-12
              text-zinc-600 dark:text-zinc-300
              leading-relaxed
            "
          >
            Diseño y desarrollo web moderno optimizado para proyectar tu marca al
            siguiente nivel.
          </p>

          {/* BUTTON */}
          <a
            href="https://wa.me/5493546431626"
            target="_blank"
            className="
              inline-block

              px-10 py-5
              rounded-2xl

              font-semibold
              text-sm uppercase tracking-widest

              bg-[#050816] text-white
              dark:bg-white dark:text-black

              transition-all duration-300

              hover:scale-[1.05]
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]

              active:scale-95
            "
          >
            Solicitar presupuesto
          </a>

        </div>
      </div>
    </section>
  );
}