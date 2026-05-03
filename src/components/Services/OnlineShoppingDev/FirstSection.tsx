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
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <GradientMesh
        colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-thin text-gray-900 tracking-tight leading-tight -mt-2 sm:-mt-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              Online Shopping
            </span>{" "}
            App{" "}
            <span
              className="bg-clip-text text-transparent font-extralight italic"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-warm), var(--color-accent-primary))",
              }}
            >
              Development
            </span>
          </h1>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Our experienced developers build{" "}
              <span style={{ color: "var(--color-accent-primary)" }} className="font-medium">
                sophisticated platforms
              </span>{" "}
              by using high-degree of technologies to streamline your online
              business.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
              With our eCommerce solutions, we make it easy to build and run
              your online business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            {["Advanced Technology", "Expert Development", "Business Solutions"].map(
              (feat) => (
                <div key={feat} className="flex items-center justify-center lg:justify-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent-primary)" }}
                  />
                  <span className="text-sm text-gray-600 font-medium tracking-wide">
                    {feat}
                  </span>
                </div>
              )
            )}
          </div>

          <motion.button
            ref={mag.ref as RefObject<HTMLButtonElement>}
            style={{ x: mag.x, y: mag.y, background: "var(--color-accent-primary)" }}
            data-cursor="hover"
            onClick={goContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>

        {/* Right — Three.js scene */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <ThreeScene style={{ height: "50vh" }}>
            <FloatingShapes primaryColor="var(--color-accent-primary)" wireframe={true} />
          </ThreeScene>
        </motion.div>
      </div>
    </section>
  );
}
