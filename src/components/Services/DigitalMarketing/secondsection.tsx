import { motion } from "framer-motion";
import { useRef } from "react";

export default function DigitalMarketingCompanySection() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const luxuryFadeIn = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const shimmerEffect = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Background Glow Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-radial from-amber-300/30 via-orange-200/10 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-radial from-blue-200/20 via-indigo-100/5 to-transparent rounded-full blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-10 py-20"
      >
        {/* Heading */}
        <motion.div variants={luxuryFadeIn} className="text-center mb-10">
          <motion.h2
            variants={shimmerEffect}
            animate="animate"
            className="text-4xl md:text-5xl font-light tracking-wide leading-tight mb-3 cursor-default"
            style={{
              background:
                "linear-gradient(45deg, #b8860b, #2c3e50, #d4af37, #34495e)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Marketing
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-2"
          />
          <motion.h3 className="text-xl font-extralight tracking-widest text-slate-600">
            Company
          </motion.h3>
        </motion.div>

        {/* Paragraphs */}
        <motion.div variants={luxuryFadeIn} className="space-y-6 text-center">
          <motion.p
            whileHover={{
              scale: 1.01,
              textShadow: "0 0 10px rgba(184, 134, 11, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="text-base md:text-lg font-light leading-relaxed text-slate-700 tracking-wide cursor-default"
          >
            Digital marketing is not merely a service at{" "}
            <motion.span
              whileHover={{
                color: "#b8860b",
                textShadow: "0 0 10px rgba(184, 134, 11, 0.3)",
              }}
              className="font-medium text-slate-800 cursor-default"
              style={{
                background: "linear-gradient(45deg, #2c3e50, #b8860b, #34495e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
             Lazy Do
            </motion.span>
            — it's a collaborative partnership built on trust and measurable
            results.
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.01, filter: "brightness(1.05)" }}
            transition={{ duration: 0.3 }}
            className="text-base font-light text-slate-600 tracking-wide max-w-3xl mx-auto"
          >
            From social campaigns to smart email workflows, our experts propel
            businesses with customized, performance-driven strategies.
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.01, color: "#475569" }}
            transition={{ duration: 0.3 }}
            className="text-sm font-light text-slate-500 tracking-wide max-w-2xl mx-auto"
          >
            Our goal is simple: unlock your growth in a noisy digital world.
            Every pixel and post is crafted with intention.
          </motion.p>
        </motion.div>

        {/* Signature Glow Dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full shadow-lg"
            style={{
              boxShadow:
                "0 0 14px rgba(245, 158, 11, 0.3), 0 0 30px rgba(245, 158, 11, 0.15)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
