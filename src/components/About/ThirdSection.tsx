import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  Code, Smartphone, Database, Cloud, Zap, Brain, Globe, Server,
  Cpu, Layers, Bot, Search, TrendingUp, Shield, Palette,
  Terminal, GitBranch, Camera, Settings
} from 'lucide-react';
import TiltCard from '../../lib/TiltCard';
import ScrollReveal from '../../lib/ScrollReveal';

type IconType = React.FC<{ size?: number; className?: string }>;

interface Technology {
  name: string;
  icon: IconType;
}

// Animated Circuit Background — particle color updated to accent-primary CSS var
const ACCENT_R = 200 / 255; // #c8392b
const ACCENT_G = 57 / 255;
const ACCENT_B = 43 / 255;

const Circuit: React.FC = () => {
  const meshRef = useRef<THREE.LineSegments>(null);
  const points = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const circuitGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < 500; i++) {
      vertices.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 5
      );
      // Use --color-accent-primary: #c8392b
      colors.push(ACCENT_R, ACCENT_G, ACCENT_B);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  const lineGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];

    for (let i = 0; i < 100; i++) {
      const x1 = (Math.random() - 0.5) * 15;
      const y1 = (Math.random() - 0.5) * 15;
      const x2 = x1 + (Math.random() - 0.5) * 3;
      const y2 = y1 + (Math.random() - 0.5) * 3;
      vertices.push(x1, y1, 0, x2, y2, 0);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  return (
    <>
      <points ref={points} geometry={circuitGeometry}>
        <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
      </points>
      <lineSegments ref={meshRef} geometry={lineGeometry}>
        {/* Use accent-primary hex directly for the line material */}
        <lineBasicMaterial color="#c8392b" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
};

const TechCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies: Technology[] = [
    { name: 'React', icon: Code },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Next.js', icon: Globe },
    { name: 'Vue.js', icon: Layers },
    { name: 'Angular', icon: Shield },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Bot },
    { name: 'Django', icon: Settings },
    { name: 'FastAPI', icon: Zap },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Layers },
    { name: 'Redis', icon: Cpu },
    { name: 'Docker', icon: Cloud },
    { name: 'Kubernetes', icon: Settings },
    { name: 'AWS', icon: Cloud },
    { name: 'Firebase', icon: Zap },
    { name: 'React Native', icon: Smartphone },
    { name: 'Flutter', icon: Smartphone },
    { name: 'Swift', icon: Smartphone },
    { name: 'TensorFlow', icon: Brain },
    { name: 'PyTorch', icon: Brain },
    { name: 'OpenAI', icon: Bot },
    { name: 'ChatGPT', icon: Bot },
    { name: 'Google Ads', icon: Search },
    { name: 'Facebook Ads', icon: TrendingUp },
    { name: 'SEO', icon: Search },
    { name: 'Analytics', icon: TrendingUp },
    { name: 'Figma', icon: Palette },
    { name: 'Adobe XD', icon: Palette },
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: GitBranch },
    { name: 'WebRTC', icon: Camera },
    { name: 'GraphQL', icon: Layers },
    { name: 'Stripe', icon: TrendingUp },
    { name: 'Blockchain', icon: Shield }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const extendedTechnologies = [...technologies, ...technologies, ...technologies];
  const itemWidth = 200;

  return (
    <div className="relative overflow-hidden pt-30 pb-10">
      {/* Background Canvas */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Circuit />
        </Canvas>
      </div>

      <div className="relative z-10 px-4">
        {/* Title */}
        <ScrollReveal direction="up" delay={0}>
          <motion.h2
            className="text-center text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-[var(--color-accent-primary)] bg-clip-text text-transparent">
              TECHNOLOGIES WE USED
            </span>
          </motion.h2>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="mt-8">
            <div className="overflow-hidden h-48">
              <motion.div
                className="flex items-center"
                animate={{ x: -(currentIndex * itemWidth) }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ width: `${extendedTechnologies.length * itemWidth}px` }}
              >
                {extendedTechnologies.map((tech, index) => {
                  const actualIndex = index % technologies.length;
                  const isActive = actualIndex === currentIndex;
                  const Icon = tech.icon;

                  return (
                    <TiltCard
                      key={`${tech.name}-${index}`}
                      className="flex flex-col items-center w-[200px] flex-shrink-0 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{ paddingTop: "20px" }}
                        className="flex flex-col items-center w-full"
                      >
                        <div
                          className={`glass-card w-14 h-14 flex items-center justify-center rounded-xl shadow-md transition-all duration-500
                            ${isActive
                              ? 'border border-[var(--color-accent-primary)]'
                              : 'border border-gray-200 group-hover:border-[var(--color-accent-primary)]'
                            }`}
                        >
                          <Icon
                            size={isActive ? 28 : 24}
                            className={`transition-all ${isActive
                              ? 'text-[var(--color-accent-primary)]'
                              : 'text-slate-600 group-hover:text-[var(--color-accent-primary)]'
                              }`}
                          />
                        </div>
                        <span
                          className={`mt-2 text-center transition-all duration-300 ${isActive
                            ? 'text-sm font-medium'
                            : 'text-xs text-slate-500'
                            }`}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    </TiltCard>
                  );
                })}
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center">
              <div className="flex space-x-1">
                {technologies.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-px cursor-pointer ${index === currentIndex
                      ? 'bg-[var(--color-accent-primary)] w-6'
                      : 'bg-gray-300 w-4'
                      }`}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scaleY: 2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TechCarousel;
