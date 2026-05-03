import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react";
import GradientMesh from "../../../lib/GradientMesh";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const PremiumFinanceSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 px-6">
      <GradientMesh colors={["#e8e6ff", "#fde8e1", "#d4f0e8"]} intensity={0.5} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-thin leading-tight tracking-tight text-gray-900">
                  <span className="font-extralight text-gray-600">Revolutionizing</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent-primary), #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 600,
                    }}
                  >
                    Finance
                  </span>
                  <br />
                  <span className="font-light">Through Smart</span>
                  <br />
                  <span className="font-medium text-gray-800">Digital Innovation</span>
                </h2>

                <div
                  className="w-20 h-1 rounded-full"
                  style={{ background: "var(--color-accent-primary)" }}
                />
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="font-light">
                  Join the future of banking and financial services with{" "}
                  <span className="font-medium text-gray-900">Lazy Do</span>.
                  Our innovative digital solutions are revolutionizing the banking
                  and financial institution operations—streamlining productivity,
                  reducing costs, and improving customer experiences.
                </p>

                <p className="font-light">
                  While the financial environment transforms at lightning speed,
                  banks and finance corporations are moving faster to adopt web
                  and mobile phone application solutions as a means to remain
                  ahead in the curve. By selecting Lazy Do, numerous high-profile
                  banking and finance companies have opened the door to sustainable
                  growth within this highly competitive market.
                </p>

                <p className="font-light">
                  In the past few years, we have successfully implemented a
                  variety of strong digital finance platforms such as mobile
                  banking, financial management, and fintech solutions for
                  government organizations as well as public sector banks.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Premium Visual Element */}
          <ScrollReveal direction="right" delay={0.2}>
            <TiltCard>
              <div className="glass-card rounded-2xl p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "var(--color-accent-primary)" }}
                    />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">Lazy Do</div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50/60 rounded-xl">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(200,57,43,0.1)" }}
                    >
                      <Smartphone
                        className="w-5 h-5"
                        style={{ color: "var(--color-accent-primary)" }}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Mobile Banking</div>
                      <div className="text-sm text-gray-500">Next-gen solutions</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50/60 rounded-xl">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Security First</div>
                      <div className="text-sm text-gray-500">Bank-grade protection</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50/60 rounded-xl">
                    <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-lime-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Digital Growth</div>
                      <div className="text-sm text-gray-500">Scalable platforms</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Chart */}
                <div
                  className="rounded-xl p-6 text-white mt-4"
                  style={{ background: "var(--color-accent-primary)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium opacity-90">
                      Performance Metrics
                    </div>
                    <Globe className="w-5 h-5 opacity-75" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-90">Cost Reduction</span>
                      <span className="font-bold">45%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-3/4 transition-all duration-1000" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-90">Productivity Gain</span>
                      <span className="font-bold">65%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-4/5 transition-all duration-1000 delay-300" />
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PremiumFinanceSection;
