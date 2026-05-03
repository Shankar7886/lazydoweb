import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import GradientMesh from "../../../lib/GradientMesh";

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "Our business analysts thoroughly explore what you want, face, and need. After shared discussions, we organize a kickoff session for designers and developers to map a detailed roadmap towards a successful build.",
  },
  {
    title: "Smart Development",
    description:
      "To make your healthcare operations stronger and your services more organized, our development team uses latest technologies and frameworks to shape your idea into a robust online solution.",
  },
  {
    title: "Quality Assurance",
    description:
      "Your flawless user experience is our priority. Our quality analysts conduct intense testing with latest tools to ensure your application is efficient, reliable, and absolutely bug-free.",
  },
  {
    title: "Final Deployment",
    description:
      "Releasing your application is a milestone we approach with care. We adhere to each guideline established by the Play Store and App Store to ensure your app's approval and best performance after release.",
  },
];

export default function HealthcareProcessSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <GradientMesh colors={["#d4f0e8", "#e8f4fd", "#f0ffe8"]} intensity={0.5} />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-thin text-slate-900 leading-snug"
        >
          Our Process: From Vision to{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--color-accent-primary), #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Interactive Innovation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 mt-4"
        >
          We believe each phenomenal solution starts with planning and ends with
          an experience that excites.
        </motion.p>
      </div>

      {/* Process Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <TiltCard>
              <div className="glass-card rounded-2xl p-6">
                <div className="mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-white rounded-full text-lg font-semibold shadow"
                    style={{ background: "var(--color-accent-primary)" }}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-md leading-relaxed">
                  {step.description}
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
