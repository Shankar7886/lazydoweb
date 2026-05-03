import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TiltCard from "../../lib/TiltCard";

// Stats data with luxury-focused metrics
const stats = [
  { number: 150, label: "Premium Projects", suffix: "+", icon: "⟡" },
  { number: 99, label: "Client Satisfaction", suffix: "%", icon: "⟡" },
  { number: 24, label: "Concierge Support", suffix: "/7", icon: "⟡" },
  { number: 15, label: "Years Excellence", suffix: "+", icon: "⟡" },
];

// Animated Counter Component
function AnimatedCounter({
  value,
  suffix = "",
  icon,
}: {
  value: number;
  suffix?: string;
  icon: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <motion.div
        className="relative mb-3"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="text-4xl md:text-5xl font-thin text-neutral-800 tracking-tight">
          {displayValue}
          <span className="ml-1" style={{ color: "var(--color-accent-primary)" }}>
            {suffix}
          </span>
        </div>

        <motion.div
          className="absolute -top-6 -right-6 text-xl opacity-70"
          style={{ color: "var(--color-accent-primary)" }}
          initial={{ rotate: -45, opacity: 0 }}
          animate={inView ? { rotate: 0, opacity: 0.7 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Main Section
export default function LuxuryStatsSection() {
  return (
    <div className="mesh-bg relative py-12 px-6 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-4 mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div
            className="w-8 h-px bg-gradient-to-r from-transparent"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-accent-warm), var(--color-accent-primary))",
            }}
          />
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: "var(--color-accent-primary)" }}
          >
            Distinction
          </span>
          <div
            className="w-8 h-px"
            style={{
              background:
                "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm), transparent)",
            }}
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-extralight text-neutral-800 tracking-tight leading-tight">
          Where{" "}
          <span
            className="font-light italic"
            style={{ color: "var(--color-accent-primary)" }}
          >
            Excellence
          </span>{" "}
          Meets Innovation
        </h2>
      </motion.div>

      {/* Stats Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              {/* Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
              )}

              <TiltCard glareEffect>
                <div className="glass-card rounded-2xl p-8 text-center w-full">
                  {/* Top Decorative Line */}
                  <motion.div
                    className="w-12 h-px mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, var(--color-accent-warm), transparent)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />

                  {/* Stat Content */}
                  <div className="relative z-10">
                    <AnimatedCounter
                      value={stat.number}
                      suffix={stat.suffix}
                      icon={stat.icon}
                    />

                    <motion.div
                      className="mt-3 text-neutral-600 font-light text-sm md:text-base tracking-wide"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>

                  {/* Bottom Decorative Element */}
                  <motion.div
                    className="mt-4 flex justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    <div
                      className="w-1 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: "var(--color-accent-warm)" }}
                    />
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Signature Element */}
      <motion.div
        className="flex justify-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="flex items-center gap-6">
          <div
            className="w-12 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-accent-warm), var(--color-accent-gold))",
            }}
          />
          <div
            className="w-3 h-3 border rounded-full bg-white shadow-sm"
            style={{ borderColor: "var(--color-accent-warm)" }}
          />
          <div
            className="w-12 h-px"
            style={{
              background:
                "linear-gradient(to right, var(--color-accent-gold), var(--color-accent-warm), transparent)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
