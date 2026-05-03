import { motion } from "framer-motion";
import {
  Settings,
  Link,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  LayoutGrid,
  Download,
  Users,
} from "lucide-react";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const features = [
  { icon: Settings, title: "System Customization" },
  { icon: Link, title: "Integration With Other Systems" },
  { icon: TrendingUp, title: "Increase Productivity" },
  { icon: Download, title: "Data Import" },
  { icon: ShieldCheck, title: "Data Security" },
  { icon: LayoutGrid, title: "Enhanced Functionality" },
  { icon: BarChart2, title: "Advanced Sales Analytics" },
  { icon: Users, title: "Marketing Analytics" },
];

export default function WhyCustomCRMClean() {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <ScrollReveal direction="up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 leading-tight mb-4">
            Why Build a{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              Custom CRM
            </span>{" "}
            for Business?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Build smarter systems tailored to your goals with advanced
            integration, analytics, and security features.
          </p>
        </div>
      </ScrollReveal>

      {/* Feature list */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.title} direction="up" delay={index * 0.1}>
            <TiltCard>
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-accent-primary)" }}
                >
                  <feature.icon size={20} className="text-white" />
                </div>
                <p className="text-lg text-gray-800 font-light">{feature.title}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
