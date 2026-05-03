import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive sessions to understand your business goals, technical constraints, and user needs. We map everything before writing a line of code.",
    duration: "Week 1",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "We design system architecture, data models, and API contracts. Every technical decision is documented and reviewed with you.",
    duration: "Week 2",
  },
  {
    num: "03",
    title: "Design",
    desc: "High-fidelity prototypes built in Figma. Pixel-perfect UI/UX with design tokens that translate directly to production code.",
    duration: "Week 2–3",
  },
  {
    num: "04",
    title: "Development",
    desc: "Agile sprints with weekly demos. Clean, documented code with >80% test coverage and CI/CD pipelines from day one.",
    duration: "Week 3–8",
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Automated and manual testing across devices, browsers, and edge cases. Performance audits with Lighthouse scores ≥90.",
    duration: "Ongoing",
  },
  {
    num: "06",
    title: "Launch & Scale",
    desc: "Zero-downtime deployments, monitoring dashboards, and 24/7 support. We stay with you long after go-live.",
    duration: "Ongoing",
  },
];

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: "2.5rem",
        padding: "2.5rem 0",
        borderBottom: index < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
        alignItems: "start",
      }}
    >
      <div>
        <motion.div
          animate={inView ? {
            boxShadow: ["0 0 0px rgba(200,57,43,0)", "0 0 24px rgba(200,57,43,0.5)", "0 0 0px rgba(200,57,43,0)"],
          } : {}}
          transition={{ duration: 2.5, delay: index * 0.1 + 0.5, repeat: 1 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "1.5px solid rgba(200,57,43,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--color-accent-warm)",
            background: "rgba(200,57,43,0.06)",
          }}
        >
          {step.num}
        </motion.div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {step.title}
          </h3>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              padding: "0.2rem 0.6rem",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {step.duration}
          </span>
        </div>
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 580,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      style={{
        background: "var(--color-ink-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(124,110,234,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "6rem 3rem" }}>
        <div
          ref={headerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            alignItems: "end",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--color-accent-warm)",
                marginBottom: "1.25rem",
              }}
            >
              Our Process
            </div>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 100,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              How we
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                make it happen.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              lineHeight: 1.8,
              alignSelf: "end",
            }}
          >
            A transparent, structured process refined over 15 years and 150+ projects. No surprises — just clear progress toward your goals.
          </motion.p>
        </div>

        <div>
          {steps.map((step, i) => (
            <Step key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
