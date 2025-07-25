import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo, useState } from "react";

const GridFlowParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, raycaster, pointer, clock } = useThree();
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const { gridPoints, gridLines, flowingDots } = useMemo(() => {
    const gridPoints: THREE.Vector3[] = [];
    const gridLines: [number, number][] = [];
    const flowingDots: { 
      lineIndex: number; 
      progress: number; 
      speed: number; 
      id: number;
    }[] = [];

    // Create a beautiful hexagonal-inspired grid pattern
    const rows = 7;
    const cols = 9;
    const spacing = 0.8;
    const pointMap = new Map<string, number>();

    let pointIndex = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Create hexagonal offset pattern for more organic look
        const offsetX = (row % 2) * spacing * 0.5;
        const x = (col - (cols - 1) / 2) * spacing + offsetX;
        const y = (row - (rows - 1) / 2) * spacing * 0.8;
        const z = Math.sin(row * 0.5) * Math.cos(col * 0.5) * 0.1; // Subtle depth variation
        
        const point = new THREE.Vector3(x, y, z);
        gridPoints.push(point);
        pointMap.set(`${row},${col}`, pointIndex);
        pointIndex++;
      }
    }

    // Create connections with some organic randomness
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const currentIndex = pointMap.get(`${row},${col}`);
        
        if (currentIndex !== undefined) {
          // Horizontal connections
          if (col < cols - 1) {
            const rightIndex = pointMap.get(`${row},${col + 1}`);
            if (rightIndex !== undefined && Math.random() > 0.1) {
              gridLines.push([currentIndex, rightIndex]);
            }
          }
          
          // Vertical connections
          if (row < rows - 1) {
            const bottomIndex = pointMap.get(`${row + 1},${col}`);
            if (bottomIndex !== undefined && Math.random() > 0.1) {
              gridLines.push([currentIndex, bottomIndex]);
            }
          }
          
          // Diagonal connections for hexagonal feel (only some)
          if (row < rows - 1 && col < cols - 1 && Math.random() > 0.7) {
            const diagonalIndex = pointMap.get(`${row + 1},${col + 1}`);
            if (diagonalIndex !== undefined) {
              gridLines.push([currentIndex, diagonalIndex]);
            }
          }
        }
      }
    }

    // Create flowing dots with varied characteristics
    const dotCount = 12;
    for (let i = 0; i < dotCount; i++) {
      flowingDots.push({
        lineIndex: Math.floor(Math.random() * gridLines.length),
        progress: Math.random(),
        speed: 0.15 + Math.random() * 0.3,
        id: i
      });
    }

    return { gridPoints, gridLines, flowingDots };
  }, []);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const flowingDotRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [dots, setDots] = useState(flowingDots);

  useFrame(() => {
    const time = clock.getElapsedTime();

    // Gentle breathing animation for grid points
    gridPoints.forEach((point, index) => {
      const mesh = meshRefs.current[index];
      if (mesh) {
        const breathe = Math.sin(time * 0.4 + index * 0.1) * 0.03;
        mesh.position.x = point.x + Math.sin(time * 0.2 + index * 0.05) * 0.01;
        mesh.position.y = point.y + Math.cos(time * 0.15 + index * 0.08) * 0.01;
        mesh.position.z = point.z + breathe;
      }
    });

    // Update flowing dots with smooth transitions
    setDots(prevDots => 
      prevDots.map(dot => {
        let newProgress = dot.progress + dot.speed * 0.006;
        let newLineIndex = dot.lineIndex;
        
        if (newProgress >= 1) {
          newProgress = 0;
          const currentLine = gridLines[dot.lineIndex];
          const endPointIndex = currentLine[1];
          
          const connectedLines = gridLines
            .map((line, index) => ({ line, index }))
            .filter(({ line }) => line[0] === endPointIndex);
          
          if (connectedLines.length > 0 && Math.random() > 0.3) {
            newLineIndex = connectedLines[Math.floor(Math.random() * connectedLines.length)].index;
          } else {
            newLineIndex = Math.floor(Math.random() * gridLines.length);
          }
        }
        
        return {
          ...dot,
          progress: newProgress,
          lineIndex: newLineIndex
        };
      })
    );

    // Update flowing dot positions with smooth interpolation
    dots.forEach((dot, index) => {
      const mesh = flowingDotRefs.current[index];
      if (mesh && gridLines[dot.lineIndex]) {
        const [startIdx, endIdx] = gridLines[dot.lineIndex];
        const startPoint = meshRefs.current[startIdx]?.position || gridPoints[startIdx];
        const endPoint = meshRefs.current[endIdx]?.position || gridPoints[endIdx];
        
        if (startPoint && endPoint) {
          // Smooth curve interpolation
          const t = dot.progress;
          const smoothT = t * t * (3 - 2 * t); // Smoothstep function
          mesh.position.lerpVectors(startPoint, endPoint, smoothT);
          
          // Add subtle floating effect
          mesh.position.y += Math.sin(clock.getElapsedTime() * 2 + dot.id) * 0.02;
        }
      }
    });

    // Refined hover detection
    raycaster.setFromCamera(pointer, camera);
    let closest = null;
    let minDist = Infinity;

    gridLines.forEach(([i, j], index) => {
      const a = meshRefs.current[i]?.position || gridPoints[i];
      const b = meshRefs.current[j]?.position || gridPoints[j];
      const line = new THREE.Line3(a, b);
      const temp1 = new THREE.Vector3();
      const temp2 = new THREE.Vector3();

      line.closestPointToPoint(raycaster.ray.origin, true, temp1);
      raycaster.ray.closestPointToPoint(temp1, temp2);

      const dist = temp1.distanceTo(temp2);
      if (dist < 0.12 && dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    setHoveredLine(closest);
  });

  return (
    <group ref={groupRef}>
      {/* Grid points with varied sizes */}
      {gridPoints.map((p, idx) => {
        const size = 0.012 + Math.random() * 0.008; // Varied sizes for organic feel
        return (
          <mesh
            key={`grid-point-${idx}`}
            position={p}
            ref={(ref) => (meshRefs.current[idx] = ref)}
          >
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial 
              color="#f3f4f6" 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        );
      })}

      {/* Grid lines with elegant styling */}
      {gridLines.map(([i, j], index) => {
        const a = meshRefs.current[i]?.position || gridPoints[i];
        const b = meshRefs.current[j]?.position || gridPoints[j];
        const geometry = new THREE.BufferGeometry().setFromPoints([
          a.clone(),
          b.clone(),
        ]);
        const isHovered = hoveredLine === index;

        const material = new THREE.LineBasicMaterial({
          color: isHovered ? "#6366f1" : "#e5e7eb",
          transparent: true,
          opacity: isHovered ? 0.8 : 0.2,
        });

        const line = new THREE.Line(geometry, material);
        return <primitive object={line} key={`grid-line-${index}`} />;
      })}

      {/* Flowing dots with elegant glow effect */}
      {dots.map((dot, index) => (
        <group key={`flowing-dot-group-${dot.id}`}>
          {/* Main dot */}
          <mesh
            ref={(ref) => (flowingDotRefs.current[index] = ref)}
          >
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshBasicMaterial 
              color="#4b5563" 
              transparent 
              opacity={0.9}
            />
          </mesh>
          {/* Subtle glow effect */}
          <mesh
            position={flowingDotRefs.current[index]?.position}
          >
            <sphereGeometry args={[0.045, 8, 8]} />
            <meshBasicMaterial 
              color="#6b7280" 
              transparent 
              opacity={0.1}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default function GridFlowBackground() {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <GridFlowParticles />
      </Canvas>
    </div>
  );
}