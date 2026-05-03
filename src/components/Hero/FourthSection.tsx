import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import ScrollReveal from "../../lib/ScrollReveal";
import GradientMesh from "../../lib/GradientMesh";

const processSteps = [
  {
    title: "Discovery & Planning",
    subtitle:
      "Strategic analysis and comprehensive planning to align technology solutions with your business objectives.",
    number: "01",
    color: "#8B5CF6",
    accent: "#A855F7",
  },
  {
    title: "Creative & UX Design",
    subtitle:
      "Sophisticated design systems that elevate your brand while delivering exceptional user experiences.",
    number: "02",
    color: "#EC4899",
    accent: "#F472B6",
  },
  {
    title: "Development & Execution",
    subtitle:
      "Cutting-edge development using modern frameworks, ensuring scalability and peak performance.",
    number: "03",
    color: "#06B6D4",
    accent: "#22D3EE",
  },
  {
    title: "Testing & Optimization",
    subtitle:
      "Rigorous quality assurance and performance optimization for flawless user experiences.",
    number: "04",
    color: "#10B981",
    accent: "#34D399",
  },
  {
    title: "Launch & Support",
    subtitle:
      "Seamless deployment with ongoing support and optimization to ensure sustained excellence.",
    number: "05",
    color: "#F59E0B",
    accent: "#FBBF24",
  },
  {
    title: "Continuous Improvement",
    subtitle:
      "Ongoing evaluation and enhancement to keep your solutions ahead of the curve.",
    number: "06",
    color: "#EF4444",
    accent: "#F87171",
  },
];

const TITLES = [
  "Streamlined Process",
  "Seamless Delivery",
  "Effortless Workflow",
  "Optimized Solutions",
  "Smooth Execution",
  "Continuous Excellence",
];

const sequence = TITLES.flatMap((title) => [title, 2000]);

type ProcessStepProps = {
  step: (typeof processSteps)[number];
  index: number;
};

function ProcessStep({ step, index }: ProcessStepProps) {
  const [isHovered, setIsHovered] = useState(false);
  const circleRef = useRef(null);
  const inView = useInView(circleRef, { once: false });

  return (
    <ScrollReveal direction="left" delay={index * 0.08}>
      <div className="relative">
        {/* Connecting Line */}
        {index < processSteps.length - 1 && (
          <div className="absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-200 to-gray-100 z-0" />
        )}

        <div
          className="flex items-start space-x-8 py-12 px-8 hover:bg-white/30 transition-all duration-500 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Number Circle */}
          <div className="relative z-10" ref={circleRef}>
            <motion.div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-lg"
              style={{ borderColor: step.color }}
              animate={{
                boxShadow: inView
                  ? [
                      "0 0 0px var(--color-accent-primary)",
                      "0 0 20px var(--color-accent-primary)",
                      "0 0 0px var(--color-accent-primary)",
                    ]
                  : "none",
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl font-light" style={{ color: step.color }}>
                {step.number}
              </span>
            </motion.div>

            {/* Sparkle Effect */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={16} style={{ color: step.accent }} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.h3
              className="text-3xl font-light mb-4 text-gray-800"
              style={{
                color: isHovered ? step.color : "#1f2937",
                textShadow: isHovered ? `0 0 20px ${step.color}30` : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              {step.title}
            </motion.h3>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {step.subtitle}
            </p>

            {/* Accent Line */}
            <motion.div
              className="w-16 h-0.5 mt-6 rounded-full"
              style={{ backgroundColor: step.color }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
            />
          </div>

          {/* Arrow */}
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 4 }}
          >
            <ArrowUpRight size={24} style={{ color: step.color }} />
          </motion.div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function LuxuryLightProcess() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 px-4">
      <GradientMesh colors={["#fde8e1", "#e8e6ff", "#fef3cd"]} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center mb-6 text-gray-500 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen size={24} className="mr-3" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase">
              Our Luxury Process
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-thin mb-8 tracking-tight bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4, #10B981, #F59E0B, #EF4444)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={50}
            />
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience our meticulously crafted workflow designed to transform
            your vision into exceptional digital experiences with unparalleled
            attention to detail.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, idx) => (
            <ProcessStep key={idx} step={step} index={idx} />
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto" />
          <p className="text-gray-500 mt-6 text-sm tracking-wide">
            CRAFTED WITH PRECISION • DELIVERED WITH EXCELLENCE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
