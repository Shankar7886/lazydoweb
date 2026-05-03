import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../../../lib/ScrollReveal";

export default function WebDevelopmentServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 px-6 text-center relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl mx-auto relative"
      >
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-thin text-zinc-900 mb-4 tracking-tight">
            Mobile App{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              Development
            </span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-4 mb-12 origin-center" />
        </ScrollReveal>

        <div className="space-y-10">
          <ScrollReveal direction="left" delay={0.2}>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 tracking-wide">
              Lazy Do is committed to keeping pace with changing industry
              standards, providing end-to-end mobile development services through
              user-centric approaches. Our solutions are specifically designed to
              suit the needs of each client and maximize their digital impact.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 tracking-wide">
              No matter what type of business you're running, having a mobile
              application can make your business 5+ times faster. Lazy Do is a
              leading Mobile Application Development Company serving
              international clients with result-oriented solutions. We offer a
              wide range of mobile app solutions for all major
              platforms—iOS, Android, Windows, etc. Our in-house team of
              experienced mobile app programmers has excellent knowledge of
              cutting-edge technologies and development tools. They've created
              innovative and future-ready apps for a variety of brands, startups,
              and enterprises. Our goal is to build industry-specific digital
              ecosystems that grow your customer base by millions. We specialize
              in high-quality, platform-specific solutions for B2B, B2C, and C2B
              businesses.
            </p>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}
