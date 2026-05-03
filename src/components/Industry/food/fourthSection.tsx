import React from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  LayoutDashboard,
  Server,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import ImageHostLink from "../../../variable";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import GradientMesh from "../../../lib/GradientMesh";

const steps = [
  {
    title: "Strategic Planning",
    icon: CalendarClock,
    desc: "We translate your vision into a clear roadmap with timelines, features, and milestones.",
  },
  {
    title: "UI/UX Design",
    icon: LayoutDashboard,
    desc: "Pixel-perfect interfaces designed for elegance and usability, from tap to checkout.",
  },
  {
    title: "Backend Engineering",
    icon: Server,
    desc: "Robust APIs and real-time systems to handle orders, sync data, and scale effortlessly.",
  },
  {
    title: "QA & Beta Testing",
    icon: Bug,
    desc: "Live-user feedback meets expert QA to squash bugs and sharpen the experience.",
  },
  {
    title: "App Store Launch",
    icon: Rocket,
    desc: "We publish your app to iOS and Android — typically within 14 days of polish.",
  },
  {
    title: "Ongoing Support",
    icon: LifeBuoy,
    desc: "We provide long-term stability, updates, and enhancements post-launch.",
  },
];

const DevelopmentWorkflowSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 px-6 lg:px-20">
      <GradientMesh colors={["#fef3cd", "#fde8e1", "#ffe0cc"]} intensity={0.1} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Workflow Steps */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-thin leading-tight">
              Our Seamless{" "}
              <span style={{ color: "var(--color-accent-primary)", fontWeight: 600 }}>
                Development Workflow
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl">
              We craft bold, high-performance food ordering apps using a
              streamlined and proven approach.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "var(--color-accent-primary)" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Right: Image in TiltCard */}
        <ScrollReveal direction="right" delay={0.2}>
          <TiltCard>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${ImageHostLink}developmentProcess.png`}
                alt="App Workflow Visual"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DevelopmentWorkflowSection;
