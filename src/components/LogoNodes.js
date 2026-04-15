"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { TOTAL_NODES, NODE_POSITIONS, NODE_TYPES } from "@/data/networkData";

const loader = new THREE.TextureLoader();

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
  "/satoshi_news.jpg",
  "/speculantt.jpg",
  "/trade_ultra.jpg",
  "/trader_s_life.jpg",
  "/tvs.jpg",
  "/pancryptan.jpg",
];

export default function LogoNodes() {
  const groupRef = useRef();
  const spritesRef = useRef([]);

  useEffect(() => {
    if (!groupRef.current) return;

    const textures = LOGOS.map((src) => loader.load(src));

    const sprites = textures.slice(0, TOTAL_NODES).map((texture, i) => {
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      });

      const sprite = new THREE.Sprite(material);
      groupRef.current.add(sprite);
      return sprite;
    });

    spritesRef.current = sprites;

    return () => {
      sprites.forEach((sprite) => {
        groupRef.current?.remove(sprite);
        sprite.material.map?.dispose?.();
        sprite.material.dispose();
      });
      spritesRef.current = [];
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < spritesRef.current.length; i++) {
      const sprite = spritesRef.current[i];
      const base = NODE_POSITIONS[i];
      const isYoutube = NODE_TYPES[i] === "youtube";

      const x = base.x + Math.sin(t * 0.35 + i * 0.7) * 0.035;
      const y = base.y + Math.sin(t * 0.9 + i) * 0.11;
      const z = base.z + Math.cos(t * 0.4 + i * 0.45) * 0.03;

      sprite.position.set(x, y, z);

      const scale = isYoutube ? 0.9 : 0.62;
      sprite.scale.set(scale, scale, 1);
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return <group ref={groupRef} />;
}
