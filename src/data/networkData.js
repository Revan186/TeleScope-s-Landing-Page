import * as THREE from "three";

export const TOTAL_NODES = 34;
export const YOUTUBE_COUNT = 7; // 4 новых + Бош, Геннадий, Сайлер

const rings = [
  { count: 7, radius: 1.8 }, // Внутреннее (YouTube)
  { count: 11, radius: 3.0 }, // Среднее
  { count: 16, radius: 4.2 }, // Внешнее
];

export const NODE_POSITIONS = [];
export const NODE_TYPES = [];

let index = 0;
for (let r = 0; r < rings.length; r++) {
  const ring = rings[r];
  for (let i = 0; i < ring.count; i++) {
    const angle = (i / ring.count) * Math.PI * 2;
    const x = Math.cos(angle) * ring.radius;
    const y = Math.sin(angle) * ring.radius * 0.35;
    const z = Math.sin(angle) * ring.radius * 0.7;

    NODE_POSITIONS.push(new THREE.Vector3(x, y, z));
    NODE_TYPES.push(index < YOUTUBE_COUNT ? "youtube" : "telegram");
    index++;
  }
}

export const MAX_CONNECTION_DISTANCE = 2.2;

export function getAnimatedNodePosition(i, t) {
  const base = NODE_POSITIONS[i];
  if (!base) return new THREE.Vector3();
  return new THREE.Vector3(
    base.x + Math.sin(t * 0.35 + i * 0.7) * 0.035,
    base.y + Math.sin(t * 0.9 + i) * 0.11,
    base.z + Math.cos(t * 0.4 + i * 0.45) * 0.03,
  );
}
