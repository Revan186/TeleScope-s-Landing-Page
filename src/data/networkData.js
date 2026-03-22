import * as THREE from 'three'

export const TOTAL_NODES = 34
export const YOUTUBE_COUNT = 6

// --- STRUCTURED LAYOUT ---
// 3 rings: inner, middle, outer

const rings = [
  { count: 6, radius: 1.8 },   // inner (YouTube)
  { count: 12, radius: 3.0 },  // middle
  { count: 16, radius: 4.2 },  // outer
]

export const NODE_POSITIONS = []
export const NODE_TYPES = []

let index = 0

for (let r = 0; r < rings.length; r++) {
  const ring = rings[r]

  for (let i = 0; i < ring.count; i++) {
    const angle = (i / ring.count) * Math.PI * 2

    const x = Math.cos(angle) * ring.radius
    const y = (Math.sin(angle) * ring.radius) * 0.35
    const z = Math.sin(angle) * ring.radius * 0.7

    NODE_POSITIONS.push(new THREE.Vector3(x, y, z))

    if (index < YOUTUBE_COUNT) {
      NODE_TYPES.push('youtube')
    } else {
      NODE_TYPES.push('telegram')
    }

    index++
  }
}