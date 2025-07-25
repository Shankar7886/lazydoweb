"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Native App Development",
    description:
      "Mobility solutions have become a powerful asset for every business. Our native app development services are dynamic and reliable, tailored to your business needs. We deliver high-performance native apps for industries like healthcare, education, and more.",
    number: "01",
    icon: (
      <svg className="w-16 h-16 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <circle cx="12" cy="12" r="3" strokeWidth={0.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 9l6 6M15 9l-6 6" />
      </svg>
    )
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Our cross-platform apps run seamlessly on iOS and Android. With global recognition, our developers use the best tools to create versatile applications that offer native-like performance on all devices.",
    number: "02",
    icon: (
      <svg className="w-16 h-16 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={0.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 12h8M12 8v8" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="17" cy="17" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M7 17h10M17 7H7" />
      </svg>
    )
  },
  {
    title: "Hybrid App Development",
    description:
      "Combining the best of web and native technologies, our hybrid apps offer broad compatibility using HTML, CSS, and JavaScript, wrapped in a native shell for multi-platform support.",
    number: "03",
    icon: (
      <svg className="w-16 h-16 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        <circle cx="12" cy="12" r="8" strokeWidth={0.3} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M8 12h8" />
      </svg>
    )
  },
];

export default function AppDevelopmentSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen from-zinc-50 to-white overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.4)_1px,_transparent_0)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.2)_1px,_transparent_0)] bg-[size:100px_100px]" />
      </motion.div>

      {/* Elegant Light Rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />
      </div>

      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Luxury Title Treatment */}
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative inline-block"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-[-0.02em] text-zinc-900 mb-3">
                Mobile App Development
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base text-zinc-500 font-light tracking-wide max-w-xl mx-auto mt-4"
            >
              Crafting exceptional digital experiences with precision and elegance
            </motion.p>
          </motion.div>

          {/* Premium Service Showcase */}
          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Service Number */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 1.2,
                      delay: i * 0.4 + 0.2,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="lg:col-span-1"
                  >
                    <div className="text-4xl md:text-5xl font-thin text-zinc-200 group-hover:text-zinc-300 transition-colors duration-700">
                      {service.number}
                    </div>
                  </motion.div>

                  {/* Service Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 1.0,
                      delay: i * 0.4 + 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 flex justify-center lg:justify-start"
                  >
                    <div className="p-4 rounded-full bg-zinc-50 group-hover:bg-zinc-100 transition-colors duration-700">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Service Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.2,
                      delay: i * 0.4 + 0.4,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="lg:col-span-8"
                  >
                    <h3 className="text-xl md:text-2xl font-light text-zinc-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-light max-w-2xl">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Elegant Divider */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 1.2,
                      delay: i * 0.4 + 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    viewport={{ once: true }}
                    className="lg:col-span-1 flex justify-end"
                  >
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />
                  </motion.div>
                </div>

                {/* Subtle Hover Effect */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ transform: "translateY(20px)" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Signature Element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-400" />
              <span className="text-xs text-zinc-400 font-light tracking-[0.2em] uppercase">
                Excellence in Every Detail
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}