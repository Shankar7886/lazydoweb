"use client";

import { motion } from "framer-motion";
import {
  MapPin, Camera, Radio, HardDrive, MessageCircle, Bluetooth,
  Scan, Trophy, Hand, Brain, Zap, CreditCard, Settings, Puzzle
} from "lucide-react";

type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

type Feature = {
  name: string;
  tagline: string;
  icon: React.ReactNode;
  position: Position;
  mobilePosition: Position;
};

const features: Feature[] = [
  { 
    name: "Location / GPS", 
    tagline: "Precise tracking", 
    icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "15%", left: "5%" },
    mobilePosition: { top: "10%", left: "2%" }
  },
  { 
    name: "Camera Filters", 
    tagline: "Enhanced photos", 
    icon: <Camera className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "30%", left: "5%" },
    mobilePosition: { top: "20%", left: "2%" }
  },
  { 
    name: "Live Streaming", 
    tagline: "Real-time broadcast", 
    icon: <Radio className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "45%", left: "5%" },
    mobilePosition: { top: "30%", left: "2%" }
  },
  { 
    name: "Offline Storage", 
    tagline: "No internet needed", 
    icon: <HardDrive className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "60%", left: "5%" },
    mobilePosition: { top: "40%", left: "2%" }
  },
  { 
    name: "Chat / Bots", 
    tagline: "Smart conversations", 
    icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "75%", left: "5%" },
    mobilePosition: { top: "60%", left: "2%" }
  },
  { 
    name: "Bluetooth", 
    tagline: "Seamless connect", 
    icon: <Bluetooth className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "90%", left: "5%" },
    mobilePosition: { top: "70%", left: "2%" }
  },
  { 
    name: "Face Recognition", 
    tagline: "Secure auth", 
    icon: <Scan className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "15%", right: "5%" },
    mobilePosition: { top: "10%", right: "2%" }
  },
  { 
    name: "Background Processing", 
    tagline: "Smooth performance", 
    icon: <Settings className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "30%", right: "5%" },
    mobilePosition: { top: "20%", right: "2%" }
  },
  { 
    name: "Third-Party SDKs", 
    tagline: "Extended features", 
    icon: <Puzzle className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "45%", right: "5%" },
    mobilePosition: { top: "30%", right: "2%" }
  },
  { 
    name: "Gamification", 
    tagline: "Engaging UX", 
    icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "60%", right: "5%" },
    mobilePosition: { top: "40%", right: "2%" }
  },
  { 
    name: "Gestures", 
    tagline: "Intuitive control", 
    icon: <Hand className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "75%", right: "5%" },
    mobilePosition: { top: "60%", right: "2%" }
  },
  { 
    name: "AI Integration", 
    tagline: "Smart automation", 
    icon: <Brain className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "90%", right: "5%" },
    mobilePosition: { top: "70%", right: "2%" }
  },
  { 
    name: "Augmented Reality", 
    tagline: "Immersive experiences", 
    icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { top: "5%", left: "50%" },
    mobilePosition: { top: "5%", left: "50%" }
  },
  { 
    name: "Payment Gateway", 
    tagline: "Secure transactions", 
    icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5" />, 
    position: { bottom: "5%", left: "50%" },
    mobilePosition: { bottom: "10%", left: "50%" }
  },
];

export default function AppFeaturesSection() {
  return (
    <section className="relative w-full px-4 md:px-6 py-16 md:py-24 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin text-zinc-900 mb-3 px-4">
              Features That We Provide In Apps
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-sm md:text-base text-zinc-500 font-light tracking-wide max-w-xl mx-auto mt-4 px-4"
          >
            We provide advanced features to take your business apps to the next level.
          </motion.p>
        </div>

        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-36 md:w-48 lg:w-52 xl:w-60 h-56 md:h-72 lg:h-80 xl:h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-2.5 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-red-100 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10"></div>
                <div className="text-gray-600 text-center relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-2 md:mb-3 bg-gradient-to-r from-blue-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-xs md:text-sm font-medium">Your App Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          {features.map((feature, index) => {
            // Use mobile position on small screens, desktop position on larger screens
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const currentPosition = isMobile ? feature.mobilePosition : feature.position;
            
            const left = currentPosition.left
              ? parseFloat(currentPosition.left)
              : currentPosition.right
              ? 100 - parseFloat(currentPosition.right)
              : 50;
            const top = currentPosition.top
              ? parseFloat(currentPosition.top)
              : currentPosition.bottom
              ? 100 - parseFloat(currentPosition.bottom)
              : 50;

            const isTop = currentPosition.top ? parseFloat(currentPosition.top) < 50 : false;

            return (
             !isMobile ? <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div className="relative z-10 w-48 md:w-56 lg:w-60 h-20 md:h-22 lg:h-24 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/30 p-3 md:p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1 md:mb-1.5">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-r from-blue-500 to-red-600 rounded-md md:rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-800 leading-tight">{feature.name}</div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 pl-8 md:pl-9 leading-tight">{feature.tagline}</div>

                  {/* Connector Line */}
                  <div
                    className="absolute w-0.5 h-6 md:h-8 bg-gradient-to-b from-blue-500 to-red-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: isTop ? '100%' : '-1.5rem',
                    }}
                  />
                  {/* Connector Dot */}
                  <div
                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-red-600 rounded-full shadow-lg group-hover:scale-125 transition-all duration-300"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: isTop ? 'calc(100% + 1.5rem)' : '-0.75rem',
                    }}
                  />
                </div>
              </motion.div>:""
            );
          })}

          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity }, scale: { duration: 4, repeat: Infinity } }}
            className="absolute top-5 md:top-10 left-5 md:left-10 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-blue-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360, y: [0, -10, 0] }}
            transition={{ rotate: { duration: 15, repeat: Infinity }, y: { duration: 3, repeat: Infinity } }}
            className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-2 border-red-200 rounded-full opacity-20"
          />
        </div>

        {/* Mobile Feature List - Only visible on very small screens */}
        <div className="block md:hidden mt-8 px-4">
          <div className="grid grid-cols-1 gap-3">
            {features.slice(0, 6).map((feature, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-sm rounded-xl p-3 border border-white/30 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-md">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-800">{feature.name}</div>
                  <div className="text-xs text-gray-600">{feature.tagline}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            {/* <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Features →
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}