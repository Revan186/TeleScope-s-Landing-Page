'use client'

export default function ScanOverlay({ scanProgress }) {
  const left = -20 + scanProgress * 140
  const active = scanProgress < 0.995

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* мягкий широкий ореол */}
      <div
        className="absolute top-[-10%] h-[120%] w-[22%] blur-3xl"
        style={{
          left: `${left - 6}%`,
          opacity: active ? 0.55 : 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(34,211,238,0.06) 25%, rgba(34,211,238,0.18) 50%, rgba(99,102,241,0.12) 72%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-10deg)',
          transition: 'opacity 240ms ease',
        }}
      />

      {/* основная тонкая линия сканера */}
      <div
        className="absolute top-0 h-full w-[7%] blur-md"
        style={{
          left: `${left}%`,
          opacity: active ? 0.9 : 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 18%, rgba(34,211,238,0.46) 48%, rgba(255,255,255,0.18) 55%, rgba(99,102,241,0.26) 80%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-10deg)',
          transition: 'opacity 240ms ease',
        }}
      />
    </div>
  )
}