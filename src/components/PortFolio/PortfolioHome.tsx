import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./portfolioData";
import Header from "../Header";
import Footer from "../Footer";
import { Sparkles, ArrowRight } from "lucide-react";
import ThreeScene from "../../lib/ThreeScene";
import ParticleField from "../../lib/scenes/ParticleField";
import ScrollReveal from "../../lib/ScrollReveal";
import ParallaxText from "../../lib/ParallaxText";

const headingText = "Our Latest Projects";
const words = headingText.split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const PortfolioHome = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3 depth layers at different speeds
  const blobY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);
  const headY  = useTransform(scrollYProgress, [0, 1], ["4%",  "-4%"]);

  return (
    <>
      <Header />

      {/* ParallaxText strip above hero */}
      <ParallaxText text="OUR WORK · PORTFOLIO ·" direction="right" opacity={0.07} />

      <motion.section
        ref={sectionRef}
        className="relative px-6 md:px-20 py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 min-h-screen overflow-hidden"
      >
        {/* Three.js particle background */}
        <ThreeScene
          style={{ position: "absolute", inset: 0, opacity: 0.12 }}
          disableOnMobile
        >
          <ParticleField count={60} color1="#c8392b" color2="#b8973a" />
        </ThreeScene>

        {/* Parallax background blobs — layer 1 (slowest) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div style={{ y: blobY }} className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl animate-pulse"
              style={{ background: "rgba(200,57,43,0.10)" }}
            />
            <div
              className="absolute bottom-32 right-16 w-96 h-96 rounded-full blur-3xl animate-pulse"
              style={{ background: "rgba(200,57,43,0.07)", animationDelay: "1s" }}
            />
          </motion.div>
        </div>

        {/* Parallax secondary blobs — layer 2 (medium) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <div
              className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-50"
              style={{ background: "rgba(200,57,43,0.06)" }}
            />
          </motion.div>
        </div>

        {/* Hero — layer 3 (slightly slow) */}
        <motion.div style={{ y: headY }} className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm mt-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Featured Work</span>
          </div>

          <motion.div
            className="text-6xl md:text-7xl font-thin bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mt-4 flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped clients build powerful, scalable, and visually rich digital products that drive results.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 group cursor-pointer">
            <span className="text-sm font-medium">Scroll to discover</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </motion.section>

      {/* ParallaxText strip below section */}
      <ParallaxText text="PROJECTS · DELIVERED ·" direction="left" opacity={0.07} />

      <Footer />
    </>
  );
};

export default PortfolioHome;
