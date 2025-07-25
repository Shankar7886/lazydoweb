
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <Link to={`/portfolio/${project.id}`}>
        <img src={project.cover} alt={project.title} className="w-full h-56 object-cover"  loading="lazy"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-500 mt-2">{project.brief}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
