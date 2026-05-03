import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import GradientMesh from "../../lib/GradientMesh";
import ScrollReveal from "../../lib/ScrollReveal";
import TiltCard from "../../lib/TiltCard";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechSolve",
    feedback:
      "Lazy Do helped us scale from concept to launch flawlessly. Their execution is fast and top-quality!",
  },
  {
    name: "Sneha Patel",
    role: "CMO, MarketGo",
    feedback:
      "They truly understand how to combine tech with business. Their team is creative, responsive, and professional.",
  },
  {
    name: "Arun Verma",
    role: "CEO, FinClimb",
    feedback:
      "What stood out most is their dedication to client success. The results exceeded expectations — a phenomenal partnership!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
      <GradientMesh colors={["#fef3cd", "#fde8e1", "#e8e6ff"]} />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <TypeAnimation
            sequence={[
              "What Our Clients Say",
              1500,
              "",
              500,
              "What Our Clients Say",
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-thin text-gray-900 mb-4"
          />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">
              Idea + Experience = Excellence!
            </span>{" "}
            <br />
            Our skills of developing the web things and your ideas are perfect
            together. While developing the online presence of our top-rated
            clients, this section speaks volumes about who we are and what we do.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 text-left h-full">
                  <Quote
                    className="mb-4"
                    style={{ color: "var(--color-accent-primary)" }}
                  />
                  <p className="text-gray-700 text-base mb-4">{item.feedback}</p>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
