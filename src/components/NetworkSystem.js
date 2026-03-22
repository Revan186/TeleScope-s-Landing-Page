'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  TOTAL_NODES,
  NODE_POSITIONS,
  NODE_TYPES,
} from '@/data/networkData'

const NODE_GEOMETRY = new THREE.SphereGeometry(1, 10, 10)

const NODE_MATERIAL = new THREE.MeshBasicMaterial({
  color: '#111111',
  toneMapped: false,
})

const DUMMY = new THREE.Object3D()

export default function NetworkSystem() {
  const groupRef = useRef()
  const nodesRef = useRef()

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()

    if (!nodesRef.current || !groupRef.current) return

    for (let i = 0; i < TOTAL_NODES; i++) {
      const base = NODE_POSITIONS[i]
      const isYoutube = NODE_TYPES[i] === 'youtube'

      const x = base.x + Math.sin(time * 0.35 + i * 0.7) * 0.035
      const y = base.y + Math.sin(time * 0.9 + i) * 0.11
      const z = base.z + Math.cos(time * 0.4 + i * 0.45) * 0.03

      DUMMY.position.set(x, y, z)
      DUMMY.scale.setScalar(isYoutube ? 0.35 : 0.22)
      DUMMY.updateMatrix()

      nodesRef.current.setMatrixAt(i, DUMMY.matrix)
    }

    nodesRef.current.instanceMatrix.needsUpdate = true
    groupRef.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={nodesRef}
        args={[NODE_GEOMETRY, NODE_MATERIAL, TOTAL_NODES]}
      />
    </group>
  )
}