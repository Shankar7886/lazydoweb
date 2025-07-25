import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ShoppingCart,
  MapPin,
  Settings,
  Clock,
  MessageCircle,
  CreditCard,
  Globe,
  Percent,
  Users,
  Mail,
  History,
  Bell,
  User,
  HelpCircle,
  Database,
  FolderCog,
  Megaphone,
  Folder,
  Key,
  PlusSquare,
} from "lucide-react";

type PanelType = "customer" | "admin" | "contact" | "restaurant";

const panelFeatures: Record<
  PanelType,
  { icon: React.ReactElement; title: string }[]
> = {
  customer: [
    { icon: <Menu />, title: "Manage Restaurant Menu" },
    { icon: <Clock />, title: "Manage Opening Days & Timings" },
    { icon: <ShoppingCart />, title: "Customer Order Status" },
    { icon: <MapPin />, title: "Manage Delivery Areas" },
    { icon: <Settings />, title: "Manage Special Offers" },
    { icon: <MessageCircle />, title: "Message Customers" },
    { icon: <CreditCard />, title: "Multiple Payment Gateways" },
    { icon: <Globe />, title: "Multiple Language Support" },
    { icon: <Percent />, title: "Coupon Code Generation" },
    { icon: <Users />, title: "Social Media Engagement" },
    { icon: <Users />, title: "Social Networking Connectivity" },
    { icon: <Mail />, title: "Auto Sort Emails For Newsletters" },
  ],
  admin: [
    { icon: <ShoppingCart />, title: "Manage Orders" },
    { icon: <MapPin />, title: "Realtime Tracking" },
    { icon: <Bell />, title: "In App Notifications" },
    { icon: <Settings />, title: "Availability Settings" },
    { icon: <MapPin />, title: "Realtime Requests" },
    { icon: <History />, title: "Order History" },
    { icon: <CreditCard />, title: "Payment History" },
    { icon: <User />, title: "Profile" },
    { icon: <MapPin />, title: "Delivery Information" },
    { icon: <HelpCircle />, title: "Help & Support" },
  ],
  contact: [
    { icon: <Database />, title: "Backup & Restore Database" },
    { icon: <MapPin />, title: "Location Management" },
    { icon: <MessageCircle />, title: "Message Customers / Restaurants" },
    { icon: <Megaphone />, title: "Advertising Management" },
    { icon: <Folder />, title: "Content Management" },
    { icon: <FolderCog />, title: "Category Management" },
    { icon: <Key />, title: "Change Password" },
    { icon: <PlusSquare />, title: "Manage, Add, Edit & Delete" },
    { icon: <Mail />, title: "Email Alerts to Registered Users" },
  ],
  restaurant: [
    { icon: <Menu />, title: "Manage Restaurant Menu" },
    { icon: <Clock />, title: "Manage Opening Days & Timings" },
    { icon: <ShoppingCart />, title: "Customer Order Status" },
    { icon: <MapPin />, title: "Manage Delivery Areas" },
    { icon: <Settings />, title: "Manage Special Offers" },
    { icon: <MessageCircle />, title: "Message Customers" },
    { icon: <CreditCard />, title: "Multiple Payment Gateways" },
    { icon: <Globe />, title: "Multiple Language Support" },
    { icon: <Percent />, title: "Coupon Code Generation" },
    { icon: <Users />, title: "Social Media Engagement" },
    { icon: <Users />, title: "Social Networking Connectivity" },
    { icon: <Mail />, title: "Auto Sort Emails For Newsletters" },
  ],
};

const InteractiveFeatureSection: React.FC = () => {
  const [selected, setSelected] = useState<PanelType>("customer");
  const panels: PanelType[] = ["customer", "admin", "contact", "restaurant"];

  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
          <span className="text-white">On-Demand   Food Delivery</span>{" "}
          <span className="text-orange-400"> App Features</span>
        </h2>
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {panels.map((panel) => (
            <button
              key={panel}
              onClick={() => setSelected(panel)}
              className={`px-4 py-2 rounded-full transition ${
                selected === panel
                  ? "bg-orange-500 text-black"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {panel.charAt(0).toUpperCase() + panel.slice(1)} Panel
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {panelFeatures[selected].map((f, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-gray-300 hover:text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {f.icon}
                <span>{f.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveFeatureSection;
