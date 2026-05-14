"use client";

type PaintParticle = {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blur: number;
};

interface LiquidBackgroundProps {
  mouse: {
    x: number;
    y: number;
  };

  particles: PaintParticle[];

  isDark: boolean;
}

export default function LiquidBackground({
  mouse,
  particles,
  isDark,
}: LiquidBackgroundProps) {
  return (
    <div
      className={`
        absolute inset-0 -z-10 overflow-hidden
        transition-colors duration-700
        ${
          isDark
            ? "bg-[#030303]"
            : "bg-[#eef6ff]"
        }
      `}
    >
      {/* ================= SVG FILTER ================= */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="24s"
                values="0.015;0.022;0.015"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="75"
            />
          </filter>
        </defs>
      </svg>

      {/* ================= LIGHT MODE AURORA ================= */}
      {!isDark && (
        <>
          {/* TOP BLUE */}
          <div
            className="
              absolute
              left-[-12%]
              top-[-18%]
              h-[850px]
              w-[850px]
              rounded-full
              blur-[150px]
              opacity-90
            "
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(59,130,246,0.38),
                  transparent 72%
                )
              `,

              transform: `
                translate(
                  ${mouse.x * 0.7}px,
                  ${mouse.y * 0.7}px
                )
              `,
            }}
          />

          {/* RIGHT CYAN */}
          <div
            className="
              absolute
              right-[-12%]
              top-[8%]
              h-[750px]
              w-[750px]
              rounded-full
              blur-[150px]
              opacity-80
            "
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(34,211,238,0.34),
                  transparent 72%
                )
              `,

              transform: `
                translate(
                  ${mouse.x * -0.5}px,
                  ${mouse.y * -0.5}px
                )
              `,
            }}
          />

          {/* PURPLE CENTER */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[950px]
              w-[950px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[170px]
              opacity-75
            "
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(168,85,247,0.22),
                  transparent 72%
                )
              `,
            }}
          />

          {/* BOTTOM SOFT */}
          <div
            className="
              absolute
              bottom-[-20%]
              left-[15%]
              h-[700px]
              w-[700px]
              rounded-full
              blur-[150px]
              opacity-70
            "
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(125,211,252,0.28),
                  transparent 72%
                )
              `,

              transform: `
                translate(
                  ${mouse.x * 0.4}px,
                  ${mouse.y * 0.4}px
                )
              `,
            }}
          />
        </>
      )}

      {/* ================= LIQUID LAYER ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "url(#liquid-filter)",
        }}
      >
        {/* ================= PARTICLES ================= */}
        {particles.map((p) => (
          <div
            key={p.id}
            className={`
              absolute rounded-full animate-paintFade
              ${
                isDark
                  ? "bg-cyan-400/20"
                  : "bg-fuchsia-400"
              }
            `}
            style={{
              left: p.x,
              top: p.y,

              width: p.size,
              height: p.size,

              opacity: p.opacity,

              filter: `blur(${p.blur}px)`,

              transform:
                "translate(-50%, -50%)",

             
      boxShadow: isDark
        ? "0 0 40px rgba(34,211,238,0.15)"
        : "0 0 60px rgba(217,70,239,0.35)",
            }}
          />
        ))}

      {/* ================= MAIN BLOB ================= */}
