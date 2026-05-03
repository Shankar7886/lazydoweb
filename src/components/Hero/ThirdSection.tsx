import React from "react";
import {
  Code,
  Globe,
  Smartphone,
  Palette,
  Shield,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "../../lib/TiltCard";
import ScrollReveal from "../../lib/ScrollReveal";

interface Service {
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    subtitle:
      "Enterprise-grade solutions built with precision engineering and scalable architecture.",
    icon: Code,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Web Development",
    subtitle:
      "Modern, responsive web applications that deliver exceptional user experiences.",
    icon: Globe,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Mobile Applications",
    subtitle:
      "Native and cross-platform mobile solutions for iOS and Android ecosystems.",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "UI/UX Design",
    subtitle:
      "Human-centered design that transforms complex workflows into intuitive experiences.",
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Quality Assurance",
    subtitle:
      "Comprehensive testing strategies ensuring reliability and performance excellence.",
    icon: Shield,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Technical Support",
    subtitle:
      "Proactive monitoring and rapid response support for mission-critical systems.",
    icon: Headphones,
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function ElegantDigitalPartner() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="mx-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            </div>

            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 tracking-tight leading-tight">
              Your Trusted{" "}
              <motion.span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Digital Partner
              </motion.span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mt-4">
              We craft exceptional digital experiences through innovative
              technology, thoughtful design, and strategic expertise.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 h-80 flex flex-col items-center justify-center text-center relative group">
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}
                    whileHover="hover"
                  >
                    <motion.div
                      variants={{
                        hover: {
                          rotate: 360,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.subtitle}
                  </p>

                  {/* Arrow on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6"
                    initial={{ opacity: 0, x: 8 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight
                      className="w-5 h-5"
                      style={{ color: "var(--color-accent-primary)" }}
                    />
                  </motion.div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
