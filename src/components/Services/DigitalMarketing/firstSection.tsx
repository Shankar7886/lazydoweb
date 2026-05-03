// DigitalMarketingPage.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";
import ParallaxText from "../../../lib/ParallaxText";

export default function DigitalMarketingPage() {
  const mag = useMagneticButton();
  const goContact = useGoToContactPage();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);
  const headY  = useTransform(scrollYProgress, [0, 1], ["4%",  "-4%"]);

  return (
    <>
      <ParallaxText text="DIGITAL MARKETING · SEO & SEM ·" direction="right" speed={140} opacity={0.04} />

      <section ref={sectionRef} style={{ position: "relative", overflow: "hidden" }} className="py-24 px-6 md:px-20">
        <GradientMesh
          colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]}
          className="absolute inset-0 -z-10"
        />

        {/* Parallax background blobs — layer 1 (slowest) */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
          <motion.div style={{ y: blobY, position: "absolute", inset: 0 }}>
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: "40vw",
                height: "40vw",
                borderRadius: "50%",
                background: "rgba(147,51,234,0.12)",
                filter: "blur(80px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                left: "5%",
                width: "30vw",
                height: "30vw",
                borderRadius: "50%",
                background: "rgba(147,51,234,0.08)",
                filter: "blur(60px)",
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left content — layer 2 heading parallax */}
          <div style={{ overflow: "hidden" }} className="w-full md:w-1/2">
            <motion.div
              style={{ y: headY }}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-thin leading-tight">
                Accelerate Your Growth with{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                  }}
                >
                  Digital Marketing
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
                At Lazy Do, we don't merely provide digital marketing – we redefine
                your digital path. With more than a decade of background, we've
                assisted hundreds of companies to enter the top levels of search
                engines and create overwhelming online presences. From regional
                startups to industry leaders, our digital plans are created to
                achieve quantifiable expansion.
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
                Let's Elevate Your Brand
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Three.js scene — layer 3 (medium parallax) */}
          <div style={{ overflow: "hidden" }} className="w-full md:w-1/2">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <ThreeScene style={{ height: "50vh" }}>
                <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
              </ThreeScene>
            </motion.div>
          </div>
        </div>
      </section>

      <ParallaxText text="GROW · CONVERT · MEASURE ·" direction="left" speed={120} opacity={0.04} />
    </>
  );
}
