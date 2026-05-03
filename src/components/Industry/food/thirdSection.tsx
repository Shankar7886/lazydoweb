import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import GradientMesh from "../../../lib/GradientMesh";

const solutions = [
  {
    title: "Startups Entering the Food Tech World",
    desc: "We help new-age brands launch boldly with scalable, modern food ordering apps packed with robust features.",
  },
  {
    title: "Individual Restaurants Going Digital",
    desc: "Solo outlet owners can go online fast with our easy, affordable food delivery platform—no tech stress.",
  },
  {
    title: "Multi-location Restaurant Chains",
    desc: "Control menus, orders, and deliveries across all branches with one integrated system that just works.",
  },
];

const ClientSolutionsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 px-6 lg:px-20">
      <GradientMesh colors={["#fef3cd", "#fde8e1", "#ffe0cc"]} intensity={0.12} />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left side text */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-thin leading-tight"
          >
            Our Customized Solutions Serve a{" "}
            <span style={{ color: "var(--color-accent-primary)", fontWeight: 600 }}>
              Range of Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            We don't believe in one-size-fits-all. Whether you're launching your
            first food app or managing a chain of restaurants, our tailored
            platforms help you grow smart.
          </motion.p>
        </div>

        {/* Right side animated cards */}
        <div className="space-y-8">
          {solutions.map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-6 group relative">
                  <h3
                    className="text-xl font-semibold mb-3 group-hover:underline"
                    style={{ color: "var(--color-accent-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base">{item.desc}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSolutionsSection;
