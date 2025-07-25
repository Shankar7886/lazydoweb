import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
// import { useState } from "react";

const Image1 = "project1.png";
const Image2 = "project2.png";
const Image3 = "project3.png";
const Image4 = "project4.png";
const Image5 = "Screenshot 2025-06-04 145322.png";
const Image6 = "project6.jpg";

const projects = [
     {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    image: Image4,
    tags: ["Photoshop", "Illustrator", "Brand Strategy"],
    year: "2023"
  },
  {
    id: 1,
    title: "Sales Force Application",
    category: "Web Development",
    image: Image1,
    tags: ["React", "Node.js", "MongoDB"],
    year: "2024"
  },
  {
    id: 2,
    title: "E-Commerce",
    category: "Web Development",
    image: Image2,
    tags: ["ASP.net", "HTML", "CSS"],
    year: "2024"
  },
  {
    id: 3,
    title: "E-Commerce",
    category: "Web Development",
    image: Image3,
    tags: ["React", "Node.js", "MongoDB"],
    year: "2024"
  },
 
  {
    id: 5,
    title: "Task Management",
    category: "Web Development",
    image: Image6,
    tags: ["React", "TypeScript", "AWS",".Net"],
    year: "2024"
  },
  {
    id: 6,
    title: "Approval System",
    category: "Web development",
    image: Image5,
    tags: ["React", "TypeScript", "AWS",".Net"],
    year: "2025"
  }
];

export default function ScrollCarousel() {
  // const [hoveredProject, setHoveredProject] = useState<null | number>(null);

  return (
    <div className="w-full  from-gray-50 via-white to-gray-100 py-24 px-4 relative overflow-hidden">
      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Ambient Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700">Portfolio Showcase</span>
          </div>
          
          <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
            Selected <span className="text-red-500 font-normal">Works</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            A curated collection of premium digital experiences, meticulously crafted with attention to every detail.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-none mx-auto">
        {/* Subtle Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50/80 to-transparent z-20 pointer-events-none" />
        
        {/* Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-8 px-8 pb-8"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.05}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            initial={{ x: 0 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}

                // onHoverStart={() => setHoveredProject(project.id)}
                // onHoverEnd={() => setHoveredProject(null)}
                className="min-w-[320px] group cursor-pointer select-none"
              >
                {/* Apple-style Glass Card Container */}
                <div className="relative bg-white/30 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/50 shadow-xl">
                  
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 pointer-events-none" />
                  
                  {/* Premium Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={ImageHostLink +project.image
                      }
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-white/60 backdrop-blur-lg text-gray-700 rounded-2xl text-xs font-medium shadow-sm border border-white/40">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gray-900/60 backdrop-blur-lg text-white rounded-2xl text-xs font-medium border border-gray-700/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Apple Glass Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1.5 bg-white/40 backdrop-blur-lg text-gray-700 rounded-2xl text-xs font-light border border-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Clean Navigation Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center mt-12"
      >
        <div className="flex items-center space-x-3 text-gray-500">
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
          <span className="text-sm font-light tracking-wide">Drag to explore more projects</span>
          <motion.div
            animate={{ x: [3, -3, 3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
