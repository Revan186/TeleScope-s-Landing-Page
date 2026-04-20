"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { TOTAL_NODES, NODE_POSITIONS, NODE_TYPES } from "@/data/networkData";

const LOGOS = [
  "/олег_артемьев.jpg", // #1 Center
  "/itpedia.jpg", // #2 Center
  "/шевцов.jpg", // #3 Center
  "/igor_link.jpg", // #4 Center
  "/crypto_bosh.jpg", // #5 Center
  "/gennady_m_youtube.jpg", // #6 Center
  "/sailer_1.jpg", // #7 Center
  "/slezi_satoshi.jpg",
  "/trade001k.jpg",
  "/pro-blockchain_media.jpg",
  "/a01k.jpg",
  "/a01ktraders.jpg",
  "/altador.jpg",
  "/artur_ict.jpg",
  "/bogdan_gde_x.jpg",
  "/crypto_headlines.jpg",
  "/crypto_lady.jpg",
  "/cryptomera.jpg",
  "/dnevnick_capitanicka.jpg",
  "/forex_trade_wit.jpg",
  "/gennady_m_telegram.jpg",
  "/muhtov.jpg",
  "/pitupi.jpg",
  "/pro_blockchain_squad.jpg",
  "/pro_blockchain_youtube.jpg",
  "/pro_crypto_trading.jpg",
  "/sailer_2.jpg",
  "/satoshi_finance.jpg",
  "/drzj.webp",
  "/speculantt.jpg",
  "/trade_ultra.jpg",
  "/varlamov.png",
  "/tvs.jpg",
  "/соболев.jpg",
];

const MIN_X = Math.min(...NODE_POSITIONS.map((p) => p.x));
const MAX_X = Math.max(...NODE_POSITIONS.map((p) => p.x));
const RANGE_X = MAX_X - MIN_X;

function Node({ index, texture, isYoutube, groupRef, scanProgress }) {
  const nodeRef = useRef();
  const hiddenRef = useRef();
  const avatarRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!nodeRef.current || !groupRef.current) return;

    const base = NODE_POSITIONS[index];

    const x = base.x + Math.sin(t * 0.35 + index * 0.7) * 0.035;
    const y = base.y + Math.sin(t * 0.9 + index) * 0.11;
    const z = base.z + Math.cos(t * 0.4 + index * 0.45) * 0.03;

    nodeRef.current.position.set(x, y, z);

    const baseScale = isYoutube ? 0.42 : 0.28;
    const normalizedX = RANGE_X === 0 ? 0 : (base.x - MIN_X) / RANGE_X;

    const revealStart = normalizedX * 0.72;
    const revealWindow = 0.16;
    const localReveal = THREE.MathUtils.clamp(
      (scanProgress - revealStart) / revealWindow,
      0,
      1,
    );

    const hiddenScale = baseScale * (1 - localReveal * 0.12);
    const avatarScale = baseScale * (0.88 + localReveal * 0.12);

    if (hiddenRef.current) {
      hiddenRef.current.scale.set(hiddenScale, hiddenScale, 1);
      hiddenRef.current.material.opacity = 0.88 - localReveal * 0.82;
      hiddenRef.current.material.color.set("#0f172a");
    }

    if (avatarRef.current) {
      avatarRef.current.scale.set(avatarScale, avatarScale, 1);
      avatarRef.current.material.opacity = texture
        ? localReveal
        : 0.06 + localReveal * 0.08;

      avatarRef.current.material.color.set(texture ? "#ffffff" : "#334155");
    }

    nodeRef.current.lookAt(state.camera.position);
  });

  return (
    <group ref={nodeRef}>
      <mesh ref={hiddenRef}>
        <circleGeometry args={[1, 48]} />
        <meshBasicMaterial
          color="#0f172a"
          transparent
          opacity={0.88}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <mesh ref={avatarRef} position={[0, 0, 0.002]}>
        <circleGeometry args={[1, 48]} />
        <meshBasicMaterial
          map={texture || null}
          color={texture ? "#ffffff" : "#334155"}
          transparent
          opacity={0}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function NetworkSystem({ scanProgress = 0 }) {
  const groupRef = useRef();
  const textures = useTexture(LOGOS);

  const safeTextures = useMemo(() => {
    return textures.map((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      return tex;
    });
  }, [textures]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: TOTAL_NODES }).map((_, i) => (
        <Node
          key={i}
          index={i}
          texture={safeTextures[i] || null}
          isYoutube={NODE_TYPES[i] === "youtube"}
          groupRef={groupRef}
          scanProgress={scanProgress}
        />
      ))}
    </group>
  );
}
