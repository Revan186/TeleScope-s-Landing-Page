'use client'

import { useEffect, useState } from 'react'
import Scene from '@/components/Scene'
import HeroUI from '@/components/HeroUI'
import ScanOverlay from '@/components/ScanOverlay'

export default function Home() {
  const [reveal, setReveal] = useState(0)

  useEffect(() => {
    let frameId
    const start = performance.now()
    const duration = 2800

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setReveal(eased)

      if (t < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      <Scene reveal={reveal} />
      <ScanOverlay reveal={reveal} />
      <HeroUI reveal={reveal} />
    </main>
  )
}