"use client";
import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import {
  Lightbulb,
  Smartphone,
  Palette,
  Building2,
  Link,
  Cloud,
  Settings,
  TestTube,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Technology Consulting",
    description: "Strategic mobile solutions aligned with your business objectives",
    icon: Lightbulb,
    status: "Planning",
  },
  {
    step: "02",
    title: "Custom Development",
    description: "Tailored applications with innovative architecture",
    icon: Smartphone,
    status: "Development",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Intuitive interfaces with modern design principles",
    icon: Palette,
    status: "Design",
  },
  {
    step: "04",
    title: "Enterprise Solutions",
    description: "Scalable applications with enterprise-grade security",
    icon: Building2,
    status: "Enterprise",
  },
  {
    step: "05",
    title: "System Integration",
    description: "Seamless connectivity across all platforms",
    icon: Link,
    status: "Integration",
  },
  {
    step: "06",
    title: "Cloud Infrastructure",
    description: "Leveraging cloud for scalability and reliability",
    icon: Cloud,
    status: "Cloud",
  },
  {
    step: "07",
    title: "Ongoing Support",
    description: "Continuous optimization and monitoring",
    icon: Settings,
    status: "Support",
  },
  {
    step: "08",
    title: "Quality Assurance",
    description: "Comprehensive testing for flawless delivery",
    icon: TestTube,
    status: "Testing",
  },
];

const phases = ["Planning", "Design", "Development", "Testing", "Integration", "Launch"];
const durations = ["2-3 wks", "3-4 wks", "8-12 wks", "2-3 wks", "1-2 wks", "1 wk"];

export default function MobileAppProcessSection() {
  return (
    <div className="relative overflow-hidden py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-zinc-900 mb-4">
              Complete{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Mobile Development
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto">
              With advanced technology and expert team, we provide reliable
              solutions for any business around the world.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="glass-card rounded-2xl p-6 mb-12 flex flex-wrap gap-8 justify-center">
            <div className="text-center">
              <div className="text-4xl font-thin text-zinc-900">150</div>
              <div className="text-sm text-zinc-500">Projects Completed</div>
            </div>
            <div className="w-px bg-zinc-200 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-thin text-zinc-900">98.5%</div>
              <div className="text-sm text-zinc-500">Success Rate</div>
            </div>
            <div className="w-px bg-zinc-200 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-thin text-zinc-900">12</div>
              <div className="text-sm text-zinc-500">Active Projects</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Process cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-4 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--color-accent-primary)" }}
                    >
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-thin text-zinc-300">
                      {step.step}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-zinc-800 mb-1">
                    {step.title}
                  </div>
                  <div className="text-xs text-zinc-500">{step.description}</div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Timeline */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mb-6 text-center">
              {phases.map((phase, index) => (
                <div key={index} className="text-xs md:text-sm text-gray-600 font-medium">
                  {phase}
                </div>
              ))}
            </div>
            <div className="relative h-16 md:h-20 mb-6">
              <svg className="w-full h-full" viewBox="0 0 800 100">
                <path
                  d="M 50 50 Q 200 20 400 50 T 750 50"
                  stroke="rgba(200,57,43,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                {[50, 200, 350, 500, 650, 750].map((cx, i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={i % 2 === 0 ? 50 : 35}
                    r="4"
                    fill="var(--color-accent-primary)"
                    opacity="0.8"
                  />
                ))}
              </svg>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 text-center">
              {durations.map((d, i) => (
                <div key={i} className="text-lg md:text-2xl font-thin text-zinc-700">
                  {d}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
