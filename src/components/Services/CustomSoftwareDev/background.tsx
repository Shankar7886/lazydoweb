import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo, useState } from "react";

const SubtleParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, raycaster, pointer, clock } = useThree();
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const { points, lines } = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const lines: [number, number][] = [];

    const pointCount = 70;
    for (let i = 0; i < pointCount; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 4;
      points.push(new THREE.Vector3(x, y, z));
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = points[i].distanceTo(points[j]);
        if (distance < 3.5 && Math.random() > 0.82) {
          lines.push([i, j]);
        }
      }
    }

    return { points, lines };
  }, []);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    const time = clock.getElapsedTime() * 0.5;

    points.forEach((point, index) => {
      const mesh = meshRefs.current[index];
      if (mesh) {
        mesh.position.x = point.x + Math.sin(time + index * 0.3) * 0.2;
        mesh.position.y = point.y + Math.cos(time + index * 0.5) * 0.2;
        mesh.position.z = point.z + Math.sin(time + index * 0.7) * 0.2;
      }
    });

    raycaster.setFromCamera(pointer, camera);

    let closest = null;
    let minDist = Infinity;

    lines.forEach(([i, j], index) => {
      const a = meshRefs.current[i]?.position || points[i];
      const b = meshRefs.current[j]?.position || points[j];
      const line = new THREE.Line3(a, b);
      const temp1 = new THREE.Vector3();
      const temp2 = new THREE.Vector3();

      line.closestPointToPoint(raycaster.ray.origin, true, temp1);
      raycaster.ray.closestPointToPoint(temp1, temp2);

      const dist = temp1.distanceTo(temp2);
      if (dist < 0.3 && dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    setHoveredLine(closest);
  });

  return (
    <group ref={groupRef}>
      {points.map((p, idx) => (
        <mesh
          key={`point-${idx}`}
          position={p}
          ref={(ref) => (meshRefs.current[idx] = ref)}
        >
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      ))}

      {lines.map(([i, j], index) => {
        const a = meshRefs.current[i]?.position || points[i];
        const b = meshRefs.current[j]?.position || points[j];
        const geometry = new THREE.BufferGeometry().setFromPoints([
          a.clone(),
          b.clone(),
        ]);
        const isHovered = hoveredLine === index;

        const material = new THREE.LineBasicMaterial({
          color: isHovered ? "#ff6600" : "#bbbbbb",
          transparent: true,
          opacity: isHovered ? 0.7 : 0.25,
        });

        const line = new THREE.Line(geometry, material);

        return <primitive object={line} key={`line-${index}`} />;
      })}
    </group>
  );
};
export default function WebBackground() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
        <SubtleParticles />
      </Canvas>
    </div>
  );
}
