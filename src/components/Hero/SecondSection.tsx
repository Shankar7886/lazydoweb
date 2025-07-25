import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ImageHostLink from "../../variable";

interface Section {
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  bgGradient: string;
  accent: string;
  icon: string;
}

const sections: Section[] = [
  {
    title: "Automation",
    subtitle: "Intelligent Systems",
    desc: "Enterprise-grade automation that scales with precision and adapts to complexity, delivering unparalleled efficiency.",
    color: "#FFD700",
    bgGradient: "from-amber-50 to-yellow-50",
    accent: "amber",
    icon: "⚡",
  },
  {
    title: "Analytics",
    subtitle: "Data Intelligence",
    desc: "Advanced analytics platform delivering actionable insights from complex datasets with unprecedented accuracy.",
    color: "#E6E6FA",
    bgGradient: "from-purple-50 to-violet-50",
    accent: "purple",
    icon: "📊",
  },
  {
    title: "Integration",
    subtitle: "Unified Architecture",
    desc: "Seamless system integration creating cohesive enterprise infrastructure that transforms operational excellence.",
    color: "#F0F8FF",
    bgGradient: "from-blue-50 to-cyan-50",
    accent: "blue",
    icon: "🔗",
  },
];

const SophisticatedBusinessSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-purple-50/20 to-blue-50/30" />

      {/* Animated gradient orbs - smaller and more subtle */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      {/* Interactive cursor effect - smaller */}
      <motion.div
        className="fixed w-64 h-64 bg-gradient-to-br from-amber-400/10 via-purple-400/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Compact header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Enterprise Solutions
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
              Transform with
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Elegance
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bespoke enterprise solutions crafted for organizations that demand
              exceptional results.
            </motion.p>
          </motion.div>
        </div>

        {/* Compact main content layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Condensed text content */}
          <div className="space-y-8">
            {sections.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="text-right">
                  <div className="text-xs uppercase tracking-[0.15em] text-amber-400 font-semibold mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm max-w-md ml-auto">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Compact video */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative group"
            >
              {/* Video container with luxury styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50 p-1.5">
                <div className="relative rounded-xl overflow-hidden">
                  <video
                    className="w-full h-auto rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  >
                    <source
                      // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      type="video/mp4"
                      src={`${ImageHostLink}realdasboard.mp4`}
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Luxury overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Compact play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.button
                      className="relative bg-white/20 backdrop-blur-md rounded-full p-4 text-white shadow-xl border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg
                        className="w-6 h-6 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Luxury frame glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              </div>

              {/* Compact floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-amber-400 to-purple-400 rounded-full blur-sm opacity-70 animate-pulse" />
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-sm opacity-70 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Compact CTA */}
      </div>
    </section>
  );
};

export default SophisticatedBusinessSection;
