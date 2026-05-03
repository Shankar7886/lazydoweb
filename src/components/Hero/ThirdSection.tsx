import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../lib/ScrollReveal";

const services = [
  {
    num: "01",
    title: "Custom Software Development",
    tagline: "Enterprise-grade. Battle-tested.",
    desc: "We architect and build bespoke software systems that solve complex business problems — from ERP platforms to AI-powered workflows.",
    tags: ["Architecture", "Scalability", "API Design"],
    href: "/Services/customWebDevlopment",
    accent: "#c8392b",
  },
  {
    num: "02",
    title: "Web Development",
    tagline: "Fast. Beautiful. Accessible.",
    desc: "Modern React and Next.js applications built for performance, SEO, and delightful user experiences across every device.",
    tags: ["React", "Next.js", "Performance"],
    href: "/Services/WebDevlopment",
    accent: "#7c6eea",
  },
  {
    num: "03",
    title: "Mobile Applications",
    tagline: "Native quality. Cross-platform reach.",
    desc: "iOS and Android apps that feel native, perform flawlessly, and keep users coming back — built with React Native.",
    tags: ["React Native", "iOS", "Android"],
    href: "/Services/mobilebDevlopment",
    accent: "#059669",
  },
  {
    num: "04",
    title: "E-Commerce Development",
    tagline: "Convert browsers into buyers.",
    desc: "High-converting shopping experiences with real-time inventory, payment gateways, and seamless checkout flows.",
    tags: ["Shopify", "WooCommerce", "Payments"],
    href: "/Services/onlineShoppingAppDevlopment",
    accent: "#d97706",
  },
  {
    num: "05",
    title: "CRM & DMS Systems",
    tagline: "Relationships managed. Documents mastered.",
    desc: "Custom CRM and document management platforms that streamline operations and give your team superpowers.",
    tags: ["CRM", "Automation", "Workflows"],
    href: "/Services/CrmSoftwareDvelopment",
    accent: "#0891b2",
  },
  {
    num: "06",
    title: "Digital Marketing",
    tagline: "Visible. Measurable. Impactful.",
    desc: "SEO, SEM, and social campaigns engineered from data — not guesswork. We grow your audience and convert them.",
    tags: ["SEO", "SEM", "Analytics"],
    href: "/Services/DigitalMarketing",
    accent: "#9333ea",
  },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(service.href)}
      data-cursor="hover"
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        alignItems: "center",
        gap: "2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid rgba(15,14,13,0.07)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover fill */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${service.accent}06 0%, ${service.accent}03 100%)`,
          borderRadius: "12px",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Number */}
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: hovered ? service.accent : "var(--color-ink-300)",
          transition: "color 0.3s",
          fontVariantNumeric: "tabular-nums",
          position: "relative",
          zIndex: 1,
        }}
      >
        {service.num}
      </div>

      {/* Title + expanded content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: hovered ? "var(--color-ink-900)" : "var(--color-ink-700)",
              transition: "color 0.3s",
            }}
          >
            {service.title}
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--color-ink-300)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            {service.tagline}
          </span>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <p
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--color-ink-500)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                {service.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.7rem",
                      borderRadius: "50px",
                      background: `${service.accent}12`,
                      color: service.accent,
                      border: `1px solid ${service.accent}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Arrow */}
      <motion.div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${hovered ? service.accent : "rgba(15,14,13,0.1)"}`,
          color: hovered ? service.accent : "var(--color-ink-300)",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          transition: "border-color 0.3s, color 0.3s",
        }}
        animate={{ rotate: hovered ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}

export default function ServicesListSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        position: "relative",
        padding: "6rem 0",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 3rem" }}>
        {/* Header */}
        <ScrollReveal direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(15,14,13,0.07)",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                What We Build
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 100,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--color-ink-900)",
                }}
              >
                Services that{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  scale
                </span>
              </h2>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-ink-500)",
                fontWeight: 300,
                maxWidth: 340,
                lineHeight: 1.7,
              }}
            >
              From concept to deployment — we engineer digital solutions that grow with your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Service rows */}
        <div>
          {services.map((svc, i) => (
            <ServiceRow key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
