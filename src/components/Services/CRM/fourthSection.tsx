import { motion } from "framer-motion";
import {
  FileText, Hammer, Puzzle, DatabaseZap,
  RefreshCw, Headphones
} from "lucide-react";
import useGoToContactPage from "../../Contact/contactFn";

const services = [
  {
    icon: FileText,
    title: "CRM Strategy & Consulting",
    description:
      "Our analysts study your operations to recommend CRM strategies that unlock growth and solve bottlenecks.",
  },
  {
    icon: Hammer,
    title: "CRM Implementation",
    description:
      "Realize CRM value with rich implementations that align with your business needs and cut costs.",
  },
  {
    icon: Puzzle,
    title: "Custom CRM Development",
    description:
      "We design CRM software tailored to your processes—not the other way around.",
  },
  {
    icon: DatabaseZap,
    title: "CRM Integration Services",
    description:
      "Seamlessly connect third-party APIs and internal systems for a fully integrated business environment.",
  },
  {
    icon: RefreshCw,
    title: "CRM Migration Services",
    description:
      "Migrate without stress—ensuring continuity, zero workflow disruption, and preserved data integrity.",
  },
  {
    icon: Headphones,
    title: "CRM Support & Maintenance",
    description:
      "Our 24/7 support keeps your CRM secure, efficient, and up-to-date—so you stay ahead.",
  },
];

export default function CRMServicesSection() {
  const goContact = useGoToContactPage();
  return (
    <section className="w-full bg-[#fefefe] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Elevate Your Business with Our CRM Development Services
        </h2>
        <p className="text-lg text-gray-600 font-light">
          We use an agile, customer-centric approach to provide CRM software that’s strong and flexible—
          whether you need a single app or an enterprise-grade solution.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border hover:shadow-xl"
          >
            <s.icon className="text-primary" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600 font-light">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-2">
          Join forces with Lazy Do to streamline your business, enhance customer interaction, and grow with confidence.
        </p>
        <button  onClick={goContact} className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Let's Build Your CRM
        </button>
      </div>
    </section>
  );
}
