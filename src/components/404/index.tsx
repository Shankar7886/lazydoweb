import React from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import CompanyLogo from "../../assets/logogreen.png";
import ThreeScene from "../../lib/ThreeScene";
import FloatingShapes from "../../lib/scenes/FloatingShapes";
import { useMagneticButton } from "../../lib/useMagneticButton";

const LuxuryNotFoundPage: React.FC = () => {
  const mag = useMagneticButton();

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <section className="relative overflow-hidden min-h-screen mesh-bg flex flex-col items-center justify-center px-4">
      {/* Three.js background */}
      <ThreeScene
        style={{ position: "absolute", inset: 0, opacity: 0.08 }}
        disableOnMobile
      >
        <FloatingShapes wireframe primaryColor="#b4afab" />
      </ThreeScene>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.15 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="mb-16"
        >
          <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
            <img
              src={CompanyLogo}
              alt="Lazy Do Software"
              className="w-20 h-20 object-contain"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <h1 className="text-lg font-medium text-gray-900">
              Lazy Do Software Solution
            </h1>
          </div>
        </motion.div>

        {/* 404 Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-center max-w-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-8xl font-light text-gray-900 mb-8 tracking-tight"
          >
            404
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-3xl font-light text-gray-900 mb-4"
          >
            Page not found
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 mb-12 leading-relaxed font-light"
          >
            The page you're looking for can't be found.
          </motion.p>

          {/* Magnetic Back to Home button */}
          <motion.button
            ref={mag.ref as React.RefObject<HTMLButtonElement>}
            style={{ x: mag.x, y: mag.y }}
            onClick={handleHomeClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center z-10">
        <p className="text-sm text-gray-400">Error 404</p>
      </div>
    </section>
  );
};

export default LuxuryNotFoundPage;
