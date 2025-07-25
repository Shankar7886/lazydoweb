"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { CheckCircle } from "lucide-react";
import Tilt from "react-parallax-tilt";

const featurePoints = [
  "Smart & Streamlined Operations",
  "Built on Advanced Tech Stack",
  "Immersive Media Integration",
  "Rock-Solid Security by Default",
  "Intuitive, Cinematic UX",
  "Scalable Admin Systems",
];

function FloatingOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <Sphere args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#f43f5e"
          distort={0.4}
          speed={2}
          roughness={0.3}
        />
      </Sphere>
    </Canvas>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* 3D Orb Background */}
      <div className="absolute top-1/2 left-0 w-1/2 h-[500px] -translate-y-1/2 opacity-30 pointer-events-none">
        <FloatingOrb />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            We deliver cinematic digital platforms for the media and entertainment
            industry. With secure architecture, intuitive designs, and scalable systems —
            we make your vision future-ready.
          </p>
        </motion.div>

        {/* Right Floating Feature Cards */}
        <div className="space-y-6">
          {featurePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center space-x-4 hover:shadow-lg transition">
                  <CheckCircle className="text-red-400 w-6 h-6 shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
