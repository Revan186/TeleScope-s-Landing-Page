'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const STAR_COUNT = 3000
const STAR_POSITIONS = new Float32Array(STAR_COUNT * 3)

for (let i = 0; i < STAR_COUNT * 3; i++) {
  STAR_POSITIONS[i] = (Math.random() - 0.5) * 120
}

const STAR_GEOMETRY = new THREE.BufferGeometry()
STAR_GEOMETRY.setAttribute(
  'position',
  new THREE.BufferAttribute(STAR_POSITIONS, 3)
)

function createStarTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  )

  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.35, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.7, 'rgba(255,255,255,0.35)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

const STAR_TEXTURE =
  typeof document !== 'undefined' ? createStarTexture() : null

export default function Stars() {
  const ref = useRef()

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.01
  })

  return (
    <points ref={ref} geometry={STAR_GEOMETRY}>
      <pointsMaterial
        map={STAR_TEXTURE}
        color="#ffffff"
        size={0.3}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.9}
        alphaTest={0.01}
        toneMapped={false}
      />
    </points>
  )
}