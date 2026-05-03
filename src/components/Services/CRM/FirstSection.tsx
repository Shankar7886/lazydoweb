import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";
import ParallaxText from "../../../lib/ParallaxText";

const HeroSection = () => {
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
      <ParallaxText text="CRM & DMS · WORKFLOW AUTOMATION ·" direction="right" speed={140} opacity={0.04} />

      <section ref={sectionRef} style={{ position: "relative", overflow: "hidden" }} className="w-full min-h-screen">
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
                left: "60%",
                width: "40vw",
                height: "40vw",
                borderRadius: "50%",
                background: "rgba(8,145,178,0.12)",
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
                background: "rgba(8,145,178,0.08)",
                filter: "blur(60px)",
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 xl:px-24">
          {/* Left Side — layer 2 heading parallax */}
          <div style={{ overflow: "hidden", width: "100%" }} className="lg:w-1/2">
            <motion.div
              className="w-full space-y-8"
              style={{ y: headY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="w-2 h-2 rounded-full mr-3 animate-pulse"
                  style={{ background: "var(--color-accent-primary)" }}
                />
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  Premium CRM Solutions
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-5xl md:text-6xl font-thin text-gray-900 tracking-tight leading-none">
                  CRM Software
                </span>
                <span
                  className="block text-5xl md:text-6xl font-extralight bg-clip-text text-transparent tracking-tight leading-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                  }}
                >
                  Development
                </span>
                <span className="block text-3xl md:text-5xl font-thin text-gray-600 tracking-wider mt-4">
                  Services
                </span>
              </motion.h1>

              <motion.p
                className="text-xl font-light text-gray-600 leading-relaxed max-w-lg tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We craft bespoke CRM solutions that elevate your business operations
                with{" "}
                <span className="text-gray-800 font-normal">unparalleled precision</span>{" "}
                and{" "}
                <span className="text-gray-800 font-normal">sophisticated design</span>.
              </motion.p>

              <motion.button
                ref={mag.ref as RefObject<HTMLButtonElement>}
                style={{ x: mag.x, y: mag.y, background: "var(--color-accent-primary)" }}
                data-cursor="hover"
                onClick={goContact}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Build Your CRM
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Three.js scene — layer 3 (medium parallax) */}
          <div style={{ overflow: "hidden" }} className="hidden lg:flex w-1/2 justify-end items-center">
            <motion.div
              className="w-full flex justify-end items-center"
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <ThreeScene style={{ height: "50vh" }} className="w-full">
                <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
              </ThreeScene>
            </motion.div>
          </div>
        </div>
      </section>

      <ParallaxText text="RELATIONSHIPS · DOCUMENTS · DATA ·" direction="left" speed={120} opacity={0.04} />
    </>
  );
};

export default HeroSection;
