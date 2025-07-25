import { motion } from "framer-motion";

const HeroSection = () => {
  return (
  <section className="relative w-full  flex items-start justify-center pt-40 text-center overflow-hidden">
      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
        >
          Bridging the Gap Between <br />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
            Business & Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We craft tailored digital solutions that empower ambitious businesses and drive real transformation.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
