import { motion } from "framer-motion";
import {
  FileText,
  Hammer,
  Puzzle,
  DatabaseZap,
  RefreshCw,
  Headphones,
} from "lucide-react";
import useGoToContactPage from "../../Contact/contactFn";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";

const services = [
  {
    icon: FileText,
    title: "CRM Strategy & Consulting",
    description:
      "Our analysts study your operations to recommend CRM strategies that unlock growth and solve bottlenecks.",
  },
  {
    icon: Hammer,
    title: "CRM Implementation",
    description:
      "Realize CRM value with rich implementations that align with your business needs and cut costs.",
  },
  {
    icon: Puzzle,
    title: "Custom CRM Development",
    description:
      "We design CRM software tailored to your processes—not the other way around.",
  },
  {
    icon: DatabaseZap,
    title: "CRM Integration Services",
    description:
      "Seamlessly connect third-party APIs and internal systems for a fully integrated business environment.",
  },
  {
    icon: RefreshCw,
    title: "CRM Migration Services",
    description:
      "Migrate without stress—ensuring continuity, zero workflow disruption, and preserved data integrity.",
  },
  {
    icon: Headphones,
    title: "CRM Support & Maintenance",
    description:
      "Our 24/7 support keeps your CRM secure, efficient, and up-to-date—so you stay ahead.",
  },
];

export default function CRMServicesSection() {
  const goContact = useGoToContactPage();
  const mag = useMagneticButton();

  return (
    <section className="w-full py-16 px-6 md:px-20">
      {/* Heading */}
      <ScrollReveal direction="up">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
            Elevate Your Business with Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              CRM Development
            </span>{" "}
            Services
          </h2>
          <p className="text-lg text-gray-600 font-light">
            We use an agile, customer-centric approach to provide CRM software
            that's strong and flexible—whether you need a single app or an
            enterprise-grade solution.
          </p>
        </div>
      </ScrollReveal>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <TiltCard>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4 h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-accent-primary)" }}
                >
                  <s.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light">{s.description}</p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-2">
          Join forces with Lazy Do to streamline your business, enhance customer
          interaction, and grow with confidence.
        </p>
        <motion.button
          ref={mag.ref as RefObject<HTMLButtonElement>}
          style={{ x: mag.x, y: mag.y, background: "var(--color-accent-primary)" }}
          data-cursor="hover"
          onClick={goContact}
          className="mt-4 text-white px-6 py-3 rounded-full font-medium shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Let's Build Your CRM
        </motion.button>
      </div>
    </section>
  );
}
