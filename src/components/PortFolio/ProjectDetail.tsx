import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./portfolioData";
import Header from "../Header";
import Footer from "../Footer";
import { useParallaxLayer } from "../../lib/useParallaxLayer";
import ScrollReveal from "../../lib/ScrollReveal";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p: any) => p.id === id);

  const { containerRef, y } = useParallaxLayer(0.4);

  if (!project) return <div className="p-20">Project not found.</div>;

  return (
    <>
      <Header />

      <div className="px-6 md:px-40 py-16 bg-white min-h-screen mt-10">
        {/* Parallax hero image */}
        <section
          ref={containerRef as React.RefObject<HTMLElement>}
          className="relative overflow-hidden rounded-xl mb-10 shadow-xl w-full max-h-[500px]"
          style={{ height: "500px" }}
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] top-[-10%]"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </section>

        <ScrollReveal direction="up">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-500 mb-8">{project.brief}</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((t: string) => (
              <li key={t}>
                <span className="glass-card rounded-full px-3 py-1 text-sm font-medium">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-2xl font-semibold mt-10 mb-2">Impact</h2>
          <p className="text-gray-700">{project.impact}</p>
        </ScrollReveal>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
