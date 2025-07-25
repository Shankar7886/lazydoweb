import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
// import { Sparkles, ArrowRight } from "lucide-react";`
import PricingCalculator from "./calculter";
import PaymentCube3D from "./paymentgateway";

interface Feature {
  animation: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
  color: string;
}

const ShoppingAppShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(()=>{

  },[activeFeature,mousePosition,scrollY])

  

  // Animated Tracking Component
  const TrackingAnimation = () => (
    <div className="relative w-20 h-20 mx-auto">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-2 bg-white rounded-full flex items-center justify-center"
        animate={{
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div className="relative w-8 h-8">
          {/* GPS Pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full" />
          </motion.div>
          {/* Orbiting dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${15 + i * 3}px 0px`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );

  const features: Feature[] = [
    {
      animation: <PricingCalculator />,
      title: "Automated Price Calculation",
      description:
        "Streamline pricing variables such as discounts, taxes, and handling charges using automated ERP integration. Prices are computed dynamically as a function of product category, location, and offers—freeing retailers from as much as possible manual input.",
      highlight: "Dynamic ERP Integration",
      color: "from-yellow-400 via-amber-300 to-orange-400",
    },
    {
      animation: <PaymentCube3D />,
      title: "Multiple Payment Gateways",
      description:
        "Offer your customers different safe as well as convenient payment methods. From debit/credit cards and bank-linked accounts to mobile wallets, we incorporate all mainstream payment modes to provide a seamless and safe checkout experience.",
      highlight: "Universal Payment Support",
      color: "from-amber-400 via-yellow-300 to-orange-400",
    },
    {
      animation: <TrackingAnimation />,
      title: "Live Order Tracking",
      description:
        "Heighten customer satisfaction with real-time tracking capabilities. Your customer will get real-time updates of the status of their order via email, SMS, and push notification. Our system integrates Google's Geolocation API so you can let your customer know exactly where their order is down to the exact minute!",
      highlight: "Real-time GPS Integration",
      color: "from-yellow-500 via-amber-300 to-orange-400",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Main Content */}
      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className=" flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light text-gray-900 tracking-tight leading-tight flex justify-center items-center text-center -mt-2"
            >
              <span className="block">
                <span className="bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 bg-clip-text text-transparent font-normal">
                  Key Features
                </span>
              </span>
            </motion.div>
         
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          ref={ref}
          className="py-12 px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}

            {/* Features List */}
            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
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
                      {/* <motion.div
                        className="relative w-60 h-48 mx-auto"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      > */}
                        {/* Rotating Ring */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-xl`}
                        />
                        <div className="absolute inset-4 rounded-full border border-dashed border-amber-200" />

                        {/* Center Animation */}
                        <motion.div
                        //   className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            rotate: [0, 0],
                          }}
                          transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {feature.animation}
                        </motion.div>

                        {/* Orbiting Elements */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                            style={{
                              top: "50%",
                              left: "50%",
                              transformOrigin: `${80 + i * 15}px 0px`,
                            }}
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 8 + i * 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.8,
                            }}
                          />
                        ))}
                      </motion.div>
                    {/* </motion.div> */}

                    {/* Feature Content */}
                    <div className="flex-1 space-y-4">
                      <motion.div
                        className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-amber-200/50 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-xs font-medium text-amber-600">
                          {feature.highlight}
                        </span>
                      </motion.div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ShoppingAppShowcase;
