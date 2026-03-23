'use client'

export default function ScanOverlay({ reveal }) {
  const left = -18 + reveal * 136
  const glowOpacity = reveal < 1 ? 0.8 : 0
  const lineOpacity = reveal < 1 ? 1 : 0

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(3,0,20,0.06) 0%, rgba(3,0,20,0.22) 48%, rgba(3,0,20,0.52) 100%)',
        }}
      />

      <div
        className="absolute inset-y-[-10%] w-[28%] blur-2xl"
        style={{
          left: `${left - 6}%`,
          opacity: glowOpacity,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(34,211,238,0.18) 40%, rgba(99,102,241,0.16) 65%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-10deg)',
          transition: 'opacity 300ms ease',
        }}
      />

      <div
        className="absolute inset-y-0 w-[12%] blur-md"
        style={{
          left: `${left}%`,
          opacity: lineOpacity,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 20%, rgba(34,211,238,0.38) 48%, rgba(255,255,255,0.12) 55%, rgba(99,102,241,0.26) 75%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-10deg)',
          transition: 'opacity 300ms ease',
        }}
      />
    </div>
  )
}