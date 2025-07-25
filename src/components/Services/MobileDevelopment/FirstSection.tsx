import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
// import dashboardImage from "../../../assets/Screenshot 2025-06-04 145322.png";
// import smartphoneImage from "../../../assets/smartphone-mockup.png"; // Add your smartphone image here
const smartphoneImage = "ChatGPT Image Jun 19, 2025, 10_19_51 AM.png"
export default function FirstSection() {
  return (
    <div className="relative z-10 py-5 pt-40 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left"
        >
          {/* Decorative Line */}
          <div className="mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight leading-snug">
            <span className="text-neutral-800">Mobile</span>{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
              Application Development
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            A fast-growing IT company that provides holistic IT solutions to
            businesses across geographies — delivering{" "}
            <span className="text-red-600">elegant mobile apps</span> with{" "}
            <span className="text-red-500">intuitive UX</span> and{" "}
            <span className="text-red-400">robust performance</span>.
          </p>
        </motion.div>

        {/* Right Image (Smartphone) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-[250px] md:w-[300px] border border-gray-300 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ImageHostLink +smartphoneImage}
              alt="Mobile App"
              className="w-full h-full object-cover"
               loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
