import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code, ShoppingCart, BookText, Building2, Palette, LifeBuoy,
  Briefcase, Wrench, ShieldCheck, Handshake
} from "lucide-react";

const coreServices = [
  { icon: <Code size={32} />, title: "Custom Web Development", description: "We craft high-performance, scalable apps for startups to enterprises." },
  { icon: <ShoppingCart size={32} />, title: "E-Commerce Development", description: "Tailored e-commerce platforms to boost your online business." },
  { icon: <BookText size={32} />, title: "CMS Web Development", description: "Rapid CMS-based apps using cutting-edge frameworks." },
  { icon: <Building2 size={32} />, title: "Enterprise App Development", description: "Robust apps built for complex, large-scale operations." },
  { icon: <Palette size={32} />, title: "UI/UX Design", description: "Interactive and intuitive UI that reflects your brand." },
  { icon: <LifeBuoy size={32} />, title: "Support & Maintenance", description: "Ongoing support to keep your site optimal at every stage." },
];

const additionalServices = [
  { icon: <Briefcase size={28} />, title: "Consultancy", description: "Smart strategies and digital guidance tailored to you." },
  { icon: <Wrench size={28} />, title: "Development", description: "Efficient, cost-effective websites using advanced tools." },
  { icon: <ShieldCheck size={28} />, title: "Testing", description: "Secure, bug-free, performance-tested web solutions." },
  { icon: <Handshake size={28} />, title: "Support", description: "Dependable, long-term support to sustain digital growth." },
];

export default function WebDevOfferingSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      className="relative  from-white to-slate-100 px-6 py-12 text-center text-slate-900 overflow-hidden"
    >
      {/* Subtle animated background graphics */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full opacity-10 pointer-events-none"
      >
        <source src="/abstract-light.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-4"
        >
          Your Digital Success Partner
        </motion.h2>
        <p className="text-lg md:text-xl text-slate-600 mb-12">
          From concept to code, we turn ideas into world-class web solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white hover:bg-red-50 rounded-2xl p-6 shadow-lg transition border border-gray-100 hover:shadow-xl"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="mb-4 text-red-600"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-medium mb-2 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-light text-slate-800 mb-10">
          Our Web Development Services Include:
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-3 text-red-500">{service.icon}</div>
              <h4 className="text-lg font-semibold text-slate-700 mb-1">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
