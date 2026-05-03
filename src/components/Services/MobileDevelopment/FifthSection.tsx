"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";
import {
  MapPin,
  Camera,
  Radio,
  HardDrive,
  MessageCircle,
  Bluetooth,
  Scan,
  Trophy,
  Hand,
  Brain,
  Zap,
  CreditCard,
  Settings,
  Puzzle,
} from "lucide-react";

const features = [
  { name: "Location / GPS", tagline: "Precise tracking", icon: MapPin },
  { name: "Camera Filters", tagline: "Enhanced photos", icon: Camera },
  { name: "Live Streaming", tagline: "Real-time broadcast", icon: Radio },
  { name: "Offline Storage", tagline: "No internet needed", icon: HardDrive },
  { name: "Chat / Bots", tagline: "Smart conversations", icon: MessageCircle },
  { name: "Bluetooth", tagline: "Seamless connect", icon: Bluetooth },
  { name: "Face Recognition", tagline: "Secure auth", icon: Scan },
  { name: "Background Processing", tagline: "Smooth performance", icon: Settings },
  { name: "Third-Party SDKs", tagline: "Extended features", icon: Puzzle },
  { name: "Gamification", tagline: "Engaging UX", icon: Trophy },
  { name: "Gestures", tagline: "Intuitive control", icon: Hand },
  { name: "AI Integration", tagline: "Smart automation", icon: Brain },
  { name: "Augmented Reality", tagline: "Immersive experiences", icon: Zap },
  { name: "Payment Gateway", tagline: "Secure transactions", icon: CreditCard },
];

export default function AppFeaturesSection() {
  return (
    <section className="relative w-full px-4 md:px-6 py-16 md:py-24 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-zinc-900 mb-3">
              Features That We{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Provide
              </span>{" "}
              In Apps
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-3"
            />
            <p className="text-sm md:text-base text-zinc-500 font-light tracking-wide max-w-xl mx-auto mt-4">
              We provide advanced features to take your business apps to the next level.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <TiltCard>
                <div className="glass-card rounded-2xl p-4 h-full flex flex-col items-center text-center gap-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--color-accent-primary)" }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-zinc-800 leading-tight">
                    {feature.name}
                  </div>
                  <div className="text-xs text-zinc-500">{feature.tagline}</div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
