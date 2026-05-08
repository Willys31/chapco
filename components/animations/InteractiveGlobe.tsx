'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

type GlobeMode = 'import' | 'export';

const RADIUS = 2.5;

// phi (R3F rotation.y) ≈ -longitude_deg × π / 180
const PHI_IMPORT = -0.35; // Afrique centrée
const PHI_EXPORT = 1.5;   // Eurasie centrée
const MODE_DIFF = PHI_EXPORT - PHI_IMPORT;

function latLng(lat: number, lng: number, r = RADIUS + 0.02): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

type CityPoint = { lat: number; lng: number; isOrigin: boolean };

const AFRICA_POINTS: CityPoint[] = [
  { lat: 5.36, lng: -4.0083, isOrigin: true },
  { lat: 6.5244, lng: 3.3792, isOrigin: false },
  { lat: 14.6928, lng: -17.4467, isOrigin: false },
  { lat: 5.6037, lng: -0.187, isOrigin: false },
  { lat: 6.3703, lng: 2.3912, isOrigin: false },
];

const EXPORT_POINTS: CityPoint[] = [
  { lat: 5.36, lng: -4.0083, isOrigin: true },
  { lat: 43.2965, lng: 5.3698, isOrigin: false },
  { lat: 51.2194, lng: 4.4025, isOrigin: false },
  { lat: 51.9244, lng: 4.4777, isOrigin: false },
  { lat: 53.5511, lng: 9.9937, isOrigin: false },
  { lat: 40.7128, lng: -74.006, isOrigin: false },
  { lat: 31.2304, lng: 121.4737, isOrigin: false },
  { lat: 25.2048, lng: 55.2708, isOrigin: false },
  { lat: 35.6762, lng: 139.6503, isOrigin: false },
  { lat: 1.3521, lng: 103.8198, isOrigin: false },
];

// ── Shaders atmosphère Fresnel ─────────────────────────────────────────────
const ATMO_VERT = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ATMO_FRAG = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    float d = dot(vNormal, vec3(0.0, 0.0, 1.0));
    float intensity = pow(1.0 - abs(d), 4.0);
    gl_FragColor = vec4(0.05, 0.38, 0.92, intensity) * intensity * 1.3;
  }
