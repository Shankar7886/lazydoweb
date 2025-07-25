import { useParams } from "react-router-dom";
import { projects } from "./portfolioData";
import Header from "../Header";
import Footer from "../Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p: any) => p.id === id);

  if (!project) return <div className="p-20">Project not found.</div>;

  return (
    <>
    <Header/>
    <div className="px-6 md:px-40 py-16 bg-white min-h-screen mt-10">
      <img
        src={project.cover}
        alt={project.title}
        className="rounded-xl mb-10 shadow-xl w-full max-h-[500px] object-cover"
         loading="lazy"
      />
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-500 mb-8">{project.brief}</p>

      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-white">
        {project.tech.map((t) => (
          <li key={t} className="bg-orange-500 px-3 py-1 rounded-full">
            {t}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Impact</h2>
      <p className="text-gray-700">{project.impact}</p>
    </div>
    <Footer/>
    </>
  );
};

export default ProjectDetail;
