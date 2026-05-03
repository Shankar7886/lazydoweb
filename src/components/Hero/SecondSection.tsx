import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageHostLink from "../../variable";
import TiltCard from "../../lib/TiltCard";
import ScrollReveal from "../../lib/ScrollReveal";
import ParallaxText from "../../lib/ParallaxText";

const features = [
  {
    num: "01",
    title: "Automation",
    subtitle: "Intelligent Systems",
    desc: "Enterprise-grade automation that scales with precision — eliminating manual workflows and surfacing insights in real time.",
    accent: "#c8392b",
  },
  {
    num: "02",
    title: "Analytics",
    subtitle: "Data Intelligence",
    desc: "Advanced analytics delivering actionable insights from complex datasets with unprecedented accuracy and speed.",
    accent: "#7c6eea",
  },
  {
    num: "03",
    title: "Integration",
    subtitle: "Unified Architecture",
    desc: "Seamless system integration creating cohesive enterprise infrastructure that transforms how your teams operate.",
    accent: "#059669",
  },
];

/**
 * Multi-layer parallax section.
 * Three depth layers moving at different scroll speeds:
 *  - Background gradient blobs: slowest (0.15x)
 *  - Video / image panel:       medium  (0.35x)
 *  - Foreground text cards:     fastest (normal scroll)
 * Plus a drifting ParallaxText strip above and below.
 */
export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress measured while this section is in view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Layer 1 — background blobs (slowest)
  const blobY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  // Layer 2 — video panel (medium speed)
  const videoY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  // Layer 3 — headline text (slightly slower than page)
  const headY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <>
      {/* ── Decorative drift text ABOVE section ── */}
      <ParallaxText
        text="AUTOMATION · ANALYTICS · INTEGRATION ·"
        direction="right"
        speed={160}
        opacity={0.05}
        color="var(--color-ink-900)"
      />

      <section
        ref={sectionRef}
        style={{ position: "relative", overflow: "hidden", background: "#ffffff", padding: "7rem 0" }}
      >
        {/* ── Background blobs — Layer 1 (slowest) ── */}
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
              left: "-5%",
              width: "50%",
              height: "120%",
              background: "radial-gradient(ellipse, rgba(200,57,43,0.07) 0%, transparent 65%)",
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

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ── Section heading — Layer 3 (mid speed) ── */}
          <motion.div style={{ y: headY }}>
            <ScrollReveal direction="up">
              <div style={{ marginBottom: "4rem", maxWidth: 680 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-primary)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  Enterprise Solutions
                </span>
                <h2
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 100,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    color: "var(--color-ink-900)",
                  }}
                >
                  Transform with{" "}
                  <motion.span
                    style={{
                      display: "inline-block",
                      background:
                        "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    Elegance
                  </motion.span>
                </h2>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Left — feature cards (normal scroll speed) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {features.map((item, idx) => (
                <ScrollReveal key={item.num} direction="left" delay={idx * 0.12}>
                  <TiltCard>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(16px)",
                        border: `1px solid ${item.accent}18`,
                        borderRadius: "16px",
                        padding: "1.5rem 1.75rem",
                        display: "grid",
                        gridTemplateColumns: "40px 1fr",
                        gap: "1.25rem",
                        alignItems: "start",
                        boxShadow: "0 4px 24px rgba(15,14,13,0.06)",
                        transition: "box-shadow 0.3s",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "10px",
                          background: `${item.accent}12`,
                          border: `1px solid ${item.accent}22`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: item.accent,
                          flexShrink: 0,
                        }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "0.75rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: 400,
                              color: "var(--color-ink-900)",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {item.title}
                          </span>
                          <span
                            style={{
                              fontSize: "0.7rem",
                              color: item.accent,
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--color-ink-500)",
                            fontWeight: 300,
                            lineHeight: 1.65,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Right — video with Layer 2 parallax */}
            <ScrollReveal direction="right" delay={0.15}>
              <motion.div
                style={{
                  y: videoY,
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(15,14,13,0.15)",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "115%", objectFit: "cover", marginTop: "-7.5%" }}
                >
                  <source src={`${ImageHostLink}realdasboard.mp4`} type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(200,57,43,0.12) 0%, rgba(124,110,234,0.08) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating label */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "12px",
                    padding: "0.7rem 1.1rem",
                    boxShadow: "0 8px 32px rgba(15,14,13,0.12)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-accent-primary)",
                    }}
                  >
                    Live Dashboard
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--color-ink-500)",
                      marginTop: "0.15rem",
                    }}
                  >
                    Real-time analytics
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Decorative drift text BELOW section ── */}
      <ParallaxText
        text="ENTERPRISE · DIGITAL · INNOVATION · SCALE ·"
        direction="left"
        speed={140}
        opacity={0.05}
        color="var(--color-ink-900)"
      />
    </>
  );
}
