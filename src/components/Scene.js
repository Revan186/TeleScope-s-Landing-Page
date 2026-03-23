'use client'

import { Canvas } from '@react-three/fiber'
import Stars from './Stars'
import GalaxyCore from './GalaxyCore'
import NetworkSystem from './NetworkSystem'
import LogoNodes from './LogoNodes'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
    >
      <color attach="background" args={['#030014']} />
      <fog attach="fog" args={['#030014', 18, 60]} />

      <ambientLight intensity={0.2} />

      <Stars />
      <GalaxyCore />
      <NetworkSystem /> 
     
    </Canvas>
  )
}