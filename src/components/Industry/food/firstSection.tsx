import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useGoToContactPage from "../../Contact/contactFn";
import ImageHostLink from "../../../variable";
import GradientMesh from "../../../lib/GradientMesh";
import { useMagneticButton } from "../../../lib/useMagneticButton";
import ParallaxText from "../../../lib/ParallaxText";

const FoodAppLanding: React.FC = () => {
  const goContact = useGoToContactPage();
  const magnet = useMagneticButton();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);
  const headY  = useTransform(scrollYProgress, [0, 1], ["4%",  "-4%"]);

  return (
    <>
      <ParallaxText text="FOOD & HOSPITALITY · RESTAURANT TECH ·" direction="right" />

      <section
        ref={sectionRef}
        className="min-h-screen relative"
        style={{ marginTop: "-50px" }}
      >
        <GradientMesh colors={["#fef3cd", "#fde8e1", "#ffe0cc"]} />

        {/* Background Image with parallax overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
            <img
              src={`${ImageHostLink}food1.jpg`}
              alt="Delicious Food"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Background blobs */}
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
          <motion.div style={{ y: blobY }} className="w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
              style={{ background: `rgba(234,88,12,0.12)` }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
              style={{ background: `rgba(234,88,12,0.10)` }} />
          </motion.div>
        </div>

        {/* Main Content with heading parallax */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
          <motion.div style={{ y: headY }} className="text-center max-w-5xl mx-auto space-y-12">
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
          </motion.div>
        </div>
      </section>

      <ParallaxText text="ORDER · DELIVER · SAVOR ·" direction="left" />
    </>
  );
};

export default FoodAppLanding;
