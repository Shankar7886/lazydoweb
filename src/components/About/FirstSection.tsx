import { motion } from "framer-motion";
import GradientMesh from "../../lib/GradientMesh";

export default function EnhancedProfessionalAboutUs() {
  return (
    <section className="relative mesh-bg w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* Animated gradient layer */}
      <GradientMesh
        colors={["var(--color-mesh-a)", "var(--color-mesh-b)", "var(--color-mesh-c)"]}
        intensity={0.7}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.35em] uppercase text-[var(--color-ink-500)] mb-6 font-light"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-8xl font-thin leading-none tracking-tight text-[var(--color-ink-900)] mb-8"
        >
          We Build{" "}
          <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-warm)]">
            Digital
          </span>
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-[var(--color-ink-500)] max-w-2xl mx-auto leading-relaxed font-light"
        >
          We craft tailored digital solutions that empower ambitious businesses
          and drive real transformation across every industry.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent"
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  );
}
