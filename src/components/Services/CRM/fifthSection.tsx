import { motion } from "framer-motion";
import {
  Settings,
  Link,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  LayoutGrid,
  Download,
  Users,
} from "lucide-react";

const features = [
  { icon: Settings, title: "System Customization" },
  { icon: Link, title: "Integration With Other Systems" },
  { icon: TrendingUp, title: "Increase Productivity" },
  { icon: Download, title: "Data Import" },
  { icon: ShieldCheck, title: "Data Security" },
  { icon: LayoutGrid, title: "Enhanced Functionality" },
  { icon: BarChart2, title: "Advanced Sales Analytics" },
  { icon: Users, title: "Marketing Analytics" },
];

export default function WhyCustomCRMClean() {
  return (
    <section className="relative w-full bg-[#f9f9f9] py-24 px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Why Build a{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-gray-600 bg-clip-text text-transparent">
            Custom CRM
          </span>{" "}
          for Business?
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Build smarter systems tailored to your goals with advanced integration,
          analytics, and security features.
        </p>
      </motion.div>

      {/* Feature list (icon + text row) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <feature.icon size={28} className="text-yellow-500 mt-1" />
            <p className="text-lg text-gray-800 font-medium">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
