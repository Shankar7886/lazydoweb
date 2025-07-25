import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Skilled Development Team",
    description:
      "Our developers are highly skilled in various programming languages and frameworks, allowing us to tackle diverse projects seamlessly.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize clear communication and collaboration to deliver tailored solutions that exceed expectations.",
  },
  {
    title: "Quality and Reliability",
    description:
      "Our stringent quality standards ensure that every solution we deliver is reliable, secure, and high-performing.",
  },
  {
    title: "Timely Delivery",
    description:
      "We respect your time and ensure project delivery within agreed timelines without compromising quality.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We offer flexible pricing and engagement models to align with your budget and goals.",
  },
];

// Fancy text animation variant for heading
const headingVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Content fade-in variant
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const headingText = "Why Choose Lazy Do ?";

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white">
      {/* Animated Heading */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-6 flex flex-wrap justify-center"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariant}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-gray-600 leading-relaxed text-center mb-16"
      >
        A partnership built on trust, innovation, and value.
      </motion.p>

      {/* Animated List */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            className="flex items-start space-x-4"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
            >
              <CheckCircle className="text-red-500 mt-1" size={24} />
            </motion.div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
