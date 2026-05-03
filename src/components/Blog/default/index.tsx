import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ImageHostLink from "../../../variable";
import GradientMesh from "../../../lib/GradientMesh";
import TiltCard from "../../../lib/TiltCard";
import ParallaxText from "../../../lib/ParallaxText";
import ScrollReveal from "../../../lib/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    title: "Why Custom Software is a Game-Changer for Modern Enterprises",
    excerpt:
      "Explore how custom solutions outperform off-the-shelf products in flexibility, scalability, and security.",
    date: "July 1, 2025",
    author: "Lazy Do",
    image: "blog1.jpg",
  },
  {
    id: 2,
    title: "Top Web Development Trends to Watch in 2025",
    excerpt:
      "From serverless to edge computing and AI-driven UI—here's what's redefining web apps today.",
    date: "June 25, 2025",
    author: "Lazy Do",
    image: "blog2.jpg",
  },
  {
    id: 3,
    title: "Crafting Delightful Mobile Apps: Our UX Process Revealed",
    excerpt:
      "See how we blend performance and design to create high-converting mobile experiences for clients worldwide.",
    date: "June 15, 2025",
    author: "Lazy Do",
    image: "blog3.jpg",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const handlePageChange = (pageNumber: number) => {
    navigate(`/blogs/${pageNumber}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <ParallaxText
        text="INSIGHTS · BLOG · ARTICLES ·"
        direction="right"
        speed={150}
        opacity={0.04}
        color="var(--color-ink-900)"
      />

      <div
        ref={heroRef}
        className="relative overflow-hidden py-20 px-4 md:px-20 text-center"
        style={{ position: "relative" }}
      >
        <GradientMesh colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]} />

        {/* Parallax blobs */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            y: blobY,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-5%",
              width: "50%",
              height: "140%",
              background: "radial-gradient(ellipse, rgba(124,110,234,0.10) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              right: "5%",
              width: "40%",
              height: "100%",
              background: "radial-gradient(ellipse, rgba(200,57,43,0.08) 0%, transparent 65%)",
              filter: "blur(70px)",
            }}
          />
        </motion.div>

        <motion.div className="relative z-10" style={{ y: headY }}>
          <ScrollReveal direction="up">
            <h1
              className="text-6xl md:text-7xl font-thin text-center text-gray-800 mb-4"
              style={{
                background: "linear-gradient(135deg, #1f2937 0%, #4b5563 50%, #1f2937 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Insights from Lazy Do
            </h1>

            <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-4">
              Stay updated with industry trends, engineering insights, and innovation tips from our team of experts in software, web, and mobile development.
            </p>

            <div className="text-xl font-medium text-[var(--color-accent-primary)] h-8">
              <TypeAnimation
                sequence={[
                  "Engineering Insights",
                  2000,
                  "Industry Trends",
                  2000,
                  "Innovation Stories",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </ScrollReveal>
        </motion.div>
      </div>

      <ParallaxText
        text="PERSPECTIVES · KNOWLEDGE ·"
        direction="left"
        speed={120}
        opacity={0.04}
        color="var(--color-ink-900)"
      />

      {/* Cards grid */}
      <div className="px-4 md:px-20 pb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.id} direction="up" delay={i * 0.1}>
              <TiltCard className="h-full">
                <div
                  className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePageChange(post.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${ImageHostLink}${post.image}`}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={16} /> {post.author}
                      </span>
                    </div>
                    <button className="mt-4 inline-block text-orange-500 hover:text-orange-700 text-sm font-medium text-left">
                      Read More →
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
