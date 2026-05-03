import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
import { useParallaxLayer } from "../../../lib/useParallaxLayer";
import ScrollReveal from "../../../lib/ScrollReveal";

const BlogDetail = () => {
  const { containerRef, y } = useParallaxLayer(0.3);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-32">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Custom Software is a Game-Changer for Modern Enterprises
          </h1>
          <div className="text-sm text-gray-500 mb-10">
            <span>🗓️ July 1, 2025</span> &nbsp;|&nbsp;
            <span>✍️ Lazy Do</span> &nbsp;|&nbsp;
            <span>#CustomDevelopment #EnterpriseTech</span>
          </div>
        </ScrollReveal>

        {/* Parallax hero image */}
        <section
          ref={containerRef as React.RefObject<HTMLElement>}
          className="relative overflow-hidden rounded-xl mb-10 shadow-lg"
          style={{ height: "400px" }}
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] top-[-10%]"
          >
            <img
              src={`${ImageHostLink}blog1.jpg`}
              alt="Custom Software"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </section>

        <div className="space-y-8 text-lg leading-relaxed">
          <ScrollReveal direction="up" delay={0 * 0.1}>
            <p>
              In today's fast-evolving digital ecosystem, off-the-shelf software
              solutions often fall short when it comes to meeting the unique
              demands of modern enterprises. That's where{" "}
              <strong>custom software development</strong> steps in—not just as a
              solution, but as a competitive advantage.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              Understanding Custom Software
            </h2>
            <p>
              Custom software is built specifically for a business's needs, goals,
              and workflows. Unlike generic solutions, it is crafted with
              precision to match the exact operational flow, allowing companies to
              scale faster and adapt smarter.
            </p>
            <p className="mt-4">
              At <strong>Lazy Do</strong>, we design, engineer, and
              deliver custom systems tailored to individual enterprise
              architectures—offering the flexibility, security, and scalability
              your business needs.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={2 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🚀 Key Benefits of Custom Software for Enterprises
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Tailored Functionality:</strong> Focuses solely on what
                matters to your operations, maximizing efficiency.
              </li>
              <li>
                <strong>Better Integration:</strong> Seamlessly connects with your
                existing systems.
              </li>
              <li>
                <strong>Enhanced Security:</strong> Security is baked into the
                architecture from day one.
              </li>
              <li>
                <strong>Scalability:</strong> Easily evolve as your business grows.
              </li>
              <li>
                <strong>Cost-Efficiency:</strong> Long-term savings by avoiding
                license fees and workarounds.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={3 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">🧠 Real-World Example</h2>
            <p>
              One of our enterprise clients needed a logistics tracking platform
              that worked across multiple countries, with region-specific tax
              calculations, user roles, and third-party integrations.
            </p>
            <p className="mt-4">
              We designed a scalable architecture using microservices, enabled
              role-based access control, and delivered a dashboard that
              auto-adapts to regional data laws. The result? <strong>35%</strong>{" "}
              operational efficiency improvement within six months.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={4 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              💡 When Should You Choose Custom Software?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Unique or complex workflows</li>
              <li>Strict data compliance and control</li>
              <li>Plans to rapidly scale business operations</li>
              <li>Multiple integrations with internal or external systems</li>
              <li>Aiming to build unique tech-driven competitive edge</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={5 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🛠️ How Lazy Do Can Help
            </h2>
            <p>
              We specialize in designing <strong>enterprise-grade custom
              software</strong> with high scalability, intuitive UX, and robust
              security. Our engineering-first mindset ensures your digital
              products deliver value from day one.
            </p>

            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600 mt-6">
              "Let's build technology that works for you—not the other way around."
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
