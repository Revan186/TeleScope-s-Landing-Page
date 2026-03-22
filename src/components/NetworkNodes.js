'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  NODE_TYPES,
  TOTAL_NODES,
  getAnimatedNodePosition,
} from '@/data/networkData'

const NODE_GEOMETRY = new THREE.SphereGeometry(1, 10, 10)

const YOUTUBE_COLOR = new THREE.Color('#8b5cf6')
const TELEGRAM_COLOR = new THREE.Color('#67e8f9')

const DUMMY = new THREE.Object3D()
const COLOR = new THREE.Color()

export default function NetworkNodes() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()

    for (let i = 0; i < TOTAL_NODES; i++) {
      const pos = getAnimatedNodePosition(i, time)
      const type = NODE_TYPES[i]

      DUMMY.position.copy(pos)

      const scale = type === 'youtube' ? 0.34 : 0.2
      DUMMY.scale.setScalar(scale)
      DUMMY.updateMatrix()

      meshRef.current.setMatrixAt(i, DUMMY.matrix)

      COLOR.copy(type === 'youtube' ? YOUTUBE_COLOR : TELEGRAM_COLOR)
      meshRef.current.setColorAt(i, COLOR)
    }

    meshRef.current.instanceMatrix.needsUpdate = true

    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }

    meshRef.current.rotation.y += delta * 0.08
  })

  return (
    <instancedMesh ref={meshRef} args={[NODE_GEOMETRY, null, TOTAL_NODES]}>
      <meshBasicMaterial vertexColors toneMapped={false} />
    </instancedMesh>
  )
}