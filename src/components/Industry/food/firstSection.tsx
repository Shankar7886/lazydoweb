import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useGoToContactPage from "../../Contact/contactFn";
import ImageHostLink from "../../../variable";
import GradientMesh from "../../../lib/GradientMesh";
import { useMagneticButton } from "../../../lib/useMagneticButton";

const FoodAppLanding: React.FC = () => {
  const goContact = useGoToContactPage();
  const magnet = useMagneticButton();

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ marginTop: "-50px" }}
    >
      <GradientMesh colors={["#fef3cd", "#fde8e1", "#ffe0cc"]} />

      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${ImageHostLink}food1.jpg`}
          alt="Delicious Food"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-white text-5xl md:text-6xl font-thin leading-tight tracking-tight">
              Build Your{" "}
              <span
                className="font-semibold drop-shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-accent-primary), #ff8c69)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium
              </span>{" "}
              Food Ordering App
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Serve your customers with a stunning, lightning-fast, and
              mobile-friendly experience that elevates food delivery.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.button
              ref={magnet.ref as React.RefObject<HTMLButtonElement>}
              style={{ x: magnet.x, y: magnet.y, background: "var(--color-accent-primary)" } as React.CSSProperties}
              onClick={goContact}
              className="text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAppLanding;
