import  { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// Floating hexagonal pattern
function FloatingHexagonalPattern() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, linePositions, colors, originalPositions } = useMemo(() => {
    const spacing = 2;
    const rows = 8;
    const cols = 12;
    const positions: number[] = [];
    const originalPositions: number[] = [];
    const linePositions: number[] = [];
    const colors: number[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing - (cols * spacing) / 2;
        const y = row * spacing - (rows * spacing) / 2;
        const offsetX = row % 2 === 1 ? spacing / 2 : 0;
        const randomOffset = (Math.random() - 0.5) * 0.3;
        const finalX = x + offsetX + randomOffset;
        const finalY = y + randomOffset;

        positions.push(finalX, finalY, -5);
        originalPositions.push(finalX, finalY, -5);

        const distance = Math.sqrt(finalX ** 2 + finalY ** 2);
        const intensity = Math.max(0.2, 1 - distance / 8);
        colors.push(0.5 + intensity * 0.4, 0.5 + intensity * 0.4, 0.5 + intensity * 0.4);
      }
    }

    for (let i = 0; i < positions.length / 3; i++) {
      const x1 = positions[i * 3];
      const y1 = positions[i * 3 + 1];
      for (let j = i + 1; j < positions.length / 3; j++) {
        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (dist < spacing * 1.2 && Math.random() > 0.4) {
          linePositions.push(x1, y1, -5, x2, y2, -5);
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      originalPositions: new Float32Array(originalPositions),
      linePositions: new Float32Array(linePositions),
      colors: new Float32Array(colors),
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < posArray.length; i += 3) {
        const ox = originalPositions[i];
        const oy = originalPositions[i + 1];
        const dist = Math.sqrt(ox ** 2 + oy ** 2);
        const nx = dist > 0 ? ox / dist : 0;
        const ny = dist > 0 ? oy / dist : 0;
        const float = Math.sin(time * 0.3) * 2 + time * 0.5;
        const wave = Math.sin(time * 0.5 + i * 0.1) * 0.5;

        posArray[i] = ox + nx * float;
        posArray[i + 1] = oy + ny * float;
        posArray[i + 2] = -5 + wave;
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.z = time * 0.01;
    }

    if (linesRef.current) {
      const posArray = linesRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < posArray.length; i += 6) {
        const index1 = Math.floor(i / 6) * 2;
        const index2 = index1 + 1;

        if (index2 < originalPositions.length / 3) {
          const [ox1, oy1] = [originalPositions[index1 * 3], originalPositions[index1 * 3 + 1]];
          const [ox2, oy2] = [originalPositions[index2 * 3], originalPositions[index2 * 3 + 1]];
          const d1 = Math.sqrt(ox1 ** 2 + oy1 ** 2);
          const d2 = Math.sqrt(ox2 ** 2 + oy2 ** 2);
          const [nx1, ny1] = d1 > 0 ? [ox1 / d1, oy1 / d1] : [0, 0];
          const [nx2, ny2] = d2 > 0 ? [ox2 / d2, oy2 / d2] : [0, 0];
          const float = Math.sin(time * 0.3) * 2 + time * 0.5;

          posArray[i] = ox1 + nx1 * float;
          posArray[i + 1] = oy1 + ny1 * float;
          posArray[i + 3] = ox2 + nx2 * float;
          posArray[i + 4] = oy2 + ny2 * float;
        }
      }

      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.rotation.z = time * 0.01;
    }
  });

  return (
    <group>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#d1d5db" transparent opacity={0.25} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation={false}
        />
      </points>
    </group>
  );
}

// Floating geometric accents
function FloatingGeometricAccents() {
  const groupRef = useRef<THREE.Group>(null);

  const elements = useMemo(() => [
    { position: [-2, 1.5, -3], type: "ring", scale: 0.6, originalPos: [-2, 1.5, -3] },
    { position: [2.5, -0.5, -4], type: "diamond", scale: 0.4, originalPos: [2.5, -0.5, -4] },
    { position: [-1.5, -2, -2], type: "triangle", scale: 0.5, originalPos: [-1.5, -2, -2] },
    { position: [2, 2, -5], type: "ring", scale: 0.3, originalPos: [2, 2, -5] },
    { position: [0, -3, -3], type: "diamond", scale: 0.5, originalPos: [0, -3, -3] },
    { position: [-3, 0, -4], type: "triangle", scale: 0.4, originalPos: [-3, 0, -4] },
  ], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const el = elements[i];
        const [ox, oy, oz] = el.originalPos;
        const dist = Math.sqrt(ox ** 2 + oy ** 2);
        const nx = dist > 0 ? ox / dist : 0;
        const ny = dist > 0 ? oy / dist : 0;
        const float = Math.sin(t * 0.2 + i * 0.5) * 3 + t * 0.3;
        const bob = Math.sin(t * 0.4 + i * 0.8) * 0.3;

        child.position.set(ox + nx * float, oy + ny * float + bob, oz + Math.sin(t * 0.3 + i) * 0.5);
        child.rotation.set(t * (0.03 + i * 0.005), 0, t * (0.05 + i * 0.01));

        const fade = Math.sqrt(child.position.x ** 2 + child.position.y ** 2);

        // ✅ Safe material access using type guard
        if ((child as THREE.Mesh).material) {
          const mat = (child as THREE.Mesh).material as THREE.Material;
          mat.opacity = Math.max(0.1, 0.25 - fade * 0.01);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {elements.map((el, i) => (
       <mesh key={i} position={el.originalPos as [number, number, number]} scale={el.scale}>
          {el.type === "ring" && <torusGeometry args={[1, 0.1, 8, 16]} />}
          {el.type === "diamond" && <octahedronGeometry args={[0.8]} />}
          {el.type === "triangle" && <tetrahedronGeometry args={[0.6]} />}
          <meshBasicMaterial color="#9ca3af" transparent opacity={0.25} wireframe={el.type === "ring"} />
        </mesh>
      ))}
    </group>
  );
}

// Final export
export default function FloatingWhiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.2} />
        <FloatingHexagonalPattern />
        <FloatingGeometricAccents />
        <Environment preset="studio" />
      </Canvas>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gray-300/40 rounded-tl-sm z-10" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-gray-300/40 rounded-tr-sm z-10" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-gray-300/40 rounded-bl-sm z-10" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gray-300/40 rounded-br-sm z-10" />
    </div>
  );
}
