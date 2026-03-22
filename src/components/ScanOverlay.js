'use client'

export default function ScanOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="scan-vignette" />
      <div className="scan-glow" />
      <div className="scan-line" />

      <style jsx>{`
        .scan-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(3, 0, 20, 0.05) 0%, rgba(3, 0, 20, 0.25) 45%, rgba(3, 0, 20, 0.55) 100%);
          animation: vignetteFade 4.8s ease forwards;
        }

        .scan-glow {
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(
              circle at 15% 50%,
              rgba(34, 211, 238, 0.18) 0%,
              rgba(99, 102, 241, 0.10) 18%,
              rgba(34, 211, 238, 0.03) 30%,
              rgba(0, 0, 0, 0) 42%
            );
          filter: blur(18px);
          transform: translateX(-55%);
          animation: glowSweep 3.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .scan-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 16%;
          left: -20%;
          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.06) 18%,
              rgba(34, 211, 238, 0.28) 45%,
              rgba(255,255,255,0.12) 52%,
              rgba(99, 102, 241, 0.22) 68%,
              rgba(255,255,255,0) 100%
            );
          filter: blur(10px);
          transform: skewX(-10deg);
          animation: lineSweep 3.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineSweep {
          0% {
            left: -22%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            left: 112%;
            opacity: 0;
          }
        }

        @keyframes glowSweep {
          0% {
            transform: translateX(-55%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(58%);
            opacity: 0;
          }
        }

        @keyframes vignetteFade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  )
}