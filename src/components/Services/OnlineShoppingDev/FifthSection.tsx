"use client";

import { Boxes, Truck, ShoppingCart } from "lucide-react";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const solutions = [
  {
    icon: ShoppingCart,
    title: "eCommerce App Designing",
    desc: "We design templates of online shopping for iOS and Android. Our futuristic design with impressive color combination will allure maximum customers.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    desc: "We are well-familiar with Blockchain, Cryptocurrency and IoT. We combine our methodology and these technologies to revolutionize the banking and finance sector.",
  },
  {
    icon: Boxes,
    title: "Inventory Management System",
    desc: "Manage products, inventory levels, orders, sales and deliveries through our eCommerce inventory management system.",
  },
];

export default function EcommerceSolutions() {
  return (
    <section className="py-24 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-thin mb-12 tracking-tight text-slate-900">
            eCommerce Shopping{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              Solutions
            </span>{" "}
            That We Offer
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((sol, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <TiltCard glareEffect>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "var(--color-accent-primary)" }}
                  >
                    <sol.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-light mb-3 text-zinc-900">
                    {sol.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
