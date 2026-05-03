import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import video1 from "../../assets/8426049-uhd_3840_2160_25fps.mp4";
import useGoToContactPage from "../Contact/contactFn";
import { useMagneticButton } from "../../lib/useMagneticButton";
import ScrollReveal from "../../lib/ScrollReveal";
import ParallaxText from "../../lib/ParallaxText";

const reasons = [
  "15+ years building production systems across every industry",
  "Dedicated team — no freelancers, no outsourcing",
  "Weekly demos and full codebase access, always",
  "Performance SLAs with real accountability",
  "Post-launch support included in every engagement",
  "Architecture designed to last, not just to ship",
];

export default function WhyChooseSection() {
  const goContact = useGoToContactPage();
  const { ref: magRef, x, y: magY } = useMagneticButton(0.4);

  // Container for the whole section — drives all parallax in here
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Video inside its frame moves slower than the section → classic parallax
  const videoParallax = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  // Floating badges drift at different rates
  const badge1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const badge2Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Text column drifts slightly faster
  const textY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <>
      <ParallaxText
        text="WHY LAZY DO · BUILT DIFFERENT ·"
        direction="right"
        speed={130}
        opacity={0.045}
        color="var(--color-ink-900)"
      />

      <section
        ref={sectionRef}
        style={{
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
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
              "linear-gradient(90deg, transparent 0%, rgba(200,57,43,0.3) 50%, transparent 100%)",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* ── Left: Video with parallax ── */}
          <ScrollReveal direction="left">
            <div style={{ position: "relative" }}>
              {/* Frame */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  boxShadow: "0 40px 80px rgba(15,14,13,0.18)",
                }}
              >
                {/* Video moves at a different speed to its container */}
                <motion.video
                  src={video1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    y: videoParallax,
                    width: "100%",
                    height: "120%",
                    objectFit: "cover",
                    display: "block",
                  } as React.CSSProperties}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(200,57,43,0.12) 0%, rgba(124,110,234,0.08) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating badge 1 — independent parallax */}
              <motion.div
                style={{
                  y: badge1Y,
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
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
                  top: "24px",
                  left: "-20px",
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
                    textTransform: "uppercase",
                  }}
                >
                  Projects
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── Right: Content with text parallax ── */}
          <motion.div style={{ y: textY }}>
            <ScrollReveal direction="right">
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Why Lazy Do
                </div>

                <h2
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                    fontWeight: 100,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "var(--color-ink-900)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Built different.
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 300,
                    }}
                  >
                    Delivered differently.
                  </span>
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-ink-500)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    marginBottom: "2.5rem",
                    maxWidth: 480,
                  }}
                >
                  We don't just build software. We build partnerships. Every
                  engagement comes with full transparency, senior engineers on
                  your account, and a relentless focus on outcomes.
                </p>

                {/* Reasons */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {reasons.map((reason, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        color: "var(--color-ink-700)",
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        strokeWidth={2}
                        style={{
                          color: "var(--color-accent-primary)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      {reason}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  ref={magRef as React.Ref<HTMLButtonElement>}
                  style={{
                    x,
                    y: magY,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "1rem 2.25rem",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "#fff",
                    background: "var(--color-ink-900)",
                    boxShadow: "0 8px 32px rgba(15,14,13,0.2)",
                  } as React.CSSProperties}
                  data-cursor="hover"
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 48px rgba(15,14,13,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={goContact}
                >
                  Start Your Journey <ArrowRight size={15} />
                </motion.button>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>
    </>
  );
}
