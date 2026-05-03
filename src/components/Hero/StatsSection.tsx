import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 150, suffix: "+", label: "Projects Delivered", desc: "across web, mobile & enterprise" },
  { number: 99, suffix: "%", label: "Client Satisfaction", desc: "measured through NPS surveys" },
  { number: 24, suffix: "/7", label: "Support Coverage", desc: "zero downtime commitment" },
  { number: 15, suffix: "+", label: "Years of Excellence", desc: "building products that last" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, value, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value, mv]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
      <span style={{ color: "var(--color-accent-warm)" }}>{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        background: "var(--color-ink-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient bleed */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-40%",
          left: "-10%",
          width: "60%",
          height: "200%",
          background:
            "radial-gradient(ellipse, rgba(200,57,43,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-40%",
          right: "-10%",
          width: "50%",
          height: "200%",
          background:
            "radial-gradient(ellipse, rgba(124,110,234,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "5rem 3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--color-accent-warm))",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-accent-warm)",
            }}
          >
            By The Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              style={{
                padding: "2rem 2.5rem 2rem 0",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                paddingRight: i < stats.length - 1 ? "2.5rem" : 0,
                paddingLeft: i > 0 ? "2.5rem" : 0,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 6rem)",
                  fontWeight: 100,
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  marginBottom: "1rem",
                }}
              >
                <Counter value={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.01em",
                  marginBottom: "0.4rem",
                }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 200,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.01em",
              maxWidth: 500,
            }}
          >
            Numbers that reflect our commitment to engineering excellence and client success.
          </p>
          <motion.a
            href="/contact"
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.8rem 1.8rem",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "all 0.3s",
            }}
            whileHover={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "#ffffff",
            }}
          >
            Let's work together →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
