import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../../lib/ScrollReveal";
import ParallaxText from "../../lib/ParallaxText";
import ThreeScene from "../../lib/ThreeScene";
import LaptopModel from "../../lib/scenes/LaptopModel";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Layer 1 — background blobs (slowest)
  const blobY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  // Layer 2 — 3-D model / image panel (medium speed)
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  // Layer 3 — heading text (slightly slow)
  const headY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  // Floating stats badges
  const badge1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const badge2Y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <>
      {/* ── Decorative drift text ABOVE section (opposite direction to FirstSection strip) ── */}
      <ParallaxText
        text="OUR MISSION · BRIDGE THE GAP · BUSINESS & TECHNOLOGY ·"
        direction="right"
        speed={140}
        opacity={0.05}
        color="var(--color-ink-900)"
      />

      <section
        ref={sectionRef}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          padding: "7rem 0",
        }}
      >
        {/* Top border gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,110,234,0.3) 50%, transparent 100%)",
          }}
        />

        {/* ── Layer 1: Background blobs (slowest) ── */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            y: blobY,
            x: blobX,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-5%",
              width: "50%",
              height: "120%",
              background: "radial-gradient(ellipse, rgba(124,110,234,0.07) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-15%",
              left: "-5%",
              width: "45%",
              height: "90%",
              background: "radial-gradient(ellipse, rgba(200,57,43,0.06) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "35%",
              width: "30%",
              height: "50%",
              background: "radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 65%)",
              filter: "blur(70px)",
            }}
          />
        </motion.div>

        {/* ── Decorative background word ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <span
            style={{
              fontSize: "18vw",
              fontWeight: 100,
              letterSpacing: "-0.06em",
              color: "var(--color-ink-900)",
              opacity: 0.025,
              whiteSpace: "nowrap",
              display: "block",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            MISSION
          </span>
        </div>

        {/* ── Main grid ── */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left: text content (Layer 3 – mid speed) */}
          <motion.div style={{ y: headY }}>
            <ScrollReveal direction="left" delay={0}>
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase" as const,
                    color: "var(--color-accent-primary)",
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  Our Mission
                </span>

                <h2
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 100,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    color: "var(--color-ink-900)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Bridging the Gap
                  <br />
                  <motion.span
                    style={{
                      display: "inline-block",
                      background:
                        "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 300,
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    Business &amp; Technology
                  </motion.span>
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-ink-500)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    maxWidth: 480,
                    marginBottom: "2.5rem",
                  }}
                >
                  We craft tailored digital solutions that empower ambitious
                  businesses and drive real transformation across every industry —
                  combining deep technical expertise with genuine strategic partnership.
                </p>

                {/* Stats row */}
                <div
                  style={{
                    display: "flex",
                    gap: "2.5rem",
                    flexWrap: "wrap" as const,
                  }}
                >
                  {[
                    { value: "150+", label: "Projects Delivered" },
                    { value: "99%", label: "Client Satisfaction" },
                    { value: "10+", label: "Years Experience" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                      style={{
                        display: "flex",
                        flexDirection: "column" as const,
                        gap: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "2rem",
                          fontWeight: 100,
                          letterSpacing: "-0.04em",
                          color: "var(--color-ink-900)",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          color: "var(--color-ink-500)",
                        }}
                      >
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right: 3-D laptop with Layer 2 parallax */}
          <ScrollReveal direction="right" delay={0.2}>
            <div style={{ position: "relative" }}>
              {/* Overflow container so the taller element clips properly */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  boxShadow: "0 40px 80px rgba(15,14,13,0.14)",
                }}
              >
                <motion.div
                  style={{
                    y: imageY,
                    width: "100%",
                    height: "115%",
                    marginTop: "-7.5%",
                  }}
                >
                  <ThreeScene
                    style={{ height: "100%" }}
                    cameraPosition={[0, 0, 5]}
                    fov={45}
                    disableOnMobile
                  >
                    <LaptopModel position={[0, 0, 0]} scale={2} />
                  </ThreeScene>
                </motion.div>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(124,110,234,0.08) 0%, rgba(200,57,43,0.06) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating badge 1 — independent parallax */}
              <motion.div
                style={{
                  y: badge1Y,
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "1rem 1.5rem",
                  boxShadow: "0 20px 60px rgba(15,14,13,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  border: "1px solid rgba(15,14,13,0.06)",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  ★
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-ink-900)",
                    }}
                  >
                    99%
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--color-ink-500)",
                      fontWeight: 500,
                    }}
                  >
                    Client Satisfaction
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 2 — different parallax direction */}
              <motion.div
                style={{
                  y: badge2Y,
                  position: "absolute",
                  top: "20px",
                  left: "-16px",
                  background: "var(--color-ink-900)",
                  borderRadius: "12px",
                  padding: "0.8rem 1.25rem",
                  boxShadow: "0 16px 48px rgba(15,14,13,0.3)",
                  color: "#fff",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 100,
                    letterSpacing: "-0.04em",
                  }}
                >
                  150+
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Projects
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
