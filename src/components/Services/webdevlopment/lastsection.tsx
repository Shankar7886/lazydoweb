import { motion } from "framer-motion";

const services = [
  {
    title: "Consultancy",
    description:
      "Astute strategies and digital solutions tailored to elevate your brand's online presence.",
    color: "bg-blue-500",
  },
  {
    title: "Development",
    description:
      "Crafting modern web experiences using PHP frameworks and advanced design tools.",
    color: "bg-green-500",
  },
  {
    title: "Testing",
    description:
      "Meticulous testing to ensure performance, security, and reliability of every component.",
    color: "bg-yellow-400",
  },
  {
    title: "Support",
    description:
      "Sustained and dependable support to grow and stabilize your digital operations.",
    color: "bg-purple-500",
  },
];

export default function WebDevServicesDiagonal() {
  return (
    <section className="relative  py-28 px-6 md:px-16 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold leading-tight mb-6 relative inline-block after:block after:h-1 after:w-24 after:bg-black after:mt-2">
          Our Web Development Services Include
        </h2>
        <p className="text-xl text-gray-600 mb-20 max-w-3xl">
          As a premier web development company, Lazy Do provides everything your company needs to achieve digital growth.
        </p>

        <div className="relative grid md:grid-cols-2 gap-20 z-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-4"
              style={{ borderColor: "transparent" }}
            >
              <div className={`absolute left-0 top-1 w-1.5 h-full ${service.color} rounded-sm`} />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 mt-24 max-w-3xl"
        >
          Partner with <strong>Lazy Do</strong> to bring your ideas to life through impactful, reliable, and future-ready web applications that drive real growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
