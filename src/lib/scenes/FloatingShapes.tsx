import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapesProps {
  primaryColor?: string;
  wireframe?: boolean;
}

function Shape({
  geometry,
  position,
  color,
  wireframe,
  speed,
  rotationAxis,
}: {
  geometry: "icosahedron" | "octahedron" | "torus";
  position: [number, number, number];
  color: string;
  wireframe: boolean;
  speed: number;
  rotationAxis: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * rotationAxis[0];
      meshRef.current.rotation.y += delta * speed * rotationAxis[1];
      meshRef.current.rotation.z += delta * speed * rotationAxis[2];
    }
  });

  const mat = (
    <meshPhysicalMaterial
      color={color}
      metalness={0.6}
      roughness={0.2}
      transparent
      opacity={wireframe ? 1 : 0.75}
      wireframe={wireframe}
    />
  );

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1.2, 0]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1.0, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.9, 0.35, 16, 32]} />}
        {mat}
      </mesh>
    </Float>
  );
}

export default function FloatingShapes({
  primaryColor = "#c8392b",
  wireframe = false,
}: FloatingShapesProps) {
  return (
    <>
      <Shape
        geometry="icosahedron"
        position={[-2.5, 0.5, 0]}
        color={primaryColor}
        wireframe={wireframe}
        speed={0.4}
        rotationAxis={[0.3, 1, 0.2]}
      />
      <Shape
        geometry="octahedron"
        position={[2.5, -0.5, -1]}
        color="#b8973a"
        wireframe={wireframe}
        speed={0.35}
        rotationAxis={[0.5, 0.3, 1]}
      />
      <Shape
        geometry="torus"
        position={[0, 1.5, -2]}
        color="#7c6eea"
        wireframe={wireframe}
        speed={0.25}
        rotationAxis={[1, 0.5, 0.3]}
      />
    </>
  );
}
