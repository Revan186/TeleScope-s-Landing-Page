'use client'

export default function HeroUI({ reveal }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
      <div
        className="max-w-4xl text-center transition-all duration-700"
        style={{
          opacity: Math.max(0, (reveal - 0.22) / 0.45),
          transform: `translateY(${20 - Math.max(0, (reveal - 0.22) / 0.45) * 20}px)`,
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
          The Premier Web3 Media Infrastructure
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Access 5M+ verified crypto users across the CIS region — through a single, compliant gateway.
        </p>

        <div className="mt-8">
          <button className="pointer-events-auto px-6 py-3 rounded-xl bg-white text-black text-sm md:text-base font-medium hover:opacity-90 transition">
            Request a Media Plan
          </button>
        </div>
      </div>
    </div>
  )
}