import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import GradientMesh from "../../lib/GradientMesh";
import ThreeScene from "../../lib/ThreeScene";
import FloatingShapes from "../../lib/scenes/FloatingShapes";
import LaptopModel from "../../lib/scenes/LaptopModel";
import { useMagneticButton } from "../../lib/useMagneticButton";
import useGoToContactPage from "../Contact/contactFn";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function CTAPrimary() {
  const goContact = useGoToContactPage();
  const { ref, x, y } = useMagneticButton(0.4);

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      data-cursor="hover"
      style={{
        x,
        y,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.875rem 2rem",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 500,
        color: "#fff",
        background: "var(--color-accent-primary)",
        boxShadow: "0 4px 24px rgba(200,57,43,0.35)",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={goContact}
    >
      Get Started
    </motion.button>
  );
}

function CTASecondary() {
  const { ref, x, y } = useMagneticButton(0.35);

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href="#services"
      data-cursor="hover"
      style={{
        x,
        y,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.875rem 2rem",
        borderRadius: "50px",
        border: "1.5px solid var(--color-ink-900)",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 400,
        color: "var(--color-ink-900)",
        background: "transparent",
        textDecoration: "none",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      Explore Services
    </motion.a>
  );
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Section-local gradient accent */}
      <GradientMesh colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left column — 60% */}
        <motion.div
          style={{ flex: "1 1 320px", minWidth: 0 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 1,
                  background:
                    "linear-gradient(90deg, var(--color-accent-primary), transparent)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-primary)",
                  fontWeight: 600,
                }}
              >
                Engineered for Excellence
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 100,
              lineHeight: 1.1,
              color: "var(--color-ink-900)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            We build{" "}
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Web Apps",
                  2200,
                  "Mobile Apps",
                  2200,
                  "Digital Products",
                  2200,
                  "CRM Systems",
                  2200,
                  "DMS Platforms",
                  2200,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
                speed={55}
                style={{ display: "inline-block" }}
              />
            </span>
            <br />
            Built for the future.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "1.2rem",
              color: "var(--color-ink-700)",
              fontWeight: 300,
              marginBottom: "0.75rem",
              lineHeight: 1.5,
            }}
          >
            Engineered for excellence. Built for the future.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "1.05rem",
              color: "var(--color-ink-700)",
              fontWeight: 300,
              maxWidth: "560px",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            We create digital solutions that combine cutting-edge technology
            with sophisticated design principles. Our CRM, DMS, and custom
            development services are meticulously crafted to deliver exceptional
            performance and unparalleled user experiences.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <CTAPrimary />
            <CTASecondary />
          </motion.div>
        </motion.div>

        {/* Right column — Three.js canvas, ~40% */}
        <div
          style={{
            flex: "1 1 280px",
            minWidth: 0,
            height: "50vh",
            minHeight: 320,
          }}
        >
          <ThreeScene style={{ height: "50vh" }} disableOnMobile>
            <FloatingShapes primaryColor="var(--color-accent-primary)" />
            <LaptopModel position={[1, 0, 0]} scale={1.8} />
          </ThreeScene>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          color: "var(--color-ink-700)",
          opacity: 0.6,
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
