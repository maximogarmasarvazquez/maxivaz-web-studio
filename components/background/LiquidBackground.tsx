"use client";

interface Particle {
  id: string | number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blur: number;
}

interface LiquidBackgroundProps {
  mouse: { x: number; y: number };
  particles: Particle[];
  isDark: boolean;
}

export default function LiquidBackground({ mouse, particles, isDark }: LiquidBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden transition-colors duration-700 ${
      isDark ? "bg-[#030303]" : "bg-[#eef6ff]"
    }`}>
      {/* Filtro SVG: Solo existe en el DOM, no consume recursos si no se aplica */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="60" />
          </filter>
        </defs>
      </svg>

      {/* 
        md:[filter:url(#liquid-filter)]: Solo aplica el efecto líquido en PC.
        En móvil, las partículas serán círculos suaves con blur, que es 1000% más ligero.
      */}
      <div className="absolute inset-0 md:[filter:url(#liquid-filter)]">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full pointer-events-none transition-colors duration-700 ${
              isDark ? "bg-cyan-400/20" : "bg-fuchsia-400/30"
            }`}
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              transform: 'translate3d(-50%, -50%, 0)',
              willChange: 'transform, opacity'
            }}
          />
        ))}

        {/* Gradiente principal: En móvil se queda centrado y quieto */}
        <div
          className={`absolute top-1/2 left-1/2 h-[500px] w-[500px] md:h-[900px] md:w-[1100px] blur-[80px] md:blur-[120px] transition-transform duration-500 ease-out pointer-events-none ${
            isDark 
              ? "bg-gradient-to-br from-purple-600 to-cyan-400 opacity-20" 
              : "bg-gradient-to-br from-blue-600 to-fuchsia-500 opacity-40"
          }`}
          style={{
            // El movimiento solo se aplica si mouse.x/y cambian (que solo ocurre en PC)
            transform: `translate3d(calc(-50% + ${mouse.x}px), calc(-50% + ${mouse.y}px), 0)`,
            willChange: 'transform'
          }}
        />
      </div>
    </div>
  );
}