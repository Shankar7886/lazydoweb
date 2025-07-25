import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MousePosition {
  x: number;
  y: number;
}

// Luxury floating particles component
function FloatingParticles({ mousePosition }: { mousePosition: MousePosition }) {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 150;

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(time * 0.5 + i * 0.1) * 0.01;
        positions[i3 + 1] += Math.cos(time * 0.3 + i * 0.05) * 0.008;
        positions[i3 + 2] += Math.sin(time * 0.7 + i * 0.2) * 0.005;

        const mouseInfluence = 0.02;
        positions[i3] += mousePosition.x * mouseInfluence * Math.sin(i * 0.1);
        positions[i3 + 1] += mousePosition.y * mouseInfluence * Math.cos(i * 0.1);
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particlePositions = new Float32Array(particleCount * 3);
  const particleSizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 50;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    particleSizes[i] = Math.random() * 0.8 + 0.2;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
    attach="attributes-position"
    args={[particlePositions, 3]}
  />
        <primitive
  attach="attributes-position"
  object={new THREE.BufferAttribute(particlePositions, 3)}
/>
<primitive
  attach="attributes-size"
  object={new THREE.BufferAttribute(particleSizes, 1)}
/>
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation
        color="#d4af37"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Luxury orb component
function LuxuryOrb({ mousePosition }: { mousePosition: MousePosition }) {
  const orbRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      const time = state.clock.elapsedTime;
      orbRef.current.rotation.y = time * 0.3;
      orbRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;

      orbRef.current.position.x = mousePosition.x * 2;
      orbRef.current.position.y = mousePosition.y * 1.5;
    }
  });

  return (
    <mesh ref={orbRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.1}
        roughness={0.1}
        transparent
        opacity={0.15}
        transmission={0.9}
        thickness={0.5}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );
}

// Animated rings component
function AnimatedRings({ mousePosition }: { mousePosition: MousePosition }) {
  const ringsRef = useRef<THREE.Group>(null);
  console.error(mousePosition)
  useFrame((state) => {
    if (ringsRef.current) {
      const time = state.clock.elapsedTime;
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.z = time * (0.2 + index * 0.1);
        ring.rotation.x = Math.sin(time * 0.3) * 0.2;
        ring.scale.setScalar(1 + Math.sin(time * 0.5 + index) * 0.1);
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, 0, -i * 2]}>
          <ringGeometry args={[3 + i * 1.5, 3.2 + i * 1.5, 64]} />
          <meshBasicMaterial
            color={i === 0 ? "#d4af37" : i === 1 ? "#c0c0c0" : "#ffffff"}
            transparent
            opacity={0.3 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function LuxuryInteractiveScene() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0  from-slate-50 via-gray-100 to-stone-200" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform rotate-45 translate-x-full animate-pulse"
          style={{ animationDuration: "8s" }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-300 to-transparent transform -rotate-45 -translate-x-full animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-60 animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `scale(${0.5 + Math.random() * 1})`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-[0.08]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-yellow-600 animate-spin"
            style={{
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              width: `${20 + i * 4}px`,
              height: `${20 + i * 4}px`,
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0" : "20%",
              transform: `rotate(${i * 60}deg)`,
              animationDuration: `${15 + i * 3}s`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
              borderStyle: i % 2 === 0 ? "solid" : "dashed",
            }}
          />
        ))}
      </div>

      <div
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-current to-transparent transition-all duration-500 blur-sm"
        style={{
          left: `${(mousePosition.x + 1) * 50}%`,
          color: "#d4af37",
          opacity: 0.4 + Math.abs(mousePosition.x) * 0.3,
          boxShadow: "0 0 20px #d4af37",
        }}
      />
      <div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500 blur-sm"
        style={{
          top: `${(-mousePosition.y + 1) * 50}%`,
          color: "#c0c0c0",
          opacity: 0.3 + Math.abs(mousePosition.y) * 0.4,
          boxShadow: "0 0 15px #c0c0c0",
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 25], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        style={{ background: "transparent" }}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
      >
        <ambientLight intensity={0.4} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <spotLight
          position={[mousePosition.x * 12, mousePosition.y * 12, 20]}
          intensity={1.2}
          angle={0.6}
          penumbra={1}
          color="#d4af37"
        />
        <pointLight
          position={[-mousePosition.x * 8, -mousePosition.y * 8, 10]}
          intensity={0.6}
          color="#c0c0c0"
        />

        <FloatingParticles mousePosition={mousePosition} />
        <LuxuryOrb mousePosition={mousePosition} />
        <AnimatedRings mousePosition={mousePosition} />
      </Canvas>

      <div
        className={`absolute pointer-events-none z-50 transition-all duration-300 ${isHovering ? "scale-150" : "scale-100"}`}
        
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-70 animate-pulse"
            style={{ boxShadow: "0 0 25px #d4af37" }} />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-yellow-400 opacity-40 animate-spin"
            style={{ animationDuration: "3s", transform: "translate(-16.67%, -16.67%)" }} />
          <div className="absolute inset-0 w-6 h-6 rounded-full bg-white opacity-60 transform translate-x-1 translate-y-1" />
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(-mousePosition.y + 1) * 50}%, 
            rgba(212, 175, 55, 0.3) 0%, 
            rgba(192, 192, 192, 0.2) 30%, 
            transparent 70%)`,
          transition: "all 0.6s ease-out",
        }}
      />
    </div>
  );
}
