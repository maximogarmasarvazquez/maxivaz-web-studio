"use client";

import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            overflow-hidden
            bg-[#050505]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              w-[500px] h-[500px]
              rounded-full
              bg-purple-500/20
              blur-3xl
              animate-pulse
            "
          />

          {/* Grid */}
          <div
            className="
              absolute inset-0
              opacity-[0.05]
              bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />

          {/* Content */}
          <div className="relative flex flex-col items-center">

            {/* Logo */}
            <div className="relative mb-6">

              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-blue-500
                  blur-2xl
                  opacity-50
                  animate-pulse
                "
              />

              <div
                className="
                  relative
                  w-24 h-24
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    text-3xl
                    font-black
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-400
                    to-blue-500
                  "
                >
                  M
                </span>
              </div>
            </div>

            {/* Text */}
            <h2 className="text-white text-xl font-bold tracking-wide">
              Maxivaz Web Studio
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Cargando experiencia...
            </p>

            {/* Loader */}
            <div
              className="
                mt-8
                relative
                w-56 h-[4px]
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <div
                className="
                  absolute top-0 left-0
                  h-full w-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-blue-500
                  animate-[pulse_1s_linear_infinite]
                "
              />
            </div>
          </div>
        </div>
      )}

      <main
        className={`
          transition-all duration-700
          ${loading ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"}
        `}
      >
        {children}
      </main>
    </>
  );
}