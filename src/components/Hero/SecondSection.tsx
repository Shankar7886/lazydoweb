import React, { useRef } from "react";
import { motion } from "framer-motion";
import ImageHostLink from "../../variable";
import TiltCard from "../../lib/TiltCard";
import ScrollReveal from "../../lib/ScrollReveal";
import { useParallaxLayer } from "../../lib/useParallaxLayer";

interface Section {
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
}

const sections: Section[] = [
  {
    title: "Automation",
    subtitle: "Intelligent Systems",
    desc: "Enterprise-grade automation that scales with precision and adapts to complexity, delivering unparalleled efficiency.",
    icon: "⚡",
  },
  {
    title: "Analytics",
    subtitle: "Data Intelligence",
    desc: "Advanced analytics platform delivering actionable insights from complex datasets with unprecedented accuracy.",
    icon: "📊",
  },
  {
    title: "Integration",
    subtitle: "Unified Architecture",
    desc: "Seamless system integration creating cohesive enterprise infrastructure that transforms operational excellence.",
    icon: "🔗",
  },
];

const SophisticatedBusinessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { containerRef, y } = useParallaxLayer(0.3);

  return (
    <section
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-16 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Parallax decorative orb */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/15 to-purple-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Enterprise Solutions
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            </div>

            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 tracking-tight leading-tight">
              Transform with{" "}
              <motion.span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Elegance
              </motion.span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mt-4">
              Bespoke enterprise solutions crafted for organizations that demand
              exceptional results.
            </p>
          </ScrollReveal>
        </div>

        {/* Main content layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side — content items */}
          <div className="space-y-6">
            {sections.map((item, idx) => (
              <ScrollReveal key={item.title} direction="left" delay={idx * 0.12}>
                <TiltCard glareEffect>
                  <div className="glass-card rounded-2xl p-6 text-right">
                    <div className="flex items-center justify-end gap-3 mb-2">
                      <span className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: "var(--color-accent-primary)" }}>
                        {item.subtitle}
                      </span>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-sm max-w-md ml-auto">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Right side — video */}
          <ScrollReveal direction="right" delay={0.2}>
            <TiltCard>
              <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/80 to-gray-50/80 p-1.5">
                <div className="relative rounded-xl overflow-hidden">
                  <video
                    className="w-full h-auto rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  >
                    <source
                      type="video/mp4"
                      src={`${ImageHostLink}realdasboard.mp4`}
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Hover play button */}
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

                {/* Frame glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SophisticatedBusinessSection;
