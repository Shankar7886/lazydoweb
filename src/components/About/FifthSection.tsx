import{ useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const industryContent = [
  {
    title: "Startup",
    description: "With a strong global presence, we help startups build digital platforms to run operations effectively. In the rapidly evolving landscape of emerging businesses, we understand that agility and scalability are not merely advantages—they are necessities. Our approach to startup development centers on creating robust foundations that can withstand the pressures of exponential growth while maintaining the flexibility required for pivoting and adaptation.",
    continuation: "Through our comprehensive understanding of lean methodologies and rapid prototyping, we've successfully launched over 200 startups across diverse industries. Each project begins with a deep dive into market validation, ensuring that every line of code serves a strategic purpose. We believe that great startups are built on great technology, and great technology is built on great partnerships.",
    expertise: "Our expertise spans MVP development, scalable architecture design, growth analytics implementation, and market validation strategies. We work closely with founders to transform visionary ideas into investor-ready platforms that speak the language of both users and stakeholders."
  },
  {
    title: "Small Business",
    description: "We offer tailored web and mobile solutions for small businesses to dominate the digital marketplace. The heart of every thriving community lies in its small businesses—the local bakery that knows your name, the boutique that curates with passion, the service provider who treats every client like family. These businesses don't just serve customers; they build relationships, create experiences, and forge the economic backbone of their communities.",
    continuation: "Understanding that resources are precious and every investment must yield measurable returns, we've developed a methodology that maximizes impact through strategic technology choices. Our portfolio includes over 500 small business transformations, each one a testament to the power of thoughtful digital strategy combined with intimate understanding of local market dynamics.",
    expertise: "We specialize in custom solution development, e-commerce platform creation, digital marketing integration, local SEO optimization, and customer engagement tools that turn one-time buyers into lifelong advocates."
  },
  {
    title: "Enterprise",
    description: "We've delivered solutions across diverse industries and empowered enterprises with scalable digital tools. In the complex ecosystem of enterprise technology, where legacy systems intertwine with cutting-edge innovations, we serve as architects of digital transformation. Our enterprise solutions don't just modernize—they revolutionize how organizations think, operate, and compete in their respective markets.",
    continuation: "The enterprise landscape demands more than technical expertise; it requires strategic vision, unwavering precision, and the ability to orchestrate seamless integration across multiple departments, systems, and stakeholders. Our team has successfully delivered 50+ enterprise-level transformations, each one executed with zero downtime and maximum impact.",
    expertise: "Our enterprise capabilities encompass sophisticated architecture design, legacy system modernization, cloud migration strategies, comprehensive digital transformation, and enterprise-grade security implementations that protect while they enable."
  }
];

const TransformSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  const [activeSection, setActiveSection] = useState<null|number>(null);

  return (
    <section ref={sectionRef} className="relative w-full py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.3em] text-slate-400 uppercase mb-3 font-light"
          >
            Industry Transformation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-extralight text-slate-900 leading-none mb-6"
          >
            We Transform
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block font-light italic text-slate-600"
            >
              Industries
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg leading-relaxed text-slate-600 font-light max-w-3xl"
          >
            We are a collective of creative developers and strategic professionals who believe in building inclusive, client-centric, and infinitely scalable solutions using the most sophisticated technologies and frameworks available today.
          </motion.p>
        </motion.header>

        {/* Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-12"
        >
          {industryContent.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.4 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
              className="group "
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-light text-slate-900 mb-4 leading-tight"
                animate={activeSection === index ? { 
                  letterSpacing: "0.02em",
                  x: 4
                } : { 
                  letterSpacing: "0",
                  x: 0
                }}
                transition={{ duration: 0.3 }}
              >
                {section.title}
              </motion.h2>

              <motion.div
                className="prose prose-lg max-w-none"
                animate={activeSection === index ? { x: 8 } : { x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.p 
                  className="text-slate-700 leading-relaxed mb-4 font-light text-lg"
                  animate={activeSection === index ? { 
                    color: "#334155" 
                  } : { 
                    color: "#475569" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.description}
                </motion.p>

                <motion.p 
                  className="text-slate-600 leading-relaxed mb-4 font-light"
                  initial={{ opacity: 0.8 }}
                  animate={activeSection === index ? { 
                    opacity: 1,
                    color: "#475569"
                  } : { 
                    opacity: 0.8,
                    color: "#64748b"
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {section.continuation}
                </motion.p>

                <motion.p 
                  className="text-slate-500 leading-relaxed font-light italic"
                  initial={{ opacity: 0.6 }}
                  animate={activeSection === index ? { 
                    opacity: 1,
                    color: "#64748b",
                    fontStyle: "normal"
                  } : { 
                    opacity: 0.7,
                    color: "#94a3b8",
                    fontStyle: "italic"
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {section.expertise}
                </motion.p>
              </motion.div>

              {/* Subtle reading indicator */}
              <motion.div
                className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent mt-6"
                initial={{ scaleX: 0 }}
                animate={activeSection === index ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </motion.article>
          ))}
        </motion.main>

        {/* Closing */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-16 pt-8 border-t border-slate-100"
        >
          <motion.p
            className="text-slate-400 font-light italic text-center leading-relaxed"
            whileHover={{ 
              color: "#64748b",
              letterSpacing: "0.01em"
            }}
            transition={{ duration: 0.3 }}
          >
            Each industry presents its own unique challenges and opportunities. 
            Our role is to listen, understand, and craft solutions that don't just meet expectations—they exceed them.
          </motion.p>
        </motion.footer>

      </div>
    </section>
  );
};

export default TransformSection;