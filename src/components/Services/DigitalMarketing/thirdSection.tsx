import React from "react";
import {
  Megaphone,
  FileText,
  Search,
  MonitorSmartphone,
  MousePointerClick,
  Mail,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
  Users2,
  Globe,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import type { RefObject } from "react";
import useGoToContactPage from "../../Contact/contactFn";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    desc: "Insightful scale-up plans using digital automation and competitive brand strategy.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Engaging content tailored to build trust and drive customer actions.",
  },
  {
    icon: Search,
    title: "Search Engine Marketing",
    desc: "Improve search rankings and web visibility with SEO expertise.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Advertising",
    desc: "Maximize reach and impact through targeted digital campaigns.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Marketing",
    desc: "Certified AdWords experts managing ROI-focused paid advertising.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Compelling campaigns designed to convert and nurture your audience.",
  },
];

const process: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: "Project Requirements",
    desc: "Business Analysts define precise project goals and strategies.",
  },
  {
    icon: BarChart3,
    title: "Domain Analysis",
    desc: "Thorough SEO analysis to understand market position and opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Traffic Generation",
    desc: "Keyword-based campaigns crafted for engagement and ranking.",
  },
  {
    icon: Users2,
    title: "Leads Generation",
    desc: "Lead conversion strategies tailored to your audience and channels.",
  },
  {
    icon: Globe,
    title: "Grow Your Business",
    desc: "Turn traffic into loyal customers through proven marketing methods.",
  },
];

const ServiceCard: React.FC<{ item: ServiceItem; delay: number }> = ({
  item,
  delay,
}) => {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <TiltCard glareEffect>
        <div className="glass-card rounded-2xl p-6 h-full flex flex-col gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "var(--color-accent-primary)" }}
          >
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-light text-gray-900 tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

const DigitalMarketingServices: React.FC = () => {
  const goContact = useGoToContactPage();
  const mag = useMagneticButton();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Services heading */}
            <ScrollReveal direction="up">
              <div className="relative text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight leading-tight">
                  Our Innovative{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                    }}
                  >
                    Digital Marketing
                  </span>{" "}
                  Services Include:
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                  Designed to transform your business with cutting-edge strategies
                  and seamless execution.
                </p>
              </div>
            </ScrollReveal>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-32">
              {services.map((service, i) => (
                <ServiceCard key={service.title} item={service} delay={i * 0.08} />
              ))}
            </div>

            {/* Process heading */}
            <ScrollReveal direction="up">
              <div className="relative text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight leading-tight">
                  Our Working{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                    }}
                  >
                    Process
                  </span>
                </h2>
                <p className="text-lg text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
                  A refined methodology that delivers exceptional results through
                  thoughtful planning and execution.
                </p>
              </div>
            </ScrollReveal>

            {/* Process Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {process.map((proc, i) => (
                <ServiceCard key={proc.title} item={proc} delay={i * 0.08} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-24">
              <motion.button
                ref={mag.ref as RefObject<HTMLButtonElement>}
                style={{ x: mag.x, y: mag.y, background: "var(--color-accent-primary)" }}
                data-cursor="hover"
                onClick={goContact}
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play className="w-5 h-5" />
                <span>Get Started Today</span>
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
