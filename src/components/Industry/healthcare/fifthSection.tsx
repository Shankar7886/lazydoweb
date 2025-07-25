"use client";

import { motion } from "framer-motion";
import {
  MapPin,  MessageCircle,
 Trophy, Hand, Brain, Zap, CreditCard,
  UserCircle, Bell, FileText, CalendarDays, Video, LayoutDashboard, Stethoscope
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
};

const features: Feature[] = [
  { name: "Doctor Panel", tagline: "Precise tracking", icon:<Stethoscope className="w-5 h-5 " />, position: { top: "15%", left: "5%" } },
  { name: "User Accounts", tagline: "Enhanced photos", icon:  <UserCircle className="w-5 h-5 " />, position: { top: "30%", left: "5%" } },
  { name: "Push Notifications", tagline: "Real-time broadcast", icon: <Bell className="w-5 h-5 " />, position: { top: "45%", left: "5%" } },
  { name: "Electronic Health Records", tagline: "No internet needed", icon:<FileText className="w-5 h-5 " />, position: { top: "60%", left: "5%" } },
  { name: "Geo-location", tagline: "Smart conversations", icon: <MapPin className="w-5 h-5 " />, position: { top: "75%", left: "5%" } },
  { name: "Real-time Chat", tagline: "Seamless connect", icon:  <MessageCircle className="w-5 h-5 " />, position: { top: "90%", left: "5%" } },
  { name: "Calendar for Appointment", tagline: "Secure auth", icon:<CalendarDays className="w-5 h-5 " />, position: { top: "15%", right: "5%" } },
  { name: "Voice & Video Calls", tagline: "Smooth performance", icon: <Video className="w-5 h-5 " />, position: { top: "30%", right: "5%" } },
  { name: "Attractive Dashboard", tagline: "Extended features", icon: <LayoutDashboard className="w-5 h-5 " />, position: { top: "45%", right: "5%" } },
  { name: "Gamification", tagline: "Engaging UX", icon: <Trophy className="w-5 h-5" />, position: { top: "60%", right: "5%" } },
  { name: "Gestures", tagline: "Intuitive control", icon: <Hand className="w-5 h-5" />, position: { top: "75%", right: "5%" } },
  { name: "AI Integration", tagline: "Smart automation", icon: <Brain className="w-5 h-5" />, position: { top: "90%", right: "5%" } },
  { name: "Augmented Reality", tagline: "Immersive experiences", icon: <Zap className="w-5 h-5" />, position: { top: "5%", left: "50%" } },
  { name: "Payment Gateway", tagline: "Secure transactions", icon: <CreditCard className="w-5 h-5" />, position: { bottom: "5%", left: "50%" } },
];



export default function AppFeaturesSection() {
  return (
    <section className="relative w-full px-6 py-24 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-zinc-900 mb-3">
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
            className="text-base text-zinc-500 font-light tracking-wide max-w-xl mx-auto mt-4"
          >
            We provide advanced features to take your business apps to the next level.
          </motion.p>
        </div>

        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-52 md:w-60 h-80 md:h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] p-2.5 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-red-100 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10"></div>
                <div className="text-gray-600 text-center relative z-10">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium">Your App Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {features.map((feature, index) => {
            const left = feature.position.left
              ? parseFloat(feature.position.left)
              : feature.position.right
              ? 100 - parseFloat(feature.position.right)
              : 50;
            const top = feature.position.top
              ? parseFloat(feature.position.top)
              : feature.position.bottom
              ? 100 - parseFloat(feature.position.bottom)
              : 50;
            const isTop = feature.position.top ? parseFloat(feature.position.top) < 50 : false;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div className="relative z-10 w-60 h-24 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/30 p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-sm font-bold text-gray-800">{feature.name}</div>
                  </div>
                  {/* <div className="text-sm text-gray-600 pl-9">{feature.tagline}</div> */}

                  <div
                    className="absolute w-0.5 h-8 bg-gradient-to-b from-blue-500 to-red-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: isTop ? '100%' : '-2rem',
                    }}
                  />
                  <div
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-red-600 rounded-full shadow-lg group-hover:scale-125 transition-all duration-300"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: isTop ? 'calc(100% + 2rem)' : '-0.75rem',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}

          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity }, scale: { duration: 4, repeat: Infinity } }}
            className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360, y: [0, -10, 0] }}
            transition={{ rotate: { duration: 15, repeat: Infinity }, y: { duration: 3, repeat: Infinity } }}
            className="absolute bottom-10 right-10 w-16 h-16 border-2 border-red-200 rounded-full opacity-20"
          />
        </div>

        {/* Key Healthcare Features Row */}
      
      </div>
    </section>
  );
}
