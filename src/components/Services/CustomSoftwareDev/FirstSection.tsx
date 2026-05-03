import { motion } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import useGoToContactPage from "../../Contact/contactFn";

const stats = [
  { label: "Projects Delivered", value: "200+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Years of Experience", value: "10+" },
];

export default function CustomWebDevFirstSection() {
  const goContact = useGoToContactPage();
  const { ref: btnRef, x: btnX, y: btnY } = useMagneticButton();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-24 pb-16 px-6">
      {/* Animated gradient background */}
      <GradientMesh
        colors={["rgba(200,57,43,0.18)", "rgba(200,57,43,0.08)", "rgba(184,151,58,0.12)"]}
        intensity={0.9}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/30 shadow-sm"
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--color-accent-primary)" }}
            />
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Premium Software Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-thin text-gray-900 tracking-tight leading-tight"
          >
            Custom{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-warm))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web Development
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-lg"
          >
            Crafting{" "}
            <span style={{ color: "var(--color-accent-primary)" }}>bespoke digital experiences</span>{" "}
            with <span style={{ color: "var(--color-accent-warm)" }}>refined aesthetics</span> and
            seamless functionality—engineered for startups to enterprises.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              ref={btnRef as React.RefObject<HTMLButtonElement>}
              data-cursor="hover"
              onClick={goContact}
              className="px-8 py-4 rounded-full font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-warm))",
                x: btnX,
                y: btnY,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right — 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <ThreeScene style={{ height: "60vh" }}>
            <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
          </ThreeScene>

          {/* Floating stat cards */}
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-xl p-4 absolute shadow-lg"
              style={{
                top: i === 0 ? "10%" : i === 1 ? "45%" : "78%",
                left: i === 1 ? "-8%" : "auto",
                right: i !== 1 ? "-2%" : "auto",
                minWidth: "140px",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
            >
              <p
                className="text-2xl font-semibold"
                style={{ color: "var(--color-accent-primary)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
