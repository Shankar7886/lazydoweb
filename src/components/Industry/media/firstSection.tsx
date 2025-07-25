import { motion } from "framer-motion";

import ImageHostLink from "../../../variable";

export default function FintechLanding() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-16 md:py-20 flex flex-col justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-gray-900 tracking-tight mb-6 md:mb-8">
              <span className="font-serif font-semibold text-red-700 block leading-snug">
                Media & Entertainment
              </span>
              <span className="font-serif font-normal text-red-600 block">
                Industry Services
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light tracking-wide">
              Empowering content creators, platforms, and distributors with
              next-gen digital solutions for immersive, engaging, and seamless
              entertainment experiences.
            </p>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2  p-6 md:p-10 lg:p-12 flex items-center justify-center">
          <img
            // src={camera}
            src={`${ImageHostLink}camera.jpg`}
            alt="Media and Entertainment"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md"
             loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
