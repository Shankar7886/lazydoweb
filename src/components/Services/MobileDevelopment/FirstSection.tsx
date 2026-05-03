import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";
import ParallaxText from "../../../lib/ParallaxText";
import ScrollReveal from "../../../lib/ScrollReveal";

export default function FirstSection() {
  const mag = useMagneticButton();
  const goContact = useGoToContactPage();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3 distinct depth layers
  const blobY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]); // slowest
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);  // medium
  const headY  = useTransform(scrollYProgress, [0, 1], ["4%",  "-4%"]);  // slightly slow

  return (
    <>
      <ParallaxText
        text="MOBILE APPS · IOS & ANDROID ·"
        direction="right"
        speed={140}
        opacity={0.04}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden pt-40 pb-16 px-6"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <GradientMesh
          colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]}
          className="absolute inset-0 -z-10"
        />

        {/* Background blobs — Layer 1 (slowest) */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            y: blobY,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: "50%",
              height: "120%",
              background: "radial-gradient(ellipse, rgba(5,150,105,0.12) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              right: "-5%",
              width: "40%",
              height: "80%",
              background: "radial-gradient(ellipse, rgba(5,150,105,0.08) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
          {/* Left Content — Layer 3 (mid speed) */}
          <motion.div style={{ y: headY }} className="w-full md:w-1/2">
            <ScrollReveal direction="up">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-left space-y-6"
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
            </ScrollReveal>
          </motion.div>

          {/* Right — Three.js scene — Layer 2 (medium speed) */}
          <motion.div style={{ y: imageY }} className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <ThreeScene style={{ height: "50vh" }}>
                <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
              </ThreeScene>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ParallaxText
        text="REACT NATIVE · CROSS PLATFORM ·"
        direction="left"
        speed={120}
        opacity={0.04}
      />
    </>
  );
}
