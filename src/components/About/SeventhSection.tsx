import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import GradientMesh from "../../lib/GradientMesh";
import ScrollReveal from "../../lib/ScrollReveal";
import TiltCard from "../../lib/TiltCard";
import { useMagneticButton } from "../../lib/useMagneticButton";

const reasons = [
  {
    title: "Skilled Development Team",
    description:
      "Our developers are highly skilled in various programming languages and frameworks, allowing us to tackle diverse projects seamlessly.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize clear communication and collaboration to deliver tailored solutions that exceed expectations.",
  },
  {
    title: "Quality and Reliability",
    description:
      "Our stringent quality standards ensure that every solution we deliver is reliable, secure, and high-performing.",
  },
  {
    title: "Timely Delivery",
    description:
      "We respect your time and ensure project delivery within agreed timelines without compromising quality.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We offer flexible pricing and engagement models to align with your budget and goals.",
  },
];

// Fancy text animation variant for heading
const headingVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lazyDoStart = "Why Choose ".length;
const lazyDoEnd = lazyDoStart + "Lazy Do".length;

const WhyChooseUs = () => {
  const headingText = "Why Choose Lazy Do ?";
  const mag = useMagneticButton();

  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
      <GradientMesh colors={["#d4f0e8", "#fde8e1", "#fef3cd"]} />

      <div className="relative z-10">
        {/* Animated Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-6 flex flex-wrap justify-center"
        >
          {headingText.split("").map((char, index) => {
            const isAccent = index >= lazyDoStart && index < lazyDoEnd;
            return (
              <motion.span
                key={index}
                variants={charVariant}
                className="text-4xl md:text-5xl font-thin"
                style={
                  isAccent
                    ? {
                        background:
                          "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-warm))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }
                    : { color: "#111827" }
                }
              >
                {char === " " ? " " : char}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed text-center mb-16"
        >
          A partnership built on trust, innovation, and value.
        </motion.p>

        {/* Animated List */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 flex items-start space-x-4 h-full">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                  >
                    <CheckCircle
                      className="mt-1 shrink-0"
                      size={24}
                      style={{ color: "var(--color-accent-primary)" }}
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            ref={mag.ref as React.RefObject<HTMLButtonElement>}
            style={{
              x: mag.x,
              y: mag.y,
              background:
                "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-warm))",
            }}
            data-cursor="hover"
            className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Partner With Us</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
