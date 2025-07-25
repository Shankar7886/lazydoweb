
import ProjectCard from "./ProjectCard";
import { projects } from "./portfolioData";
import Header from "../Header";
import Footer from "../Footer";
import { Sparkles, ArrowRight } from "lucide-react";

const PortfolioHome = () => {
  return (
    <>
      <Header />

      <div className="relative px-6 md:px-20 py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm mt-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Featured Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mt-4">
            Our Latest Projects
          </h1>
          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped clients build powerful, scalable, and visually rich digital products that drive results.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 group cursor-pointer">
            <span className="text-sm font-medium">Scroll to discover</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>
              <div className="relative transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

       
      </div>

      <Footer />

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioHome;