import React, {  useState } from "react";

import {
  Code,
  Globe,
  Smartphone,
  Palette,
  Shield,
  Headphones,
  ArrowRight,
  
  // CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

// Types


interface Service {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  gradient: string;
  delay: number;
}

// 3D Floating Shapes Component


// Enhanced 3D Background


const services: Service[] = [
  {
    title: "Custom Software Development",
    subtitle:
      "Enterprise-grade solutions built with precision engineering and scalable architecture.",
    icon: Code,
    gradient: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    title: "Web Development",
    subtitle:
      "Modern, responsive web applications that deliver exceptional user experiences.",
    icon: Globe,
    gradient: "from-emerald-500 to-emerald-600",
    delay: 0.2,
  },
  {
    title: "Mobile Applications",
    subtitle:
      "Native and cross-platform mobile solutions for iOS and Android ecosystems.",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600",
    delay: 0.3,
  },
  {
    title: "UI/UX Design",
    subtitle:
      "Human-centered design that transforms complex workflows into intuitive experiences.",
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
    delay: 0.4,
  },
  {
    title: "Quality Assurance",
    subtitle:
      "Comprehensive testing strategies ensuring reliability and performance excellence.",
    icon: Shield,
    gradient: "from-amber-500 to-orange-600",
    delay: 0.5,
  },
  {
    title: "Technical Support",
    subtitle:
      "Proactive monitoring and rapid response support for mission-critical systems.",
    icon: Headphones,
    gradient: "from-cyan-500 to-blue-600",
    delay: 0.6,
  },
];

export default function ElegantDigitalPartner() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-white py-20 px-6 overflow-hidden ">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
            Your Trusted
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Digital Partner
            </motion.span>
          </h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We craft exceptional digital experiences through innovative
            technology, thoughtful design, and strategic expertise.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${service.delay}s`,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-80 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-gray-200">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                />

                {/* Card content */}
                <div className="p-8 h-full flex flex-col items-center justify-center text-center relative">
                  {/* Icon */}
                  <div
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${
                      service.gradient
                    } shadow-lg transform transition-transform duration-300 ${
                      hoveredCard === index ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.subtitle}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`absolute bottom-6 right-6 transition-all duration-300 ${
                      hoveredCard === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-2"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
