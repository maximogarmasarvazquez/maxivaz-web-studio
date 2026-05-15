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
    <div className={`absolute inset-0 -z-10 transition-colors duration-700 ${
      isDark ? "bg-[#030303]" : "bg-[#eef6ff]"
    }`}>
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="75" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: "url(#liquid-filter)" }}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full ${isDark ? "bg-cyan-400/20" : "bg-fuchsia-400/30"}`}
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
            }}
          />
        ))}

        <div
          className={`absolute top-1/2 left-1/2 h-[900px] w-[1100px] blur-[120px] transition-transform duration-1000 ${
            isDark ? "bg-gradient-to-br from-purple-600 to-cyan-400 opacity-30" : "bg-gradient-to-br from-blue-600 to-fuchsia-500 opacity-60"
          }`}
          style={{
            transform: `translate(calc(-50% + ${mouse.x}px), calc(-50% + ${mouse.y}px))`,
          }}
        />
      </div>
    </div>
  );
}