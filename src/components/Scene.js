'use client'

import { Canvas } from '@react-three/fiber'
import Stars from './Stars'
import NetworkSystem from './NetworkSystem'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
    >
      {/* background */}
      <color attach="background" args={['#030014']} />
      <fog attach="fog" args={['#030014', 18, 60]} />

      {/* minimal light (nodes are basic material anyway) */}
      <ambientLight intensity={0.2} />

      {/* ⭐ STARS — this was missing */}
      <Stars />

      {/* network */}
      <NetworkSystem />
    </Canvas>
  )
}