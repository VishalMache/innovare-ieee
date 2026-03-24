"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture, Stars, Float, Environment } from "@react-three/drei";

function ParticleWave() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const gridSize = 140; 
  const spacing = 0.45;  
  const count = gridSize * gridSize;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color = new THREE.Color();
    let i = 0;
    for (let ix = 0; ix < gridSize; ix++) {
      for (let iz = 0; iz < gridSize; iz++) {
        const x = (ix - gridSize / 2) * spacing;
        const z = (iz - gridSize / 2) * spacing;
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0; 
        positions[i * 3 + 2] = z;

        const dist = Math.sqrt(x * x + z * z);
        const maxDist = (gridSize * spacing) / 2;
        const normalizedDist = Math.min(dist / maxDist, 1);
        
        color.setHSL(0.58, 0.9, 1.0 - normalizedDist * 0.7);
        
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        i++;
      }
    }
    return [positions, colors];
  }, [count, gridSize, spacing]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let ix = 0; ix < gridSize; ix++) {
      for (let iz = 0; gridSize > iz; iz++) {
        const x = (ix - gridSize / 2) * spacing;
        const z = (iz - gridSize / 2) * spacing;
        
        const waveX = Math.sin(x * 0.3 + time * 0.8) * 1.5;
        const waveZ = Math.cos(z * 0.2 + time * 0.5) * 1.5;
        const waveCombined = Math.sin(x * 0.1 + z * 0.1 + time) * 1.2;
        
        positions[i * 3 + 1] = waveX + waveZ + waveCombined - (z * 0.1); 
        
        i++;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = Math.sin(time * 0.05) * 0.05;
  });

  return (
    <points ref={pointsRef} position={[0, -8, -5]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 6, 25], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]} 
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <ambientLight intensity={0.5} />
          
          <ParticleWave />
        </Suspense>
        
        <fog attach="fog" args={["#01080f", 20, 60]} />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />
    </div>
  );
}
