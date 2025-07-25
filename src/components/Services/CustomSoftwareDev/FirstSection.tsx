import { motion } from "framer-motion";
import dahsboard from "../../../assets/anotherTypo.png"


export default function CustomWebDevPage() {
  return (
    <div className="relative z-10 py-5 pt-40 px-6">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-20 max-w-4xl mx-auto text-center"
      >
        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full origin-center" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center text-center space-x-3 text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight leading-snug"
        >
          <span className="text-neutral-800">Custom</span>
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
            Web Development
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed font-light"
        >
          Crafting{" "}
          <motion.span
            className="inline-block text-red-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            bespoke digital experiences
          </motion.span>{" "}
          with{" "}
          <motion.span
            className="inline-block text-red-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            refined aesthetics
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="inline-block text-red-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            seamless functionality
          </motion.span>
          .
        </motion.p>
      </motion.div>

      {/* Image Section */}
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 1 }}
  className="relative z-10 mt-24 flex justify-center"
>
  <div className="w-[80%] border border-gray-300 rounded-3xl overflow-hidden shadow-xl">
    <img
      src={dahsboard}
      alt="Custom Web Development"
      className="w-full object-contain"
       loading="lazy"
    />
  </div>
</motion.div>
    </div>
  );
}
