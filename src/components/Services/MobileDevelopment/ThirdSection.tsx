"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "Native App Development",
    description:
      "Mobility solutions have become a powerful asset for every business. Our native app development services are dynamic and reliable, tailored to your business needs. We deliver high-performance native apps for industries like healthcare, education, and more.",
    number: "01",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Our cross-platform apps run seamlessly on iOS and Android. With global recognition, our developers use the best tools to create versatile applications that offer native-like performance on all devices.",
    number: "02",
    icon: Globe,
  },
  {
    title: "Hybrid App Development",
    description:
      "Combining the best of web and native technologies, our hybrid apps offer broad compatibility using HTML, CSS, and JavaScript, wrapped in a native shell for multi-platform support.",
    number: "03",
    icon: Code2,
  },
];

export default function AppDevelopmentSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-zinc-900 mb-3">
              Mobile App{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Services
              </span>
            </h2>
            <p className="text-base text-zinc-500 font-light tracking-wide max-w-xl mx-auto mt-4">
              Crafting exceptional digital experiences with precision and elegance
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <TiltCard glareEffect>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-accent-primary)" }}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-thin text-zinc-200">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-zinc-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-400" />
            <span className="text-xs text-zinc-400 font-light tracking-[0.2em] uppercase">
              Excellence in Every Detail
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
