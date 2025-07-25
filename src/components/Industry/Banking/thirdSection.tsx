import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import bankingLottie from "../../../assets/banking.json";

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
    <section className="relative min-h-screen bg-[#f9fafb] text-gray-800 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Floating Lottie in frosted glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/30 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 flex justify-center items-center order-2 md:order-1"
        >
          <Player 
            autoplay 
            loop 
            src={bankingLottie} 
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72" 
          />
        </motion.div>

        {/* Right: Title + Compact Feature Panels */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 order-1 md:order-2">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Precision-Engineered <span className="text-green-600">Finance</span> Solutions
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              For institutions seeking innovation, performance, and digital elegance.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-green-400/30 pl-4 sm:pl-6 hover:border-green-400/50 transition-colors duration-300"
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}