"use client";

import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
          {/* Glow liviano */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/20 blur-2xl opacity-70 animate-pulse" />

          {/* UI */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                M
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Cargando experiencia...
            </p>
          </div>
        </div>
      )}

      <main className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </main>
    </>
  );
}