`;

// ── Halo pulsant pour Abidjan ──────────────────────────────────────────────
function PulsingHalo({ position }: { position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (Math.sin(clock.elapsedTime * 2.5) + 1) / 2;
    ref.current.scale.setScalar(1 + t * 3);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.55;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color="#A8C9A8" transparent opacity={0.5} depthWrite={false} />
    </mesh>
  );
}

// ── Marqueur de ville ──────────────────────────────────────────────────────
function CityMarker({ lat, lng, isOrigin }: CityPoint) {
  const pos = latLng(lat, lng);
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[isOrigin ? 0.055 : 0.038, 14, 14]} />
        <meshBasicMaterial color={isOrigin ? '#C8E0C8' : '#FAF8F3'} />
      </mesh>
      {isOrigin && <PulsingHalo position={new THREE.Vector3(0, 0, 0)} />}
    </group>
  );
}

// ── Sphère atmosphérique ───────────────────────────────────────────────────
function Atmosphere() {
  return (
    <mesh renderOrder={10}>
      <sphereGeometry args={[RADIUS + 0.18, 48, 48]} />
      <shaderMaterial
        vertexShader={ATMO_VERT}
        fragmentShader={ATMO_FRAG}
        blending={THREE.AdditiveBlending}
        transparent
        depthTest={false}
        depthWrite={false}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

// ── Scène Terre + marqueurs ────────────────────────────────────────────────
function EarthScene({
  mode,
  phiRef,
  targetPhiRef,
  isDraggingRef,
}: {
  mode: GlobeMode;
  phiRef: React.MutableRefObject<number>;
  targetPhiRef: React.MutableRefObject<number>;
  isDraggingRef: React.MutableRefObject<boolean>;
}) {
  const earthGroupRef = useRef<THREE.Group>(null);

  const [dayMap, bumpMap] = useLoader(THREE.TextureLoader, [
    '/textures/earth-day.jpg',
    '/textures/earth-bumps.jpg',
  ]);

  useFrame((_, delta) => {
    if (!isDraggingRef.current) {
      targetPhiRef.current += delta * 0.05;
    }
    phiRef.current += (targetPhiRef.current - phiRef.current) * 0.07;

    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y = phiRef.current;
    }
  });

  const points = mode === 'import' ? AFRICA_POINTS : EXPORT_POINTS;

  return (
    <group ref={earthGroupRef}>
      {/* Terre */}
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          bumpMap={bumpMap}
          bumpScale={0.12}
          specular={new THREE.Color(0x1a4a8a)}
          shininess={18}
          emissive={new THREE.Color(0x061830)}
          emissiveIntensity={0.45}
        />
      </mesh>

      {/* Marqueurs */}
      {points.map((p, i) => (
        <CityMarker key={`${mode}-${i}`} {...p} />
      ))}
    </group>
  );
}

// ── Composant exporté ──────────────────────────────────────────────────────
export function InteractiveGlobe() {
  const phiRef = useRef(PHI_IMPORT);
  const targetPhiRef = useRef(PHI_IMPORT);
  const isDraggingRef = useRef(false);
  const pointerDownX = useRef<number | null>(null);

  const [mode, setMode] = useState<GlobeMode>('import');
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleModeChange = useCallback((newMode: GlobeMode) => {
    setMode((prev) => {
      if (prev === newMode) return prev;
      targetPhiRef.current += newMode === 'export' ? MODE_DIFF : -MODE_DIFF;
      return newMode;
    });
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    pointerDownX.current = e.clientX;
    setHasInteracted(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    pointerDownX.current = null;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current || pointerDownX.current === null) return;
    const delta = e.clientX - pointerDownX.current;
    targetPhiRef.current += delta * 0.004;
    phiRef.current = targetPhiRef.current;
    pointerDownX.current = e.clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current || pointerDownX.current === null || !e.touches[0]) return;
    const delta = e.touches[0].clientX - pointerDownX.current;
    targetPhiRef.current += delta * 0.004;
    phiRef.current = targetPhiRef.current;
    pointerDownX.current = e.touches[0].clientX;
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      {/* Halo CSS derrière le globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[80px]" />
      </div>

      {/* Canvas 3D */}
      <div
        className="relative w-full flex-1 min-h-0 cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <Canvas
          camera={{ position: [0, 0, 7], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 3, 5]} intensity={1.4} />
          <directionalLight position={[-5, -3, -5]} color="#1a5aaa" intensity={0.5} />

          {/* Atmosphère (toujours rendue) */}
          <Atmosphere />

          {/* Terre avec textures (Suspense pendant le chargement) */}
          <Suspense fallback={null}>
            <EarthScene
              mode={mode}
              phiRef={phiRef}
              targetPhiRef={targetPhiRef}
              isDraggingRef={isDraggingRef}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Toggle + hint */}
      <div className="mt-5 flex flex-col items-center gap-3">
        <ModeToggle mode={mode} onChange={handleModeChange} />
        {!hasInteracted && (
          <p className="text-[10px] text-white/30 tracking-[0.25em] uppercase">
            Glissez pour explorer
          </p>
        )}
      </div>
    </div>
  );
}

// ── Toggle élégant ─────────────────────────────────────────────────────────
function ModeToggle({ mode, onChange }: { mode: GlobeMode; onChange: (m: GlobeMode) => void }) {
  return (
    <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/15 shadow-lg">
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-sage-600 to-sage-400 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mode === 'import' ? 'left-1' : 'left-[calc(50%+3px)]'
        }`}
      />
      <button
        type="button"
        onClick={() => onChange('import')}
        className={`relative z-10 px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-full transition-colors duration-300 whitespace-nowrap ${
          mode === 'import' ? 'text-navy-900' : 'text-white/55 hover:text-white'
        }`}
      >
        Sourcing Afrique
      </button>
      <button
        type="button"
        onClick={() => onChange('export')}
        className={`relative z-10 px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-full transition-colors duration-300 whitespace-nowrap ${
          mode === 'export' ? 'text-navy-900' : 'text-white/55 hover:text-white'
        }`}
      >
        Export Monde
      </button>
    </div>
  );
}
