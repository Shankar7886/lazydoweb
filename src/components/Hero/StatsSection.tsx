import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Stats data with luxury-focused metrics
const stats = [
  { number: 150, label: "Premium Projects", suffix: "+", icon: "⟡" },
  { number: 99, label: "Client Satisfaction", suffix: "%", icon: "⟡" },
  { number: 24, label: "Concierge Support", suffix: "/7", icon: "⟡" },
  { number: 15, label: "Years Excellence", suffix: "+", icon: "⟡" }
];

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", icon }: { value: number; suffix?: string; icon: string }) {
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
        }
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
          <span className="text-rose-600 ml-1">{suffix}</span>
        </div>
        
        <motion.div
          className="absolute -top-6 -right-6 text-rose-500 text-xl opacity-70"
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
    <div className="relative py-12 px-6 bg-gradient-to-b from-stone-50 via-white to-rose-50/20 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900 to-transparent" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px),
                                 radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px)`,
               backgroundSize: '60px 60px'
             }} />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-16 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-stone-200/40 to-transparent rounded-full blur-3xl" />

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
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-rose-400 to-rose-600" />
          <span className="text-rose-600 text-xs font-medium tracking-[0.3em] uppercase">Distinction</span>
          <div className="w-8 h-px bg-gradient-to-r from-rose-600 via-rose-400 to-transparent" />
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-extralight text-neutral-800 tracking-tight leading-tight">
          Where <span className="text-rose-600 font-light italic">Excellence</span> Meets Innovation
        </h2>
      </motion.div>

      {/* Stats Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              {/* Vertical Divider - Only show between items on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
              )}

              <div className="relative px-6 py-8 text-center transition-all duration-700 group-hover:scale-105">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-stone-50/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
                
                {/* Top Decorative Line */}
                <motion.div
                  className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                />

                {/* Stat Content */}
                <div className="relative z-10">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} icon={stat.icon} />
                  
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
                  <div className="w-1 h-1 bg-rose-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Subtle Shadow on Hover */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-stone-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
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
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-stone-300" />
          <div className="w-3 h-3 border border-rose-400 rounded-full bg-white shadow-sm" />
          <div className="w-12 h-px bg-gradient-to-r from-stone-300 via-rose-300 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}