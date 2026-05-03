"use client";
import React from "react";
import { BrainCog, LineChart, Megaphone } from "lucide-react";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const featureItems = [
  {
    icon: LineChart,
    title: "Salesforce Automation",
    description:
      "Streamline operations and make confident data-driven decisions in real-time.",
    align: "left",
  },
  {
    icon: BrainCog,
    title: "AI-Powered CRM",
    description:
      "Use AI like Salesforce Einstein to automate tasks and predict customer behavior.",
    align: "right",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "Automate campaigns, launches, and notifications—customized to your business objectives.",
    align: "center",
  },
];

const CRM3DLaptopSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 md:px-16 overflow-hidden flex flex-col items-center">
      {/* Title */}
      <ScrollReveal direction="up">
        <div className="text-center max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
            We Know CRM{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              Inside Out
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            We comprehend the nature of a business—establishing deep relationships
            with customers. That's why progressive brands rely on our powerful CRM
            solutions to simplify and automate their operations.
          </p>
        </div>
      </ScrollReveal>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl grid md:grid-cols-3 gap-8">
        {featureItems.map((item, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <TiltCard glareEffect>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--color-accent-primary)" }}
                >
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-light text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light">{item.description}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default CRM3DLaptopSection;
