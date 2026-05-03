import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
import { useParallaxLayer } from "../../../lib/useParallaxLayer";
import ScrollReveal from "../../../lib/ScrollReveal";

const BlogDetailMobileUX = () => {
  const { containerRef, y } = useParallaxLayer(0.3);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-32">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Crafting Delightful Mobile Apps: Our UX Process Revealed
          </h1>
          <div className="text-sm text-gray-500 mb-10">
            <span>🗓️ June 15, 2025</span> &nbsp;|&nbsp;
            <span>✍️ Lazy Do</span> &nbsp;|&nbsp;
            <span>#MobileApps #UXDesign #ProductDevelopment</span>
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
              alt="Mobile UX"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </section>

        <div className="space-y-8 text-lg leading-relaxed">
          <ScrollReveal direction="up" delay={0 * 0.1}>
            <p>
              With over 6.5 billion smartphone users worldwide, the expectations
              for mobile apps have never been higher. Users now demand
              lightning-fast performance, intuitive design, and a seamless
              experience across devices.
            </p>
            <p className="mt-4">
              At <strong>Lazy Do</strong>, we believe a great app isn't
              just built—it's carefully crafted with the user at the center. Here's
              a deep dive into our UX design process that has helped us deliver
              consistently engaging mobile experiences across industries.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🔍 Step 1: Discovery &amp; User Research
            </h2>
            <p>
              We begin with understanding your audience, pain points, and
              expectations. Through stakeholder interviews, competitor audits, and
              user behavior analysis, we identify key goals for the app experience.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={2 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🧭 Step 2: Wireframes &amp; User Journeys
            </h2>
            <p>
              Before diving into visuals, we sketch out information architecture,
              user flows, and interaction logic. This helps in creating a clear and
              conversion-focused user journey.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={3 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🎨 Step 3: Visual Design &amp; Prototyping
            </h2>
            <p>
              Using tools like Figma and Adobe XD, we craft modern, brand-aligned
              UI with motion hints and responsive layout considerations. Our
              clickable prototypes give stakeholders and users a feel of the app
              before development.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={4 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🧪 Step 4: Usability Testing
            </h2>
            <p>
              We conduct real-user tests and get feedback on flow, readability, and
              ease of use. Insights from testing drive design refinements and help
              us eliminate friction points before coding starts.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={5 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🛠️ Step 5: Handoff to Development
            </h2>
            <p>
              We document everything in a developer-friendly way, using consistent
              tokens, spacing systems, and accessibility notes. This ensures
              pixel-perfect translation of design to code.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={6 * 0.1}>
            <h2 className="text-2xl font-semibold mt-6">
              🚀 The Result? Delightful Digital Experiences
            </h2>
            <p>
              Our UX-first approach ensures apps are not only beautiful, but also
              fast, accessible, and aligned with user needs. Whether it's a fitness
              tracker, finance app, or logistics dashboard—we prioritize
              experience, not just functionality.
            </p>

            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600 mt-6">
              "Design isn't just how it looks. It's how it works—and feels."
            </blockquote>

            <p className="mt-4">
              Want to elevate your mobile presence? Let's build an app experience
              that your users will love—and remember.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailMobileUX;
