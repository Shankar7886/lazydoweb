import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useGoToContactPage from "../../Contact/contactFn";
import ImageHostLink from "../../../variable";
import GradientMesh from "../../../lib/GradientMesh";
import TiltCard from "../../../lib/TiltCard";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import ParallaxText from "../../../lib/ParallaxText";

export default function HealthcareLanding() {
  const goContact = useGoToContactPage();
  const magnet = useMagneticButton();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);
  const headY  = useTransform(scrollYProgress, [0, 1], ["4%",  "-4%"]);

  const doctorImage1 = `${ImageHostLink}healthBackground.jpg`;
  const doctorImage2 = `${ImageHostLink}healthsecond.jpg`;

  return (
    <>
      <ParallaxText text="HEALTHCARE · DIGITAL HEALTH ·" direction="right" />

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen text-slate-800 flex items-center justify-center py-16 px-4 md:px-8"
      >
        <GradientMesh colors={["#d4f0e8", "#e8f4fd", "#f0ffe8"]} />

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ y: blobY }} className="w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
              style={{ background: `rgba(5,150,105,0.12)` }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
              style={{ background: `rgba(5,150,105,0.10)` }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: `rgba(5,150,105,0.07)` }} />
          </motion.div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center w-full">
          {/* Left Content with heading parallax */}
          <div className="overflow-hidden">
            <motion.div style={{ y: headY }} className="flex flex-col justify-center text-center lg:text-left">
              {/* Decorative ECG/pulse SVG animation */}
              <div className="flex justify-center lg:justify-start mb-4">
                <svg viewBox="0 0 200 60" className="w-48 h-12 opacity-30">
                  <motion.path
                    d="M0,30 L40,30 L50,10 L60,50 L70,30 L100,30 L110,15 L120,45 L130,30 L200,30"
                    stroke="var(--color-accent-primary)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-thin text-slate-900 mb-6 leading-tight tracking-tight"
              >
                Healthcare App{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent-primary), #22c55e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Development
                </span>{" "}
                Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
              >
                Let your business leverage healthcare mobility solutions to connect
                practitioners, patients, fitness trainers, and medical companies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="self-center lg:self-start"
              >
                <motion.button
                  ref={magnet.ref as React.RefObject<HTMLButtonElement>}
                  style={
                    {
                      x: magnet.x,
                      y: magnet.y,
                      background: "var(--color-accent-primary)",
                    } as React.CSSProperties
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out"
                  onClick={goContact}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image Area with parallax */}
          <div className="overflow-hidden">
            <motion.div
              style={{ y: imageY }}
              className="relative flex items-center justify-center h-96 lg:h-[500px] w-full"
            >
              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    backgroundImage: `url(${doctorImage1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    top: "10%",
                    left: "10%",
                    transform: "rotate(-5deg)",
                  }}
                />
              </TiltCard>

              <TiltCard>
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    backgroundImage: `url(${doctorImage2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    bottom: "10%",
                    right: "10%",
                    transform: "rotate(5deg)",
                  }}
                />
              </TiltCard>

              <div
                className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full animate-pulse"
                style={{ background: "var(--color-accent-primary)", opacity: 0.5 }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ParallaxText text="CARE · DIAGNOSE · INNOVATE ·" direction="left" />
    </>
  );
}
