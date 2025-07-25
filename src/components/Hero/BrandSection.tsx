import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import type { PanInfo } from "framer-motion";
import ImageHostLink from "../../variable";

// Imported assets
const blackberry = "blackberry.png";
const m3m = "m3m.jpg";
const shalimar = "shalimar.png";
const pgs = "pgs.jpg";
const nandini = "nandini.jpg";
const spar = "spar.svg";

// Type definitions
interface Brand {
  name: string;
  logo: string;
  description: string;
}

const brands: Brand[] = [
  {
    name: "Blackberrys",
    logo: ImageHostLink + blackberry,
    description: "Industrial Excellence",
  },
  {
    name: "M3M",
    logo: ImageHostLink + m3m,
    description: "Legacy & Innovation",
  },
  {
    name: "Shalimar Paints",
    logo: ImageHostLink + shalimar,
    description: "Rise & Transform",
  },
  {
    name: "Spar",
    logo: ImageHostLink + spar,
    description: "Financial Security",
  },
  {
    name: "Nandini",
    logo: ImageHostLink + nandini,
    description: "Global Banking",
  },
  {
    name: "PGS",
    logo: ImageHostLink + pgs,
    description: "Infrastructure Pioneer",
  },
];

// Extend for infinite loop
const extendedBrands = [...brands, ...brands, ...brands];

export default function ResponsiveInfiniteCarousel(): React.ReactElement {
  const [isAnimating, setIsAnimating] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const x = useMotionValue(0);

  const resetAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    animationRef.current = setTimeout(() => {
      setIsAnimating(true);
      setDragOffset(0);
    }, 2000);
  };

  const handleDragStart = () => {
    setIsAnimating(false);
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(event);
    const newOffset = dragOffset + info.offset.x;
    setDragOffset(newOffset);
    resetAnimation();
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative bg-white py-8 md:py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="mx-2 md:mx-3 w-1.5 md:w-2 h-1.5 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
            Trusted by
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              industry leaders
            </motion.span>
          </h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partnering with innovative enterprises worldwide
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-xl shadow-slate-200/20 cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -2000, right: 2000 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={
              isAnimating ? { x: [dragOffset, dragOffset - 2000] } : undefined
            }
            transition={
              isAnimating
                ? { duration: 20, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            {extendedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[20%] p-2 sm:p-3 md:p-4 flex-shrink-0"
              >
                <div className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-lg md:rounded-xl p-3 md:p-4 transition-all duration-300 hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-2 md:w-3 h-2 md:h-3 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg group-hover:border-blue-500/60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 md:w-3 h-2 md:h-3 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg group-hover:border-purple-500/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex flex-col items-center text-center space-y-1.5 md:space-y-2">
                    <div className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-105 transition-transform duration-300"
                         loading="lazy"
                      />
                    </div>
                    <h3 className="text-slate-800 group-hover:text-slate-900 font-medium text-xs md:text-sm leading-tight">
                      {brand.name}
                    </h3>
                    <p className="text-slate-500 group-hover:text-slate-600 text-xs font-light leading-tight hidden sm:block">
                      {brand.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-4 text-xs text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-1">
              {/* <div className="w-4 h-3 border border-slate-300 rounded-sm bg-white"></div> */}
            </div>
            <div className="sm:hidden flex items-center space-x-1">
              <div className="w-6 h-4 border border-slate-300 rounded-lg bg-white relative">
                <div className="absolute inset-1 bg-slate-200 rounded-sm"></div>
              </div>
              <span>Swipe to explore</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-slate-300 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-1 h-1 bg-slate-300 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
