import { motion } from "framer-motion";
import { Star, Users, Award, Clock, Crown } from "lucide-react";
import video1 from "../../assets/8426049-uhd_3840_2160_25fps.mp4";
import useGoToContactPage from "../Contact/contactFn";
import TiltCard from "../../lib/TiltCard";
import ScrollReveal from "../../lib/ScrollReveal";
import GradientMesh from "../../lib/GradientMesh";
import { useMagneticButton } from "../../lib/useMagneticButton";

const reasons = [
  {
    icon: Star,
    title: "Elite Development",
    description: "World-class engineers craft sophisticated solutions with precision.",
    color: "gold",
  },
  {
    icon: Users,
    title: "Partnership Excellence",
    description: "Lasting relationships built on trust and mutual success.",
    color: "platinum",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Rigorous testing ensures flawless performance.",
    color: "emerald",
  },
  {
    icon: Clock,
    title: "Precision Delivery",
    description: "Exceptional results delivered exactly when promised.",
    color: "sapphire",
  },
];

export default function LuxuryPartnerSection() {
  const goContact = useGoToContactPage();
  const mag = useMagneticButton();

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <GradientMesh colors={["#d4f0e8", "#fde8e1", "#e8e6ff"]} />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-600 shadow-sm text-xs"
            whileHover={{ scale: 1.02 }}
          >
            <Crown className="w-3 h-3" />
            <span className="font-medium tracking-widest uppercase">Premium Partnership</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 tracking-tight">
            Why Choose
            <span
              className="block font-thin bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
              style={{ paddingBottom: "20px" }}
            >
              Lazy Do
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto font-light">
            Where cutting-edge technology meets unparalleled expertise
          </p>
        </motion.div>

        {/* Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video relative">
                  <video
                    className="w-full h-full object-cover"
                    src={video1}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Features Grid - Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="glass-card rounded-xl p-4 flex items-start gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center shadow-sm shrink-0"
                    >
                      <item.icon className="w-4 h-4 text-gray-600" />
                    </motion.div>

                    <div className="space-y-1">
                      <h3 className="text-base font-light text-gray-900 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Compact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            ref={mag.ref as React.RefObject<HTMLButtonElement>}
            style={{ x: mag.x, y: mag.y }}
            data-cursor="hover"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
            whileTap={{ scale: 0.98 }}
            onClick={goContact}
          >
            <span>Start Your Journey</span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
