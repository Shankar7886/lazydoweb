import Lottie from "lottie-react";
import bankingLottie from "../../../assets/banking.json";
import GradientMesh from "../../../lib/GradientMesh";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const items = [
  {
    title: "Partnering for Progress",
    desc: "We've worked with private and public banking organizations to deliver high-impact solutions that drive real-world outcomes.",
  },
  {
    title: "In-Depth Collaboration for Tailored Results",
    desc: "Before writing a single line of code, our lead strategists hold deep consultations to clarify objectives.",
  },
  {
    title: "Strategic Project Evaluation",
    desc: "We analyze every phase using cutting-edge tech to ensure scalability and long-term success.",
  },
  {
    title: "Performance-Centric Methodology",
    desc: "We don't just build apps—we solve industry problems with performance as the benchmark.",
  },
  {
    title: "Creating a Seamless Digital Ecosystem",
    desc: "We combine advanced features and smart tech to build scalable, intelligent platforms.",
  },
  {
    title: "Intuitive User Interfaces",
    desc: "Designed to feel effortless across devices, offering a visually engaging experience.",
  },
  {
    title: "Design That Delivers",
    desc: "Modern tools and sleek design that mirror your brand and boost satisfaction.",
  },
  {
    title: "Powerful Admin Dashboards",
    desc: "We create white-labeled, feature-rich admin panels for control, insights, and growth.",
  },
];

export default function FinanceShowcase() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 lg:py-32">
      <GradientMesh colors={["#e8e6ff", "#fde8e1", "#d4f0e8"]} intensity={0.5} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Lottie in TiltCard */}
        <ScrollReveal direction="left" delay={0.1}>
          <TiltCard>
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 flex justify-center items-center order-2 md:order-1">
              <Lottie
                animationData={bankingLottie}
                loop
                style={{ width: 200, height: 200 }}
              />
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Right: Title + Feature Panels */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 order-1 md:order-2">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-gray-900 leading-tight">
              Precision-Engineered{" "}
              <span style={{ color: "var(--color-accent-primary)", fontWeight: 600 }}>
                Finance
              </span>{" "}
              Solutions
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              For institutions seeking innovation, performance, and digital elegance.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {items.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.07}>
                <div
                  className="border-l-4 pl-4 sm:pl-6 hover:opacity-80 transition-opacity duration-300"
                  style={{ borderColor: "var(--color-accent-primary)" }}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
