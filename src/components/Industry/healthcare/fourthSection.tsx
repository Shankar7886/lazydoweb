import React, { useState, useEffect } from "react";
import { Blocks, Bot, BrainCircuit, Eye, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";


type TechItem = {
  id: string;
  label: string;
  icon: LucideIcon; // Use component, not JSX
  features?: string[];
  color: string;
  bgGradient: string;
  description: string;
};

const techStack: TechItem[] = [
  {
    id: "arvr",
    label: "AR/VR",
    icon: Eye,
    color: "text-purple-600",
    bgGradient: "from-purple-500 to-indigo-600",
    description: "Immersive experiences that transform healthcare delivery",
    features: [
      "Immersive 3D experiences",
      "Enhanced medical training",
      "Virtual patient interaction",
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain",
    icon: Blocks,
    color: "text-emerald-600",
    bgGradient: "from-emerald-500 to-teal-600",
    description: "Secure, transparent, and scalable data management",
    features: [
      "Improved transparency",
      "Secure patient data",
      "Scalable healthcare records",
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: BrainCircuit,
    color: "text-blue-600",
    bgGradient: "from-blue-500 to-cyan-600",
    description: "Intelligent automation for smarter healthcare decisions",
    features: ["Personalized care", "Predictive analytics", "Workflow automation"],
  },
  {
    id: "chatbot",
    label: "Chatbots",
    icon: Bot,
    color: "text-orange-600",
    bgGradient: "from-orange-500 to-red-500",
    description: "Always-available patient support and engagement",
    features: [
      "24/7 patient support",
      "Appointment scheduling",
      "Instant FAQ handling",
    ],
  },
];

const TechStackOverview: React.FC = () => {
  const [active, setActive] = useState("ai");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = techStack.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % techStack.length;
        return techStack[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Innovation-Driven Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Tech That Powers Our
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Healthcare Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Innovation is in our DNA at Lazy Do. We harness cutting-edge technologies 
            to create healthcare experiences that are smarter, faster, and more intuitive than ever before.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techStack.map((item) => {
            const isActive = active === item.id;
            const isHovered = hoveredCard === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative cursor-pointer transition-all duration-500 transform ${
                  isActive ? "scale-105" : isHovered ? "scale-102" : "scale-100"
                } ${isActive ? "z-20" : "z-10"}`}
              >
                <div
                  className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "border-blue-300 shadow-2xl shadow-blue-500/20"
                      : isHovered
                      ? "border-gray-200 shadow-xl"
                      : "border-gray-100 shadow-md"
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${item.bgGradient} ${
                      isActive ? "opacity-5" : ""
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div
                        className={`relative p-4 rounded-2xl transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-br ${item.bgGradient} text-white shadow-lg`
                            : `bg-gray-50 ${item.color} group-hover:bg-gray-100`
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 transition-transform duration-500 ${
                            isActive ? "scale-110" : ""
                          }`}
                        />
                        {isActive && (
                          <div className="absolute -top-1 -right-1">
                            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                          </div>
                        )}
                      </div>

                      <h3
                        className={`mt-3 text-lg font-bold transition-colors duration-300 ${
                          isActive ? item.color : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                    </div>

                    {isActive && (
                      <div className="flex justify-center mb-3">
                        <div
                          className={`w-1 h-8 bg-gradient-to-b ${item.bgGradient} rounded-full`}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Panel */}
        <div className="relative">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            {techStack.map((item) => {
              const isActive = active === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={`features-${item.id}`}
                  className={`transition-all duration-700 ${
                    isActive
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {isActive && (
                    <>
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient} text-white shadow-lg`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.label} Features</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {item.features?.map((feature, idx) => (
                          <div
                            key={idx}
                            className="group flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-gray-100 hover:border-gray-200 hover:bg-white/80 transition-all duration-300"
                          >
                            <div
                              className={`p-1 rounded-full bg-gradient-to-br ${item.bgGradient} shadow-sm`}
                            >
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Click on any technology above to explore its features
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackOverview;
