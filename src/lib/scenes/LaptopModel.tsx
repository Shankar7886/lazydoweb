import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

interface LaptopModelProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

useGLTF.preload("/models/laptop.glb");

export default function LaptopModel({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0.3, 0],
}: LaptopModelProps) {
  const { scene } = useGLTF("/models/laptop.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      <Environment preset="studio" />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group
          ref={groupRef}
          position={position}
          scale={scale}
          rotation={rotation}
        >
          <primitive object={scene.clone()} />
        </group>
      </Float>
    </>
  );
}
