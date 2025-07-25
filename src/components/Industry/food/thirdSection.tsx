import React from "react";
import { motion } from "framer-motion";

const ClientSolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Startups Entering the Food Tech World",
      desc: "We help new-age brands launch boldly with scalable, modern food ordering apps packed with robust features.",
    },
    {
      title: "Individual Restaurants Going Digital",
      desc: "Solo outlet owners can go online fast with our easy, affordable food delivery platform—no tech stress.",
    },
    {
      title: "Multi-location Restaurant Chains",
      desc: "Control menus, orders, and deliveries across all branches with one integrated system that just works.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left side text */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light leading-tight"
          >
            Our Customized Solutions Serve a{" "}
            <span className="text-orange-400 font-semibold">Range of Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            We don't believe in one-size-fits-all. Whether you’re launching your first food app
            or managing a chain of restaurants, our tailored platforms help you grow smart.
          </motion.p>
        </div>

        {/* Right side animated cards */}
        <div className="space-y-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative p-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-md shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-3 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base">{item.desc}</p>
              <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300 blur-xl opacity-10 bg-orange-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSolutionsSection;
