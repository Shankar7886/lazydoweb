import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "../../lib/TiltCard";

const ProjectCard = ({ project }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard glareEffect className="h-full">
      <div
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={`/portfolio/${project.id}`} className="flex flex-col h-full">
          {/* Image with gradient overlay and hover panel */}
          <div className="relative overflow-hidden">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Slide-up info panel */}
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-sm p-4"
              animate={{ y: hovered ? "0%" : "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Card body */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-500 mt-2 flex-1">{project.brief}</p>
          </div>
        </Link>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;
