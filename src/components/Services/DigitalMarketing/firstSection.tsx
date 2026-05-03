// DigitalMarketingPage.tsx
import { motion } from "framer-motion";
import GradientMesh from "../../../lib/GradientMesh";
import ThreeScene from "../../../lib/ThreeScene";
import FloatingShapes from "../../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";

export default function DigitalMarketingPage() {
  const mag = useMagneticButton();
  const goContact = useGoToContactPage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 md:px-20">
        <GradientMesh
          colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]}
          className="absolute inset-0 -z-10"
        />

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
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

          {/* Right — Three.js scene */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full md:w-1/2"
          >
            <ThreeScene style={{ height: "50vh" }}>
              <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
            </ThreeScene>
          </motion.div>
        </div>
      </section>
    </>
  );
}
