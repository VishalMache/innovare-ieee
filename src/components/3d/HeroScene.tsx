"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function ParticleField() {
  const ref = useRef<any>(null);
  
  const positions = useMemo(() => {
    const count = 3000;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // distribute in a sphere
        const r = 2 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        array[i*3] = r * Math.sin(phi) * Math.cos(theta);
        array[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        array[i*3+2] = r * Math.cos(phi);
    }
    return array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.07;
      
      // Gentle floating based on time
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#5EA3C1" // IEEE Blue
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending
        />
      </Points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 2] }} dpr={[1, 2]}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
