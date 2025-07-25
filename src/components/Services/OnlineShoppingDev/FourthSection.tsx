import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = {
  user: [
    "Content management capabilities",
    "Add/Remove products", 
    "Cart",
    "Safe and secured",
    "Promotion and discount sections",
    "Multiple payment options",
    "An easy-to-use checkout",
  ],
  admin: [
    "User management",
    "Manage shipping methods",
    "Manage payments", 
    "Manage products",
    "Manage app & store settings",
    "Database backup & restore",
    "Database cleanup options",
    "Third party integration",
    "Discount management",
  ],
};

export default function LuxuryFeaturesRefined() {
  const [activeTab, setActiveTab] = useState("user");
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 16,
    },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.02,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }),
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen  text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <div className="w-0.5 h-8 bg-amber-500 mr-4"></div>
            <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Platform Capabilities
            </span>
          </div>
          
          <h1 className="text-4xl font-light mb-3 tracking-tight text-slate-900">
            Features &amp; <span className="text-amber-600">Functionality</span>
          </h1>
          
          <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
            Comprehensive solutions engineered for precision and exceptional user experience.
          </p>
        </motion.div>

        {/* Compact Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex bg-slate-50 rounded-lg p-0.5 border border-slate-200">
            {[
              { key: "user", label: "User Features" },
              { key: "admin", label: "Administrative" }
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
                    className="absolute inset-0 bg-white rounded-md shadow-sm border border-amber-200/60"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Compact Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
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
                <div className="relative bg-slate-50/60 rounded-xl p-5 border border-slate-200/60 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 h-full">
                  
                  {/* Number indicator */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Golden accent */}
                  <motion.div
                    className="w-1.5 h-1.5 bg-amber-400 rounded-full mb-4"
                    animate={{
                      backgroundColor: hoveredIndex === index ? "#f59e0b" : "#fbbf24",
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Content */}
                  <h3 className="text-slate-900 text-sm font-medium leading-snug mb-4 group-hover:text-amber-800 transition-colors duration-300">
                    {feature}
                  </h3>
                  
                  {/* Progress indicator */}
                  <div className="w-full h-px bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "35%" }}
                      transition={{ 
                        duration: 0.8,
                        delay: index * 0.03,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Minimal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center space-x-4 text-xs text-slate-400 tracking-wider">
            <span>ENTERPRISE GRADE</span>
            <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
            <span>SCALABLE ARCHITECTURE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}