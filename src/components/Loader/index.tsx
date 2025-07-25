import  { useState, useEffect } from "react";
import { Diamond } from "lucide-react";
import Lazydologo from "../../assets/logogreen.png"

const PARTICLE_COUNT = 12;
const DOT_COUNT = 8;

const LuxuryLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 2;
      });
    }, 120);

    const dotInterval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % DOT_COUNT);
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.04),transparent_50%)]" />
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {[...Array(PARTICLE_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gray-300 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `gentleFloat ${
                8 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* Clean logo container */}
        <div className="relative w-20 h-20 mx-auto mb-12">
          {/* Subtle shadow ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-sm" />

          {/* Main logo container */}
          <div className="absolute inset-0.5 bg-white rounded-2xl flex items-center justify-center shadow-inner">
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center p-2">
              <img
                src={Lazydologo}
                loading="lazy"
                alt="Mayank Software Solutions"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const next = target.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full items-center justify-center"
                style={{ display: "none" }}
              >
                <Diamond className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Subtle pulsing effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-2xl"
            style={{
              animation: "subtlePulse 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Clean company name */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-wide text-gray-800 mb-3">
            Lazy Do
          </h1>

          {/* Minimal divider */}
          <div className="w-16 h-px bg-gray-300 mx-auto mb-3" />

          <p className="text-sm font-normal tracking-wide text-gray-600 uppercase">
            Software Solutions
          </p>
        </div>

        {/* Apple-style loading dots */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {[...Array(DOT_COUNT)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentDot
                  ? "bg-gray-600 scale-125"
                  : i === (currentDot - 1 + DOT_COUNT) % DOT_COUNT
                  ? "bg-gray-400 scale-110"
                  : "bg-gray-200 scale-100"
              }`}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Minimal progress bar (hidden by default, like Apple) */}
        <div className="w-64 mx-auto mb-6 opacity-0">
          <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-400 transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${loadingProgress}%`,
              }}
            />
          </div>
        </div>

        {/* Simple tagline */}
        <p className="text-gray-500 text-xs font-light tracking-wide">
          Precision • Innovation • Excellence
        </p>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) translateX(5px); 
            opacity: 0.7;
          }
        }
        
        @keyframes subtlePulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.1;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default LuxuryLoader;
