import { motion } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";

export default function FirstSection() {
  const mag = useMagneticButton();
  const goContact = useGoToContactPage();

  return (
    <section className="relative overflow-hidden pt-40 pb-16 px-6">
      <GradientMesh
        colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent rounded-full" />

          <h1 className="text-5xl md:text-6xl font-thin text-neutral-900 tracking-tight leading-tight">
            Mobile{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-warm)] to-[var(--color-accent-primary)] bg-clip-text text-transparent">
              Application
            </span>{" "}
            Development
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-lg">
            A fast-growing IT company that provides holistic IT solutions to
            businesses across geographies — delivering{" "}
            <span style={{ color: "var(--color-accent-primary)" }}>elegant mobile apps</span> with{" "}
            <span style={{ color: "var(--color-accent-warm)" }}>intuitive UX</span> and{" "}
            robust performance.
          </p>

          <motion.button
            ref={mag.ref as RefObject<HTMLButtonElement>}
            style={{ x: mag.x, y: mag.y, background: "var(--color-accent-primary)" }}
            data-cursor="hover"
            onClick={goContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right — Three.js scene */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <ThreeScene style={{ height: "50vh" }}>
            <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
          </ThreeScene>
        </motion.div>
      </div>
    </section>
  );
}
