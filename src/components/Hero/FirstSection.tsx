import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import GradientMesh from "../../lib/GradientMesh";
import ThreeScene from "../../lib/ThreeScene";
import FloatingShapes from "../../lib/scenes/FloatingShapes";
import LaptopModel from "../../lib/scenes/LaptopModel";
import { useMagneticButton } from "../../lib/useMagneticButton";
import useGoToContactPage from "../Contact/contactFn";

const MARQUEE_ITEMS = [
  "React", "Node.js", "Three.js", "TypeScript", "React Native", "AWS",
  "GraphQL", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "Tailwind CSS",
  "React", "Node.js", "Three.js", "TypeScript", "React Native", "AWS",
  "GraphQL", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "Tailwind CSS",
];

function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(15,14,13,0.07)",
        borderBottom: "1px solid rgba(15,14,13,0.07)",
        padding: "0.9rem 0",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        style={{ display: "flex", gap: "3rem", width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-ink-300)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ marginLeft: "3rem", opacity: 0.25 }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function CTAPrimary() {
  const goContact = useGoToContactPage();
  const { ref, x, y } = useMagneticButton(0.45);
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      data-cursor="hover"
      onClick={goContact}
      style={{
        x, y,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1rem 2.25rem",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        color: "#fff",
        background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
        boxShadow: "0 8px 32px rgba(200,57,43,0.4), 0 2px 8px rgba(200,57,43,0.2)",
      } as React.CSSProperties}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      Start a Project <ArrowRight size={15} />
    </motion.button>
  );
}

function CTAOutline() {
  const { ref, x, y } = useMagneticButton(0.35);
  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href="/portfolio"
      data-cursor="hover"
      style={{
        x, y,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1rem 2.25rem",
        borderRadius: "50px",
        border: "1.5px solid rgba(15,14,13,0.15)",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: "var(--color-ink-700)",
        background: "transparent",
        textDecoration: "none",
        backdropFilter: "blur(8px)",
      } as React.CSSProperties}
      whileHover={{ borderColor: "var(--color-accent-primary)", scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      View Our Work
    </motion.a>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <div style={{ position: "relative" }}>
      {/* ── Main hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* Vivid gradient blobs */}
        <GradientMesh colors={["#fcd5c8", "#d5d3ff", "#c2eede"]} intensity={0.9} />

        {/* Noise overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.025,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            padding: "7rem 3rem 4rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Text */}
          <motion.div
            style={{ flex: "0 0 55%", maxWidth: "55%", minWidth: "300px" }}
            variants={stagger}
            initial={reducedMotion ? "visible" : "hidden"}
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={rise} style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "50px",
                  background: "rgba(200,57,43,0.07)",
                  border: "1px solid rgba(200,57,43,0.15)",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--color-accent-primary)",
                    boxShadow: "0 0 8px var(--color-accent-primary)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-primary)",
                  }}
                >
                  Digital Agency · Est. 2009 · New Delhi
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={rise}
              style={{
                fontSize: "clamp(3.8rem, 8.5vw, 8rem)",
                fontWeight: 100,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                color: "var(--color-ink-900)",
                marginBottom: "1.5rem",
              }}
            >
              We build{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-warm) 50%, #7c6eea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Web Apps",      2400,
                    "Mobile Apps",   2400,
                    "CRM Systems",   2400,
                    "DMS Platforms", 2400,
                    "Digital Products", 2400,
                  ]}
                  wrapper="span"
                  cursor
                  repeat={Infinity}
                  speed={55}
                  style={{ display: "inline-block" }}
                />
              </span>
              <br />
              <span style={{ fontWeight: 200 }}>for tomorrow.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={rise}
              style={{
                fontSize: "1.1rem",
                color: "var(--color-ink-500)",
                fontWeight: 300,
                maxWidth: "520px",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                letterSpacing: "0.01em",
              }}
            >
              We craft high-performance digital products — web apps, mobile
              platforms, CRM systems — with meticulous engineering and
              award-winning design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={rise}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <CTAPrimary />
              <CTAOutline />
            </motion.div>

            {/* Trust chips */}
            <motion.div
              variants={rise}
              style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-300)",
                  fontWeight: 600,
                }}
              >
                Trusted by
              </span>
              {["150+ Clients", "99% CSAT", "15 Yrs"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "50px",
                    border: "1px solid rgba(15,14,13,0.1)",
                    color: "var(--color-ink-500)",
                    fontWeight: 500,
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              flex: "0 0 42%",
              maxWidth: "42%",
              minWidth: "280px",
              height: "75vh",
              minHeight: 480,
            }}
          >
            <ThreeScene
              style={{ width: "100%", height: "100%" }}
              cameraPosition={[0, 0, 7]}
              fov={45}
              disableOnMobile
            >
              <FloatingShapes primaryColor="#c8392b" />
              <LaptopModel position={[0.5, -0.5, 0]} scale={2.2} />
            </ThreeScene>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, transparent, var(--color-ink-300))",
            }}
          />
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ink-300)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </section>

      {/* Marquee strip */}
      <Marquee />
    </div>
  );
}
