import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import mobileLottie from "../../../assets/mobile-banking.json";
import GradientMesh from "../../../lib/GradientMesh";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const features = {
  user: [
    "Secure login",
    "Conveniently transfer funds anytime",
    "Recharge & bill payment",
    "Request more services",
    "Booking",
    "Can check offers",
    "Security alerts",
    "Manage account and settings",
    "24-hour access to balances and transactions",
  ],
  admin: [
    "Easy login for the admin",
    "Provide security alerts/notifications",
    "Manage requests",
    "Can manage content and various offerings",
    "Manage status",
    "Can manage credits",
    "View and manage reports",
    "Manage users (Add/Edit/Delete)",
    "Generate user passwords",
  ],
};

export default function TravelAppFeatures() {
  const [activeTab, setActiveTab] = useState("user");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.03,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    }),
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative overflow-hidden text-slate-900 px-6 py-20">
      <GradientMesh colors={["#e8e6ff", "#fde8e1", "#d4f0e8"]} intensity={0.4} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header and Animation */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="flex items-center mb-3">
                <div
                  className="w-0.5 h-6 mr-3"
                  style={{ background: "var(--color-accent-primary)" }}
                />
                <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Access Control
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-thin mb-3 tracking-tight text-slate-900">
                User &amp; Admin{" "}
                <span style={{ color: "var(--color-accent-primary)" }}>Features</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Empower users and administrators with feature-rich panels that
                provide control, security, and flexibility.
              </p>

              {/* Tabs */}
              <div className="inline-flex bg-slate-50 rounded-lg p-0.5 border border-slate-200">
                {[
                  { key: "user", label: "User Panel" },
                  { key: "admin", label: "Admin Panel" },
                ].map((tab) => (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.key
                        ? "text-slate-900 bg-white shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="activeTabBanking"
                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                        style={{
                          border: "1px solid rgba(200,57,43,0.3)",
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Lottie Animation */}
          <ScrollReveal direction="right" delay={0.2}>
            <TiltCard>
              <div className="glass-card rounded-2xl p-4 w-full flex justify-center md:justify-end">
                <div className="w-56 h-56 md:w-72 md:h-72">
                  <Lottie
                    animationData={mobileLottie}
                    loop
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Feature Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {features[activeTab as keyof typeof features].map((feature, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                custom={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
              >
                <div
                  className="relative rounded-xl p-5 border transition-all duration-300 h-full"
                  style={{
                    background: "rgba(248,250,252,0.6)",
                    borderColor:
                      hoveredIndex === index
                        ? "rgba(200,57,43,0.3)"
                        : "rgba(226,232,240,0.6)",
                  }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full mb-4"
                    animate={{
                      backgroundColor:
                        hoveredIndex === index
                          ? "var(--color-accent-primary)"
                          : "#94a3b8",
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <h3 className="text-slate-900 text-sm font-medium leading-snug mb-4 group-hover:text-red-800 transition-colors duration-300">
                    {feature}
                  </h3>
                  <div className="w-full h-px bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--color-accent-primary)" }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "35%" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.03,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center space-x-4 text-xs text-slate-400 tracking-wider">
            <span>SMART PLATFORM</span>
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: "var(--color-accent-primary)" }}
            />
            <span>ROLE-BASED FEATURES</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
