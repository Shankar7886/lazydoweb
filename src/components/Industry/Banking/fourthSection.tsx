import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import mobileLottie from "../../../assets/mobileBanking.json"; // Replace path

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
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header and Animation */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-0.5 h-6 bg-green-500 mr-3"></div>
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Access Control
              </span>
            </div>
            <h1 className="text-4xl font-light mb-3 tracking-tight text-slate-900">
              User & Admin <span className="text-green-600">Features</span>
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Empower users and administrators with feature-rich panels that provide control, security, and flexibility.
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
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-md shadow-sm border border-green-200/60"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="w-56 h-56 md:w-72 md:h-72">
              <Player autoplay loop src={mobileLottie} className="w-full h-full" />
            </div>
          </motion.div>
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
                <div className="relative bg-slate-50/60 rounded-xl p-5 border border-slate-200/60 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.div
                    className="w-1.5 h-1.5 bg-green-400 rounded-full mb-4"
                    animate={{
                      backgroundColor: hoveredIndex === index ? "#059669" : "#10b981",
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <h3 className="text-slate-900 text-sm font-medium leading-snug mb-4 group-hover:text-green-800 transition-colors duration-300">
                    {feature}
                  </h3>
                  <div className="w-full h-px bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
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
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span>ROLE-BASED FEATURES</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
