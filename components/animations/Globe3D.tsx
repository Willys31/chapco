'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useMemo, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import * as THREE from 'three';

const RADIUS = 2.5;
const SAGE_300 = '#C8E0C8';
const SAGE_500 = '#A8C9A8';
const NAVY_700 = '#1E2A5E';
const CREAM = '#FAF8F3';

const ABIDJAN = { lat: 5.36, lng: -4.0083 };
const DESTINATIONS = [
  { lat: 43.2965, lng: 5.3698 },   // Marseille
  { lat: 51.2194, lng: 4.4025 },   // Anvers
  { lat: 51.9244, lng: 4.4777 },   // Rotterdam
  { lat: 53.5511, lng: 9.9937 },   // Hambourg
  { lat: 40.7128, lng: -74.006 },  // New York
  { lat: 31.2304, lng: 121.4737 }, // Shanghai
  { lat: 25.2048, lng: 55.2708 },  // Dubai
];

function latLng(lat: number, lng: number, r = RADIUS): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

// ── Abidjan pulsing origin dot ─────────────────────────────────────────────
function PulsingDot({ position }: { position: THREE.Vector3 }) {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!pulseRef.current) return;
    const t = (Math.sin(clock.elapsedTime * 2) + 1) / 2;
    pulseRef.current.scale.setScalar(1 + t * 2.5);
    (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.5;
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={SAGE_500} />
      </mesh>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={SAGE_500} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// ── Animated arc from Abidjan to a destination ─────────────────────────────
function GlobeArc({
  start,
  end,
  phase,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  phase: number;
}) {
  const particleRef = useRef<THREE.Mesh>(null);

  const { curve, lineObj } = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(RADIUS + 0.8);
    const c = new THREE.QuadraticBezierCurve3(start, mid, end);
    const geo = new THREE.BufferGeometry().setFromPoints(c.getPoints(64));
    const mat = new THREE.LineBasicMaterial({
      color: SAGE_300,
      transparent: true,
      opacity: 0.25,
    });
    return { curve: c, lineObj: new THREE.Line(geo, mat) };
  }, [start, end]);

  useFrame(({ clock }) => {
    if (!particleRef.current) return;
    const t = (clock.elapsedTime * 0.18 + phase) % 1;
    particleRef.current.position.copy(curve.getPoint(t));
    // fade in/out near endpoints
    (particleRef.current.material as THREE.MeshBasicMaterial).opacity =
      Math.sin(t * Math.PI) * 0.95;
  });

  return (
    <>
      <primitive object={lineObj} />
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color={CREAM} transparent opacity={0.9} />
      </mesh>
    </>
  );
}

// ── Main scene ─────────────────────────────────────────────────────────────
function GlobeScene({
  mouseRef,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const abidjanPos = useMemo(() => latLng(ABIDJAN.lat, ABIDJAN.lng, RADIUS + 0.05), []);
  const destPositions = useMemo(
    () => DESTINATIONS.map((d) => latLng(d.lat, d.lng, RADIUS + 0.05)),
    []
  );

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.1;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseRef.current.y * 0.08,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe shell */}
      <mesh>
        <sphereGeometry args={[RADIUS, 36, 36]} />
        <meshBasicMaterial color={SAGE_300} wireframe transparent opacity={0.22} />
      </mesh>

      {/* Inner navy sphere for depth */}
      <mesh>
        <sphereGeometry args={[RADIUS - 0.01, 32, 32]} />
        <meshBasicMaterial color={NAVY_700} transparent opacity={0.5} />
      </mesh>

      {/* Abidjan — pulsing origin */}
      <PulsingDot position={abidjanPos} />

      {/* Destination dots */}
      {destPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color={CREAM} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Animated connection arcs */}
      {destPositions.map((pos, i) => (
        <GlobeArc
          key={i}
          start={abidjanPos}
          end={pos}
          phase={i / DESTINATIONS.length}
        />
      ))}
    </group>
  );
}

// ── Exported wrapper ───────────────────────────────────────────────────────
export function Globe3D() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color={SAGE_300} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#3D4F8A" intensity={0.5} />
        <Suspense fallback={null}>
          <GlobeScene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
