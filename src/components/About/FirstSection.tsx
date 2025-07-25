import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three"
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourtSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import WhyChooseUs from "./SeventhSection";

interface FloatingParticlesProps {
  particleCount?: number;
}

function FloatingParticles({ particleCount = 100 }: FloatingParticlesProps) {
  const particlesRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const variant = Math.random();
      if (variant < 0.4) {
        col[i * 3] = 0.95 + Math.random() * 0.05;
        col[i * 3 + 1] = 0.85 + Math.random() * 0.1;
        col[i * 3 + 2] = 0.6 + Math.random() * 0.2;
      } else if (variant < 0.7) {
        col[i * 3] = 0.9 + Math.random() * 0.1;
        col[i * 3 + 1] = 0.75 + Math.random() * 0.15;
        col[i * 3 + 2] = 0.7 + Math.random() * 0.15;
      } else {
        col[i * 3] = 0.95 + Math.random() * 0.05;
        col[i * 3 + 1] = 0.95 + Math.random() * 0.05;
        col[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      }
    }

    return { positions: pos, colors: col };
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      particlesRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.03) * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="position" args={[positions, 3]} />
        <bufferAttribute attach="color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AdvancedTechScene() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      sphereRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#fdf6e3" />
      <directionalLight
        position={[15, 15, 10]}
        intensity={0.8}
        color="#fff8dc"
      />
      <pointLight position={[0, 0, 15]} intensity={1.2} color="#daa520" />
      <pointLight position={[-15, -15, -10]} intensity={0.9} color="#cd853f" />
      <pointLight position={[10, -10, 5]} intensity={0.7} color="#f4a460" />

      <mesh ref={sphereRef} position={[0, 0, -5]}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshPhysicalMaterial
          color="#d4af37"
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.4}
          wireframe
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[8, 4, -8]} rotation={[0.5, 0.3, 0]}>
        <octahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#b8860b"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      <mesh position={[-6, -3, -10]} rotation={[0.8, 0.2, 0.5]}>
        <tetrahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color="#daa520"
          metalness={0.85}
          roughness={0.15}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>

      <FloatingParticles particleCount={120} />
    </>
  );
}

export default function EnhancedProfessionalAboutUs() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <AdvancedTechScene />
            {!isMobile && (
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.2}
              />
            )}
          </Suspense>
        </Canvas>
      </div>

      <SecondSection />
      <ThirdSection />
      <FourtSection />
      <FifthSection />
      <SixthSection />
      <WhyChooseUs />
    </div>
  );
}
