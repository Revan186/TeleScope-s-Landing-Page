'use client'

import { useEffect, useState } from 'react'
import Scene from '@/components/Scene'
import HeroUI from '@/components/HeroUI'
import ScanOverlay from '@/components/ScanOverlay'

export default function Home() {
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    let frameId
    const start = performance.now()
    const duration = 2200

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setScanProgress(eased)

      if (t < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      <Scene scanProgress={scanProgress} />
      <ScanOverlay scanProgress={scanProgress} />
      <HeroUI />
    </main>
  )
}