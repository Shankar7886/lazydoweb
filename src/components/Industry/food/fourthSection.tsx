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
// import workflowImage from "../../../assets/developmentProcess.png"; // Replace with your actual image path
import ImageHostLink from "../../../variable";

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
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Workflow Steps */}
        <div className="space-y-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Our Seamless{" "}
              <span className="text-orange-400 font-semibold">Development Workflow</span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl">
              We craft bold, high-performance food ordering apps using a streamlined and proven approach.
            </p>
          </motion.div>

          {/* Step List */}
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={`${ImageHostLink}developmentProcess.png`}
            alt="App Workflow Visual"
            className="w-full h-auto object-cover rounded-xl"
             loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentWorkflowSection;
