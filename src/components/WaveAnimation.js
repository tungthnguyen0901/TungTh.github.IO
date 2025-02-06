import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Wave = () => {
  const lineRef = useRef();
  const time = useRef(0);

  // Create the wave effect
  useFrame(() => {
    time.current += 0.02;

    const positions = lineRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length / 3; i++) {
      const x = i * 0.1 - 10;
      positions[i * 3 + 1] = Math.sin(x + time.current) * 1.5; // Wave effect
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Create the line geometry
  const points = new Float32Array(200 * 3);
  for (let i = 0; i < 200; i++) {
    points[i * 3] = i * 0.1 - 10; // X-coordinates
    points[i * 3 + 1] = 0; // Y-coordinates (dynamic)
    points[i * 3 + 2] = 0; // Z-coordinates
  }

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={200}
          itemSize={4}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#8E44AD" linewidth={5} />
    </line>
  );
};

const GlowingParticles = () => {
  const particleRef = useRef();

  // Animate the particles
  useFrame(() => {
    particleRef.current.rotation.y += 0.002; // Rotate particles
  });

  return (
    <Points ref={particleRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <PointMaterial
        size={0.05}
        color="#9C88FF"
        opacity={0.7}
        transparent
        sizeAttenuation
      />
    </Points>
  );
};

const WaveAnimation = () => {
  return (
    <div style={{ width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 12] }}>
        <GlowingParticles />
        <Wave />
      </Canvas>
    </div>
  );
};

export default WaveAnimation;
