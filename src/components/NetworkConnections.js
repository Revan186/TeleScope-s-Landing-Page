'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  TOTAL_NODES,
  MAX_CONNECTION_DISTANCE,
  getAnimatedNodePosition,
} from '@/data/networkData'

const MAX_SEGMENTS = (TOTAL_NODES * (TOTAL_NODES - 1)) / 2
const LINE_POSITIONS = new Float32Array(MAX_SEGMENTS * 2 * 3)

const LINE_GEOMETRY = new THREE.BufferGeometry()
LINE_GEOMETRY.setAttribute(
  'position',
  new THREE.BufferAttribute(LINE_POSITIONS, 3)
)
LINE_GEOMETRY.setDrawRange(0, 0)

const TEMP_A = new THREE.Vector3()
const TEMP_B = new THREE.Vector3()

export default function NetworkConnections() {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()
    let ptr = 0
    let segmentCount = 0

    for (let i = 0; i < TOTAL_NODES; i++) {
      TEMP_A.copy(getAnimatedNodePosition(i, time))

      for (let j = i + 1; j < TOTAL_NODES; j++) {
        TEMP_B.copy(getAnimatedNodePosition(j, time))

        if (TEMP_A.distanceTo(TEMP_B) <= MAX_CONNECTION_DISTANCE) {
          LINE_POSITIONS[ptr++] = TEMP_A.x
          LINE_POSITIONS[ptr++] = TEMP_A.y
          LINE_POSITIONS[ptr++] = TEMP_A.z

          LINE_POSITIONS[ptr++] = TEMP_B.x
          LINE_POSITIONS[ptr++] = TEMP_B.y
          LINE_POSITIONS[ptr++] = TEMP_B.z

          segmentCount++
        }
      }
    }

    LINE_GEOMETRY.attributes.position.needsUpdate = true
    LINE_GEOMETRY.setDrawRange(0, segmentCount * 2)

    ref.current.rotation.y += delta * 0.08
  })

  return (
    <lineSegments ref={ref} geometry={LINE_GEOMETRY}>
      <lineBasicMaterial
        color="#3dd9ff"
        transparent
        opacity={0.22}
        toneMapped={false}
      />
    </lineSegments>
  )
}