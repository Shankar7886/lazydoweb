import  { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// import travelPic from '../../../assets/travel2.jpg';
import ImageHostLink from '../../../variable';

export default function CustomWebDevPage() {
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      if (gradientRef.current) {
        // const rect = gradientRef.current.getBoundingClientRect();
        // const x = ((e.clientX - rect.left) / rect.width) * 100;
        // const y = ((e.clientY - rect.top) / rect.height) * 100;

        gradientRef.current.style.background = `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%,
            rgba(248, 250, 252, 0.9) 50%,
            rgba(241, 245, 249, 0.85) 100%
          )
        `;
      }
    };

    const element = gradientRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/20 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/10 to-pink-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              ref={gradientRef}
              className="relative bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-200 overflow-hidden"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 30px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 30px) 100%, 0 100%, 15px calc(100% - 15px), 0 calc(100% - 30px))',
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.95) 0%,
                    rgba(248, 250, 252, 0.9) 50%,
                    rgba(241, 245, 249, 0.85) 100%
                  )
                `,
              }}
            >
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Left Side - Text Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded text-sm font-bold tracking-wider"
                    >
                      <span>TRV-DEV</span>
                    </motion.div>
                    <div className="text-right text-xs text-gray-500 font-mono">
                      <div>BOARDING PASS</div>
                      <div className="mt-1">SEAT 01A</div>
                    </div>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl lg:text-5xl font-light text-slate-800 leading-tight mb-4"
                  >
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent font-medium">
                      Travel App
                    </span>
                    <br />
                    <span className="text-slate-700">Development</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-lg text-slate-600 leading-relaxed font-light mb-8"
                  >
                    Give excellent traveling experience to your customers with
                    our highly advanced and multi-feature travel app development
                    services.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="border-t-2 border-dashed border-gray-300 pt-6 flex justify-between items-center"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-500 font-semibold tracking-wide">FROM</div>
                      <div className="text-lg font-bold text-slate-800">IDEA</div>
                      <div className="text-xs text-gray-500 mt-1">Concept</div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="text-3xl text-red-500">✈️</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 font-semibold tracking-wide">TO</div>
                      <div className="text-lg font-bold text-slate-800">SUCCESS</div>
                      <div className="text-xs text-gray-500 mt-1">Launch</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="mt-6 grid grid-cols-3 gap-4 text-xs text-gray-600"
                  >
                    <div>
                      <div className="font-semibold">GATE</div>
                      <div>MOBILE</div>
                    </div>
                    <div>
                      <div className="font-semibold">TERMINAL</div>
                      <div>CROSS-PLATFORM</div>
                    </div>
                    <div>
                      <div className="font-semibold">CLASS</div>
                      <div>PREMIUM</div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="relative min-h-[400px] lg:min-h-full"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={`${ImageHostLink}/travel2.jpg`}
                      alt="Travel App Development"
                      className="w-full h-full object-cover"
                       loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.8 }}
                      className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-white/50"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                          🌍
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm">Global Reach</h3>
                          <p className="text-xs text-slate-600">Worldwide Solutions</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-white/50"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-sm">
                          ⚡
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm">Fast Performance</h3>
                          <p className="text-xs text-slate-600">Optimized Experience</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Vertical Perforation Line */}
                <div className="absolute left-1/2 top-0 h-full w-px transform -translate-x-1/2 hidden lg:block">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-gray-200 rounded-full transform -translate-x-1/2"
                      style={{ top: `${(i + 1) * 4}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket Stub */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200 rounded-r-lg p-4 hidden lg:block">
              <div className="writing-mode-vertical text-vertical-rl text-xs text-gray-600 font-mono tracking-wider">
                <div className="mb-4">TRV-DEV</div>
                <div className="mb-2">01A</div>
                <div className="mb-2">PREMIUM</div>
                <div>APP-DEV</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
