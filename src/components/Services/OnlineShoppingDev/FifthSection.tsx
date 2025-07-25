"use client";

import { motion } from "framer-motion";
import { Boxes, Truck, ShoppingCart } from "lucide-react";

const solutions = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-pink-400" />,
    title: "eCommerce App Designing",
    desc: "We design templates of online shopping for iOS and Android. Our futuristic design with impressive color combination will allure maximum customers.",
  },
  {
    icon: <Truck className="h-10 w-10 text-yellow-400" />,
    title: "Supply Chain Management",
    desc: "We are well-familiar with Blockchain, Cryptocurrency and IoT. We combine our methodology and these technologies to revolutionize the banking and finance sector.",
  },
  {
    icon: <Boxes className="h-10 w-10 text-blue-400" />,
    title: "Inventory Management System",
    desc: "Manage products, inventory levels, orders, sales and deliveries through our eCommerce inventory management system.",
  },
];

export default function EcommerceSolutions() {
  return (
    <section className=" py-24 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          
          
          <h1 className="text-4xl font-light mb-3 tracking-tight text-slate-900">
             eCommerce Shopping Solutions That We Offer  
          </h1>
          
         
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition"
            >
              <div className="mb-4">{sol.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{sol.title}</h3>
              <p className="text-gray-700 text-sm">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
