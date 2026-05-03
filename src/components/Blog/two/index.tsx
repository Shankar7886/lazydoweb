import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
import { useParallaxLayer } from "../../../lib/useParallaxLayer";
import ScrollReveal from "../../../lib/ScrollReveal";

const BlogDetailWebTrends = () => {
  const { containerRef, y } = useParallaxLayer(0.3);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-32">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Top Web Development Trends to Watch in 2025
          </h1>
          <div className="text-sm text-gray-500 mb-10">
            <span>🗓️ June 25, 2025</span> &nbsp;|&nbsp;
            <span>✍️ Lazy Do</span> &nbsp;|&nbsp;
            <span>#WebDevelopment #FutureTech #Trends2025</span>
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
              src={`${ImageHostLink}blog2.jpg`}
              alt="Web Trends 2025"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </section>

        <div className="space-y-8 text-lg leading-relaxed">
          <ScrollReveal direction="up" delay={0 * 0.1}>
            <p>
              The world of web development is moving faster than ever—and 2025 is
              shaping up to be a breakthrough year. As digital experiences become
              more immersive, efficient, and intelligent, staying ahead of these
              trends will be crucial for businesses aiming to stay competitive.
            </p>
            <p className="mt-4">
              At <strong>Lazy Do</strong>, we constantly experiment,
              prototype, and deliver solutions aligned with what's next. Here's a
              look at the top web development trends that are poised to reshape
              the internet.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🔮 1. Serverless Architecture Will Dominate
            </h2>
            <p>
              With platforms like AWS Lambda, Netlify, and Vercel, serverless
              functions enable developers to run backend logic without managing
              infrastructure—leading to lower costs, auto-scaling, and faster
              deployments.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={2 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              ⚡ 2. Edge Computing Enhances Speed
            </h2>
            <p>
              By processing data closer to the user's location, edge computing
              dramatically reduces latency. Expect more websites using CDN-based
              logic for real-time performance boosts.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={3 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🧠 3. AI-Powered Interfaces &amp; Copilots
            </h2>
            <p>
              From chatbots to content generators and smart dashboards, AI will
              continue to elevate user experience with personalization, intent
              prediction, and natural language capabilities.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={4 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🎨 4. Motion UI &amp; 3D Interactions
            </h2>
            <p>
              Subtle animations, interactive transitions, and WebGL-based 3D
              experiences are becoming the new normal—especially in portfolios,
              SaaS products, and digital commerce.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={5 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🧩 5. Component-First &amp; Design Systems
            </h2>
            <p>
              Frameworks like React, Vue, and Svelte are increasingly being used
              alongside design systems (e.g., Tailwind, ShadCN, Radix) for UI
              consistency, scalability, and accessibility.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={6 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🔐 6. Privacy by Design
            </h2>
            <p>
              With growing concerns around data privacy, web apps are now
              expected to embed consent management, encryption, and compliance
              (GDPR, CCPA) by default.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={7 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🚀 What This Means for Your Business
            </h2>
            <p>
              Web development is no longer just about websites—it's about digital
              experiences that perform, evolve, and empower. Companies investing
              in these trends early will deliver faster, smarter, and more secure
              platforms.
            </p>

            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600 mt-6">
              "Tomorrow's web belongs to those who build for it today."
            </blockquote>

            <p className="mt-4">
              At <strong>Lazy Do</strong>, we're already helping clients
              adopt these technologies through future-ready web solutions. Whether
              it's headless CMS, AI-backed dashboards, or high-performance PWAs—
              we've got you covered.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailWebTrends;
