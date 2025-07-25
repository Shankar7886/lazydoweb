
import { motion } from "framer-motion";
import { Star, Users, Award, Clock, Crown } from "lucide-react";
import video1 from "../../assets/8426049-uhd_3840_2160_25fps.mp4"
import useGoToContactPage from "../Contact/contactFn";

const reasons = [
  {
    icon: Star,
    title: "Elite Development",
    description: "World-class engineers craft sophisticated solutions with precision.",
    color: "gold"
  },
  {
    icon: Users,
    title: "Partnership Excellence", 
    description: "Lasting relationships built on trust and mutual success.",
    color: "platinum"
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Rigorous testing ensures flawless performance.",
    color: "emerald"
  },
  {
    icon: Clock,
    title: "Precision Delivery",
    description: "Exceptional results delivered exactly when promised.",
    color: "sapphire"
  },
];

export default function LuxuryPartnerSection() {
  const goContact = useGoToContactPage();
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50/30 py-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-600 shadow-sm text-xs"
            whileHover={{ scale: 1.02 }}
          >
            <Crown className="w-3 h-3" />
            <span className="font-medium tracking-widest uppercase">Premium Partnership</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 tracking-tight">
            Why Choose  
            <span className="block font-thin bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent" style={{paddingBottom:"20px"}}>
              Lazy Do
            </span>
          </h2>
          
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            Where cutting-edge technology meets unparalleled expertise
          </p>
        </motion.div>

        {/* Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video relative">
  <video
                  // ref={video1}
                  className="w-full h-full object-cover"
                  src={video1} // Replace with your video URL
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                  
                  {/* Optional custom play button overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </motion.div>
                  </div> */}
                </div>
                
               
              </div>
            </div>
          </motion.div>

          {/* Features Grid - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="w-4 h-4 text-gray-600" />
                    </motion.div>
                    
                    <div className="text-2xl font-extralight text-gray-200">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-light text-gray-900 tracking-wide">
                      {item.title}
                    </h3>
                    
                    <motion.div
                      className="h-px bg-gradient-to-r from-gray-300 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Compact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              y: -1,
              backgroundColor: "#1f2937"
            }}
            whileTap={{ scale: 0.98 }}
              onClick={goContact}
          >
            <span>Start Your Journey</span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}