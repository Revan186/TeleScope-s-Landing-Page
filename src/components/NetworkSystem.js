'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import {
  TOTAL_NODES,
  NODE_POSITIONS,
  NODE_TYPES,
} from '@/data/networkData'

const LOGOS = [
  '/a01k.jpg',
  '/a01ktraders.jpg',
  '/altador.jpg',
  '/artur_ict.jpg',
  '/bogdan_gde_x.jpg',
  '/crypto_bosh.jpg',
  '/crypto_headlines.jpg',
  '/crypto_lady.jpg',
  '/cryptomera.jpg',
  '/dnevnick_capitanicka.jpg',
  '/forex_trade_wit.jpg',
  '/gennady_m_telegram.jpg',
  '/gennady_m_youtube.jpg',
  '/muhtov.jpg',
  '/pancryptan.jpg',
  '/pitupi.jpg',
  '/pro_blockchain_squad.jpg',
  '/pro_blockchain_youtube.jpg',
  '/pro_crypto_trading.jpg',
  '/pro-blockchain_media.jpg',
  '/sailer_1.jpg',
  '/sailer_2.jpg',
  '/satoshi_finance.jpg',
  '/satoshi_news.jpg',
  '/slezi_satoshi.jpg',
  '/speculantt.jpg',
  '/trade_ultra.jpg',
  '/trade001k.jpg',
  '/trader_s_life.jpg',
]

const DUMMY = new THREE.Object3D()

function AvatarNode({ texture, index, isYoutube, groupRef }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const base = NODE_POSITIONS[index]

    const x = base.x + Math.sin(t * 0.35 + index * 0.7) * 0.035
    const y = base.y + Math.sin(t * 0.9 + index) * 0.11
    const z = base.z + Math.cos(t * 0.4 + index * 0.45) * 0.03

    if (!meshRef.current || !groupRef.current) return

    meshRef.current.position.set(x, y, z)
    const scale = isYoutube ? 0.42 : 0.28
    meshRef.current.scale.set(scale, scale, 1)

    meshRef.current.lookAt(state.camera.position)
  })

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1, 48]} />
      <meshBasicMaterial
        map={texture || null}
        color={texture ? '#ffffff' : '#111111'}
        transparent
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  )
}

export default function NetworkSystem() {
  const groupRef = useRef()
  const textures = useTexture(LOGOS)

  textures.forEach((tex) => {
    tex.colorSpace = THREE.SRGBColorSpace
    tex.needsUpdate = true
  })

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: TOTAL_NODES }).map((_, i) => (
        <AvatarNode
          key={i}
          index={i}
          isYoutube={NODE_TYPES[i] === 'youtube'}
          texture={textures[i] || null}
          groupRef={groupRef}
        />
      ))}
    </group>
  )
}