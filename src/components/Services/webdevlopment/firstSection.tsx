import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageHostLink from "../../../variable";
import ParallaxText from "../../../lib/ParallaxText";
import ScrollReveal from "../../../lib/ScrollReveal";

export default function CustomWebDevPage() {
  const dashboardImage = "anotherlaptop1.webp";

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
        text="WEB DEVELOPMENT · REACT & NEXT.JS ·"
        direction="right"
        speed={140}
        opacity={0.04}
      />

      <section
        ref={sectionRef}
        className="relative w-full h-[100vh] bg-cover bg-center flex items-center"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${ImageHostLink + dashboardImage})`,
        }}
      >
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
              background: "radial-gradient(ellipse, rgba(124,110,234,0.12) 0%, transparent 65%)",
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
              background: "radial-gradient(ellipse, rgba(124,110,234,0.08) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* Overlay to improve text readability without heavy blur */}
        <div className="w-full h-full bg-gradient-to-r from-white/80 via-white/50 to-transparent flex items-center">
          {/* Main content — Layer 3 (mid speed) */}
          <motion.div style={{ y: headY }}>
            <ScrollReveal direction="up">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl px-6 md:px-16"
              >
                {/* Decorative Line */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full origin-left" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 tracking-tight leading-snug"
                >
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
                    Web Development
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.9 }}
                  className="mt-6 text-lg md:text-xl text-gray-800 max-w-xl leading-relaxed font-light"
                >
                  Crafting{" "}
                  <motion.span
                    className="inline-block text-red-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    bespoke digital experiences
                  </motion.span>{" "}
                  with{" "}
                  <motion.span
                    className="inline-block text-red-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    refined aesthetics
                  </motion.span>{" "}
                  and{" "}
                  <motion.span
                    className="inline-block text-red-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    seamless functionality
                  </motion.span>
                  .
                </motion.p>
              </motion.div>
            </ScrollReveal>
          </motion.div>

          {/* Right background image element — Layer 2 (medium speed) */}
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              y: imageY,
              zIndex: -1,
            }}
          />
        </div>
      </section>

      <ParallaxText
        text="FAST · ACCESSIBLE · SEO-READY ·"
        direction="left"
        speed={120}
        opacity={0.04}
      />
    </>
  );
}
