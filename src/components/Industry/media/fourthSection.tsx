"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import Tilt from "react-parallax-tilt";

const features = [
  {
    title: "Content That Moves",
    description:
      "Through rich industry collaborations, we create media platforms based on responsive user experiences, robust content distribution networks, and seamless, scalable performance.",
  },
  {
    title: "Built for Growth",
    description:
      "Our scalable applications expand with your user base. Supported by experienced IT professionals, we provide regular maintenance and assistance to ensure that your app is up-to-date and high-performance.",
  },
  {
    title: "Crafted with Vision and Value",
    description:
      "Lazy Do incorporates years of experience in development in enabling us to develop innovative and affordable apps to support your business scale efficiently.",
  },
];

export default function CoreExpertiseSection() {
  return (
    <section className="relative bg-white py-28 px-6 md:px-10 overflow-hidden">
      {/* Glow Blob Backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-50 blur-3xl rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-yellow-50 blur-3xl rounded-full opacity-30 -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-semibold text-gray-900"
        >
          Core Expertise in Our{" "}
          <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Entertainment App Development
          </span>{" "}
          Services
        </motion.h2>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.1}
                scale={1.01}
                transitionSpeed={1500}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
              >
                <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 text-left hover:shadow-2xl transition duration-300 ease-in-out h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <Sparkle className="text-rose-500 w-5 h-5" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
