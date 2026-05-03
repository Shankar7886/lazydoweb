import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientMesh from "../../lib/GradientMesh";
import ParallaxText from "../../lib/ParallaxText";
import ScrollReveal from "../../lib/ScrollReveal";

const words = ["We", "Build", "Digital", "Experiences"];

export default function EnhancedProfessionalAboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Layer 1 — background blobs (slowest)
  const blobY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  // Layer 2 — decorative background word (very slow)
  const bgWordY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  // Layer 3 — abstract element right column (medium)
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  // Layer 4 — heading text (slightly slow)
  const headY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative mesh-bg w-full min-h-[100vh] flex items-center overflow-hidden pt-32 pb-20"
        style={{ position: "relative" }}
      >
        {/* Animated gradient layer */}
        <GradientMesh
          colors={["var(--color-mesh-a)", "var(--color-mesh-b)", "var(--color-mesh-c)"]}
          intensity={0.7}
        />

        {/* ── Layer 1: Parallax background blobs ── */}
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
              top: "-15%",
              right: "5%",
              width: "55%",
              height: "130%",
              background: "radial-gradient(ellipse, rgba(200,57,43,0.06) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "0%",
              width: "45%",
              height: "90%",
              background: "radial-gradient(ellipse, rgba(124,110,234,0.07) 0%, transparent 65%)",
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "40%",
              width: "35%",
              height: "60%",
              background: "radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
        </motion.div>

        {/* ── Decorative background word (Layer 2 – very slow parallax) ── */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            y: bgWordY,
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: "20vw",
              fontWeight: 100,
              letterSpacing: "-0.06em",
              color: "var(--color-ink-900)",
              opacity: 0.04,
              whiteSpace: "nowrap",
              display: "block",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            ABOUT
          </span>
        </motion.div>

        {/* ── Main content ── */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          {/* Left: Heading column (Layer 4 – mid speed) */}
          <motion.div style={{ y: headY }}>
            <ScrollReveal direction="up" delay={0}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase" as const,
                  color: "var(--color-ink-500)",
                  marginBottom: "1.5rem",
                  display: "block",
                }}
              >
                Who We Are
              </p>
            </ScrollReveal>

            <h1
              style={{
                fontSize: "clamp(4rem, 9vw, 9rem)",
                fontWeight: 100,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "var(--color-ink-900)",
                marginBottom: "2rem",
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: word === "Digital" ? "0" : "0.25em",
                    ...(word === "Digital"
                      ? {
                          background:
                            "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontWeight: 300,
                          marginRight: "0.25em",
                        }
                      : {}),
                  }}
                >
                  {word === "Build" || word === "Digital" ? (
                    <>
                      {word}
                      <br />
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <ScrollReveal direction="up" delay={0.5}>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-ink-500)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  maxWidth: 480,
                  marginBottom: "2.5rem",
                }}
              >
                We craft tailored digital solutions that empower ambitious businesses
                and drive real transformation across every industry.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.65}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                style={{
                  height: 1,
                  width: 128,
                  background:
                    "linear-gradient(90deg, transparent, var(--color-accent-primary), transparent)",
                  originX: 0.5,
                }}
              />
            </ScrollReveal>
          </motion.div>

          {/* Right: Abstract decorative element (Layer 2 – medium speed) */}
          <ScrollReveal direction="right" delay={0.25}>
            <div style={{ overflow: "hidden", borderRadius: "24px", position: "relative" }}>
              <motion.div
                style={{
                  y: imageY,
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "3/4",
                  boxShadow: "0 40px 80px rgba(15,14,13,0.12)",
                }}
              >
                {/* Abstract multi-gradient art panel */}
                <div
                  style={{
                    width: "100%",
                    height: "115%",
                    marginTop: "-7.5%",
                    background:
                      "linear-gradient(135deg, rgba(200,57,43,0.08) 0%, rgba(124,110,234,0.12) 50%, rgba(5,150,105,0.06) 100%)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Inner animated orb 1 */}
                  <motion.div
                    animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      top: "15%",
                      left: "20%",
                      width: "60%",
                      height: "50%",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(ellipse, rgba(200,57,43,0.3) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  {/* Inner animated orb 2 */}
                  <motion.div
                    animate={{ x: [0, -25, 35, 0], y: [0, 30, -25, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    style={{
                      position: "absolute",
                      bottom: "10%",
                      right: "10%",
                      width: "55%",
                      height: "45%",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(ellipse, rgba(124,110,234,0.35) 0%, transparent 70%)",
                      filter: "blur(50px)",
                    }}
                  />
                  {/* Geometric grid overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "linear-gradient(rgba(15,14,13,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,14,13,0.05) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Center label */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(16px)",
                        borderRadius: "16px",
                        padding: "1.25rem 2rem",
                        boxShadow: "0 20px 60px rgba(15,14,13,0.12)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        textAlign: "center" as const,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: 100,
                          letterSpacing: "-0.04em",
                          color: "var(--color-ink-900)",
                          lineHeight: 1,
                        }}
                      >
                        10+
                      </div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase" as const,
                          color: "var(--color-accent-primary)",
                          marginTop: "0.4rem",
                        }}
                      >
                        Years of craft
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(200,57,43,0.06) 0%, rgba(124,110,234,0.06) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Decorative drift text BELOW section ── */}
      <ParallaxText
        text="WHO WE ARE · LAZY DO ·"
        direction="left"
        speed={150}
        opacity={0.045}
        color="var(--color-ink-900)"
      />
    </>
  );
}
