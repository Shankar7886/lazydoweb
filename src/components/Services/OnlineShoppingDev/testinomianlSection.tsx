import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechSolve",
    feedback:
      "Lazy Do helped us scale from concept to launch flawlessly. Their execution is fast and top-quality!",
  },
  {
    name: "Sneha Patel",
    role: "CMO, MarketGo",
    feedback:
      "They truly understand how to combine tech with business. Their team is creative, responsive, and professional.",
  },
  {
    name: "Arun Verma",
    role: "CEO, FinClimb",
    feedback:
      "What stood out most is their dedication to client success. The results exceeded expectations — a phenomenal partnership!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
       <TypeAnimation
  sequence={[
    "What Our Clients Say", // types out
    1500, // waits 1.5s
    "", // clears
    500, // pause before restart
    "What Our Clients Say", // types again
  ]}
  wrapper="h2"
  cursor={true}
  repeat={Infinity}
  className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
/>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Idea + Experience = Excellence!</span> <br />
          Our skills of developing the web things and your ideas are perfect together. While developing the online presence of our top-rated clients, this section speaks volumes about who we are and what we do.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg bg-white text-left transition-all"
          >
            <Quote className="text-amber-400 mb-4" />
            <p className="text-gray-700 text-base mb-4">{item.feedback}</p>
            <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
