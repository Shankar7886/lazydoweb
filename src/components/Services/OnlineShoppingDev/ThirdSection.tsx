import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import PricingCalculator from "./calculter";
import PaymentCube3D from "./paymentgateway";

interface Feature {
  animation: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const TrackingAnimation = () => (
  <div className="relative w-20 h-20 mx-auto">
    <motion.div
      className="absolute inset-0 rounded-full shadow-xl"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
      }}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-2 bg-white rounded-full flex items-center justify-center"
      animate={{ rotate: [0, -180, -360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-warm))",
          }}
          animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--color-accent-primary)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

const ShoppingAppShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const features: Feature[] = [
    {
      animation: <PricingCalculator />,
      title: "Automated Price Calculation",
      description:
        "Streamline pricing variables such as discounts, taxes, and handling charges using automated ERP integration. Prices are computed dynamically as a function of product category, location, and offers—freeing retailers from as much as possible manual input.",
      highlight: "Dynamic ERP Integration",
    },
    {
      animation: <PaymentCube3D />,
      title: "Multiple Payment Gateways",
      description:
        "Offer your customers different safe as well as convenient payment methods. From debit/credit cards and bank-linked accounts to mobile wallets, we incorporate all mainstream payment modes to provide a seamless and safe checkout experience.",
      highlight: "Universal Payment Support",
    },
    {
      animation: <TrackingAnimation />,
      title: "Live Order Tracking",
      description:
        "Heighten customer satisfaction with real-time tracking capabilities. Your customer will get real-time updates of the status of their order via email, SMS, and push notification. Our system integrates Google's Geolocation API so you can let your customer know exactly where their order is!",
      highlight: "Real-time GPS Integration",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Key Features heading */}
      <section className="flex items-center justify-center px-4 py-8">
        <div className="text-center max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">
              Key{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Features
              </span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Features section */}
      <section
        ref={ref}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <TiltCard>
                  <div className="glass-card rounded-2xl p-6">
                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-8`}
                    >
                      {/* Feature Animation */}
                      <motion.div
                        className="flex-1 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-4 rounded-full border border-dashed border-zinc-200" />
                        <div className="relative z-10">{feature.animation}</div>
                      </motion.div>

                      {/* Feature Content */}
                      <div className="flex-1 space-y-4">
                        <motion.div
                          className="inline-block px-3 py-1 rounded-full border shadow-sm"
                          style={{ borderColor: "var(--color-accent-primary)", background: "rgba(200,57,43,0.06)" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span
                            className="text-xs font-medium"
                            style={{ color: "var(--color-accent-primary)" }}
                          >
                            {feature.highlight}
                          </span>
                        </motion.div>

                        <h3 className="text-xl md:text-2xl font-light text-slate-800 leading-tight">
                          {feature.title}
                        </h3>

                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingAppShowcase;