<div
  className={`
    absolute top-1/2 left-1/2
    h-[1050px] w-[1250px]
    liquid-wave
    transition-transform duration-1000 ease-out
    ${
      isDark
        ? `
          opacity-35
          blur-[110px]
          bg-gradient-to-br
          from-purple-600
          via-blue-500
          to-cyan-400
        `
        : `
          opacity-[0.95]
          blur-[145px]
          bg-gradient-to-br
          from-[#2563eb]
          via-[#4f46e5]
          to-[#7c3aed]
        `
    }
  `}
  style={{
    transform: `
      translate(
        calc(-50% + ${mouse.x}px),
        calc(-50% + ${mouse.y}px)
      )
      rotate(${mouse.x * 0.08}deg)
    `,
  }}
/>

{/* ================= SECONDARY BLOB ================= */}
<div
  className={`
    absolute left-[5%] top-[2%]
    h-[650px] w-[650px]
    rounded-full
    transition-transform duration-[1400ms]
    ${
      isDark
        ? `
          bg-fuchsia-500/15
          blur-[120px]
        `
        : `
          bg-blue-500/35
          blur-[160px]
        `
    }
  `}
  style={{
    transform: `
      translate(
        ${mouse.x * -0.7}px,
        ${mouse.y * -0.7}px
      )
    `,
  }}
/>

{/* ================= THIRD BLOB ================= */}
<div
  className={`
    absolute bottom-[-15%] right-[0%]
    h-[600px] w-[600px]
    rounded-full
    transition-transform duration-[1800ms]
    ${
      isDark
        ? `
          bg-cyan-400/10
          blur-[120px]
        `
        : `
          bg-violet-500/30
          blur-[170px]
        `
    }
  `}
  style={{
    transform: `
      translate(
        ${mouse.x * 0.55}px,
        ${mouse.y * 0.55}px
      )
    `,
  }}
/>

{/* ================= LIGHT MODE AURORA ================= */}
{!isDark && (
  <>
    {/* BLUE GLOW */}
    <div
      className="
        absolute
        left-[-12%]
        top-[-18%]
        h-[850px]
        w-[850px]
        rounded-full
        blur-[160px]
        opacity-90
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(37,99,235,0.40),
            transparent 72%
          )
        `,

        transform: `
          translate(
            ${mouse.x * 0.7}px,
            ${mouse.y * 0.7}px
          )
        `,
      }}
    />

    {/* INDIGO GLOW */}
    <div
      className="
        absolute
        right-[-10%]
        top-[10%]
        h-[750px]
        w-[750px]
        rounded-full
        blur-[160px]
        opacity-80
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(79,70,229,0.34),
            transparent 72%
          )
        `,

        transform: `
          translate(
            ${mouse.x * -0.5}px,
            ${mouse.y * -0.5}px
          )
        `,
      }}
    />

    {/* PURPLE CENTER */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[950px]
        w-[950px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-[180px]
        opacity-70
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(124,58,237,0.28),
            transparent 72%
          )
        `,
      }}
    />
  </>
)}
        {/* ================= SECONDARY BLOB ================= */}
        <div
          className={`
            absolute left-[5%] top-[2%]
            h-[650px] w-[650px]
            rounded-full
            transition-transform duration-[1400ms]
            ${
              isDark
                ? `
                  bg-fuchsia-500/15
                  blur-[120px]
                `
                : `
                  bg-blue-400/40
                  blur-[150px]
                `
            }
          `}
          style={{
            transform: `
              translate(
                ${mouse.x * -0.7}px,
                ${mouse.y * -0.7}px
              )
            `,
          }}
        />

        {/* ================= THIRD BLOB ================= */}
        <div
          className={`
            absolute bottom-[-15%] right-[0%]
            h-[600px] w-[600px]
            rounded-full
            transition-transform duration-[1800ms]
            ${
              isDark
                ? `
                  bg-cyan-400/10
                  blur-[120px]
                `
                : `
                  bg-cyan-300/45
                  blur-[160px]
                `
            }
          `}
          style={{
            transform: `
              translate(
                ${mouse.x * 0.55}px,
                ${mouse.y * 0.55}px
              )
            `,
          }}
        />
      </div>

      {/* ================= MOUSE GLOW ================= */}
      <div
        className={`
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          pointer-events-none
          transition-transform duration-300
          ${
            isDark
              ? "opacity-20 blur-3xl"
              : "opacity-60 blur-[130px]"
          }
        `}
        style={{
          left: `calc(50% + ${mouse.x * 4}px)`,

          top: `calc(50% + ${mouse.y * 4}px)`,

          transform: "translate(-50%, -50%)",

          background: isDark
            ? `
              radial-gradient(
                circle,
                rgba(139,92,246,0.9),
                transparent 70%
              )
            `
            : `
              radial-gradient(
                circle,
                rgba(59,130,246,0.40),
                transparent 72%
              )
            `,
        }}
      />

      {/* ================= GRID ================= */}
      <div
        className={`
          absolute inset-0
          [background-size:72px_72px]
          pointer-events-none
          ${
            isDark
              ? `
                opacity-[0.035]
                [background-image:
                  linear-gradient(to_right,#ffffff08_1px,transparent_1px),
                  linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)
                ]
              `
              : `
                opacity-[0.07]
                [background-image:
                  linear-gradient(to_right,#3b82f608_1px,transparent_1px),
                  linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)
                ]
              `
          }
        `}
      />

     
      {/* ================= VIGNETTE ================= */}
      <div
        className={`
          absolute inset-0
          ${
            isDark
              ? `
                bg-[radial-gradient(
                  circle_at_center,
                  transparent_0%,
                  rgba(0,0,0,0.45)_100%
                )]
              `
              : `
                bg-[radial-gradient(
                  circle_at_center,
                  rgba(255,255,255,0)_10%,
                  rgba(210,230,255,0.55)_100%
                )]
              `
          }
        `}
      />
    </div>
  );
}