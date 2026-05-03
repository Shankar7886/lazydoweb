import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";

export default function DigitalMarketingCompanySection() {
  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-10">
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(200,57,43,0.15), transparent)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(232,93,62,0.12), transparent)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-thin tracking-wide leading-tight mb-3">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Digital Marketing
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-px mx-auto mb-2"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-accent-primary), transparent)",
              }}
            />
            <h3 className="text-xl font-extralight tracking-widest text-slate-600">
              Company
            </h3>
          </div>
        </ScrollReveal>

        {/* Paragraphs */}
        <div className="space-y-6 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-base md:text-lg font-light leading-relaxed text-slate-700 tracking-wide">
              Digital marketing is not merely a service at{" "}
              <span
                className="font-medium"
                style={{ color: "var(--color-accent-primary)" }}
              >
                Lazy Do
              </span>
              — it's a collaborative partnership built on trust and measurable
              results.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base font-light text-slate-600 tracking-wide max-w-3xl mx-auto">
              From social campaigns to smart email workflows, our experts propel
              businesses with customized, performance-driven strategies.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-sm font-light text-slate-500 tracking-wide max-w-2xl mx-auto">
              Our goal is simple: unlock your growth in a noisy digital world.
              Every pixel and post is crafted with intention.
            </p>
          </ScrollReveal>
        </div>

        {/* Signature dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-2 h-2 rounded-full shadow-lg"
            style={{
              background: "var(--color-accent-primary)",
              boxShadow: "0 0 14px rgba(200,57,43,0.4), 0 0 30px rgba(200,57,43,0.2)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
