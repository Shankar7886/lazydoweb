"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { BrainCog, LineChart, Megaphone } from "lucide-react";

function LaptopModel() {
   const { scene } = useGLTF(import.meta.env.BASE_URL + "models/laptop.glb");
  return (
    <primitive
      object={scene}
      scale={9.0}
      position={[0, -0.6, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const CRM3DLaptopSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f9f9] px-4 md:px-16 py-12 overflow-hidden flex flex-col items-center">
      {/* Title */}
      <div className="text-center max-w-4xl mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          We Know CRM Inside Out
        </h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          We comprehend the nature of a business—establishing deep relationships
          with customers. That’s why progressive brands rely on our powerful CRM
          solutions to simplify and automate their operations.
        </p>
      </div>

      {/* Features + Laptop Grid */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Feature */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={featureVariants}
          className="max-w-xs text-left"
        >
          <div className="flex items-center gap-3 mb-2">
            <LineChart className="text-blue-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">
              Salesforce Automation
            </h3>
          </div>
          <p className="text-sm text-gray-600 font-light">
            Streamline operations and make confident data-driven decisions in
            real-time.
          </p>
        </motion.div>

        {/* Laptop */}
        <div className="w-full md:w-[600px] h-[400px]">
          <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Suspense fallback={null}>
              <LaptopModel />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={true} />
          </Canvas>
        </div>

        {/* Right Feature */}
        <motion.div
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={featureVariants}
          className="max-w-xs text-right"
        >
          <div className="flex items-center justify-end gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              AI-Powered CRM
            </h3>
            <BrainCog className="text-purple-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 font-light">
            Use AI like Salesforce Einstein to automate tasks and predict
            customer behavior.
          </p>
        </motion.div>
      </div>

      {/* Bottom Feature */}
      <motion.div
        custom={0.6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={featureVariants}
        className="mt-2 text-center max-w-lg"
      >
        <div className="flex justify-center items-center gap-3 mb-2">
          <Megaphone className="text-green-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">
            Marketing Automation
          </h3>
        </div>
        <p className="text-sm text-gray-600 font-light">
          Automate campaigns, launches, and notifications—customized to your
          business objectives.
        </p>
      </motion.div>
    </section>
  );
};

export default CRM3DLaptopSection;
