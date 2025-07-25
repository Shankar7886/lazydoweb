import { motion } from "framer-motion";

import ImageHostLink from "../../../variable";

export default function CustomWebDevPage() {
  const  dashboardImage = "anotherlaptop1.webp";
  return (
    <div
      className="relative z-10 w-full h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${ImageHostLink +dashboardImage})`,
      }}
    >
      {/* Overlay to improve text readability without heavy blur */}
      <div className="w-full h-full bg-gradient-to-r from-white/80 via-white/50 to-transparent flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl px-6 md:px-16"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full origin-left" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 tracking-tight leading-snug"
          >
            
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
              Web Development
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-6 text-lg md:text-xl text-gray-800 max-w-xl leading-relaxed font-light"
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
      </div>
    </div>
  );
}
