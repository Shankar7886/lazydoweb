import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
const laptopImage = "pexels-minan1398-1087727.jpg";
// Using a laptop image placeholder
// const laptopImage = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&crop=center";

export default function FirstSection() {
  return (
    <div className="relative z-10 py-5 pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8"
        >
          {/* Main Heading - Responsive Text Sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 tracking-tight leading-[1.1] -mt-2 sm:-mt-4"
          >
            <span className="block mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 bg-clip-text text-transparent font-normal">
                Online Shopping
              </span>
            </span>
            <span className="block">
              <span className="text-gray-700 font-extralight">App</span>{" "}
              <span className="bg-gradient-to-r from-red-600 via-amber-600 to-red-700 bg-clip-text text-transparent font-normal italic">
                Development
              </span>
            </span>
          </motion.h1>

          {/* Subtitle - Responsive Text and Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="space-y-3 sm:space-y-4"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light px-2 sm:px-0">
              Our experienced developers build
              <span className="text-amber-700 font-medium">
                {" "}
                sophisticated platform{" "}
              </span>
              by using high-degree of technologies to streamline your online
              business.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light px-2 sm:px-0">
              With our eCommerce solutions, we make it easy to build and run
              your online business.
            </p>
          </motion.div>

          {/* Features - Responsive Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-red-500 rounded-full shadow-sm" />
              <span className="text-sm text-gray-600 font-medium tracking-wide">
                Advanced Technology
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full shadow-sm" />
              <span className="text-sm text-gray-600 font-medium tracking-wide">
                Expert Development
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-red-600 rounded-full shadow-sm" />
              <span className="text-sm text-gray-600 font-medium tracking-wide">
                Business Solutions
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons - Add responsive button section */}
        </motion.div>

        {/* Right Image - Responsive Laptop Display */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            {/* Responsive backdrop */}
            <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16 bg-gradient-to-br from-amber-100/30 via-red-50/20 to-amber-100/30 rounded-full blur-2xl sm:blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700" />

            {/* Premium laptop container - Responsive sizes */}
            <motion.div
              whileHover={{
                rotateY: 5,
                rotateX: 2,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative transform-gpu perspective-1000"
            >
              {/* Laptop base - Responsive width */}
              <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px]">
                {/* Screen */}
                <div className="relative">
                  {/* Screen bezel - Responsive padding */}
                  <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 p-2 sm:p-3 rounded-t-xl sm:rounded-t-2xl shadow-xl sm:shadow-2xl">
                    <div className="bg-gradient-to-b from-gray-800 to-black rounded-t-lg sm:rounded-t-xl p-1 shadow-inner">
                      <div className="bg-black rounded-t-md sm:rounded-t-lg p-1 sm:p-2">
                        {/* Screen container */}
                        <div className="relative rounded-t-sm sm:rounded-t-md overflow-hidden bg-white aspect-[16/10]">
                          {/* Premium screen overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-50/10 z-10 pointer-events-none" />

                          {/* Laptop screen content */}
                          <img
                            src={ImageHostLink + laptopImage}
                            alt="Luxury Development Experience"
                            className="w-full h-full object-cover filter contrast-110 saturate-110"
                             loading="lazy"
                          />

                          {/* Luxury overlay */}
                          <motion.div
                            animate={{
                              opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 bg-gradient-to-t from-amber-600/5 via-transparent to-red-600/5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop keyboard base - Responsive padding */}
                  <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-2 sm:p-3 lg:p-4 rounded-b-xl sm:rounded-b-2xl shadow-lg sm:shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-md sm:rounded-lg p-2 sm:p-3 shadow-inner">
                      {/* Trackpad - Responsive size */}
                      <div className="w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-sm sm:rounded-md mx-auto mt-1 sm:mt-2 shadow-sm border border-gray-400/30" />
                    </div>
                  </div>
                </div>

                {/* Floating elements - Responsive positioning and sizes */}
                <motion.div
                  animate={{
                    y: [-6, 8, -6],
                    x: [0, 3, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 sm:-top-4 lg:-top-6 -right-4 sm:-right-6 lg:-right-8 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-amber-400 to-red-500 rounded-full opacity-40 blur-sm"
                />

                <motion.div
                  animate={{
                    y: [8, -6, 8],
                    x: [0, -3, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-3 sm:-left-4 lg:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-400 to-amber-500 rounded-full opacity-30 blur-sm"
                />

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-1/2 -right-2 sm:-right-3 lg:-right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-500 to-red-400 rounded-full opacity-35 blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
