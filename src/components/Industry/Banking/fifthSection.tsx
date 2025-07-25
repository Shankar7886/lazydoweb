import { motion } from "framer-motion";

const fintechItems = [
  {
    title: "Smart Connected Banking",
    desc: "We enhance financial institutions with technology that promotes connectivity between services. From core banking to enterprise-wide solutions, we assist you in driving business performance.",
  },
  {
    title: "IoT-Driven Financial Solutions",
    desc: "With Blockchain, IoT, and Cryptocurrency, we marry innovation with prudence—providing revolutionary solutions that empower banks to innovate securely.",
  },
  {
    title: "Unmatched Data Security",
    desc: "Security is the foundation of our apps. Our frameworks use strong encryption and advanced practices to keep sensitive financial data safe, ordered, and accessible.",
  },
];

export default function FintechExpertiseSection() {
  return (
    <section className="relative z-10 py-28 px-6 md:px-20 bg-white text-slate-900 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-green-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Our Expertise in{" "}
            <span className="text-green-600">Fintech & Banking</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base">
            Building modern financial solutions with trust, intelligence, and performance.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {fintechItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold mb-3 text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
