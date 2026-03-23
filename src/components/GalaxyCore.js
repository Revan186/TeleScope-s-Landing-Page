'use client'

import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

function createCoreTexture(inner, mid, outer) {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  )

  g.addColorStop(0, inner)
  g.addColorStop(0.25, mid)
  g.addColorStop(0.55, outer)
  g.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export default function GalaxyCore() {
  const innerRef = useRef()
  const midRef = useRef()
  const outerRef = useRef()

  const textures = useMemo(() => ({
    inner: createCoreTexture(
      'rgba(255,245,210,1)',
      'rgba(255,210,140,0.7)',
      'rgba(255,170,90,0.25)'
    ),
    mid: createCoreTexture(
      'rgba(255,190,100,0.25)',
      'rgba(255,140,60,0.1)',
      'rgba(0,0,0,0)'
    ),
    outer: createCoreTexture(
      'rgba(255,180,100,0.08)',
      'rgba(255,140,60,0.04)',
      'rgba(0,0,0,0)'
    ),
  }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    const pulse1 = 1 + Math.sin(t * 1.2) * 0.015
    const pulse2 = 1 + Math.sin(t * 0.8 + 1.5) * 0.02
    const pulse3 = 1 + Math.sin(t * 0.5 + 2.2) * 0.025

    if (innerRef.current) innerRef.current.scale.set(2.0 * pulse1, 2.0 * pulse1, 1)
    if (midRef.current) midRef.current.scale.set(4.2 * pulse2, 4.2 * pulse2, 1)
    if (outerRef.current) outerRef.current.scale.set(6.5 * pulse3, 6.5 * pulse3, 1)
  })

  return (
    <group position={[0, 0, -2]}>
      <sprite ref={outerRef}>
        <spriteMaterial
          map={textures.outer}
          transparent
          opacity={0.6}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <sprite ref={midRef}>
        <spriteMaterial
          map={textures.mid}
          transparent
          opacity={0.7}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <sprite ref={innerRef}>
        <spriteMaterial
          map={textures.inner}
          transparent
          opacity={1}
          depthWrite={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
    </group>
  )
}