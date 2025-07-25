
import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
const CRMLAPTOP = "crmlaptop.png"

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Premium Background with Subtle Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Elegant geometric patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-50/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <motion.div 
        className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 xl:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Premium Typography */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div variants={textVariants}>
            {/* Luxury Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/50 shadow-sm mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">Premium CRM Solutions</span>
            </motion.div>

            {/* Main Title with Luxury Typography */}
            <h1 className="space-y-2">
              <motion.span 
                className="block text-5xl xl:text-7xl font-light text-gray-900 tracking-tight leading-none"
                variants={textVariants}
              >
                CRM Software
              </motion.span>
              <motion.span 
                className="block text-5xl xl:text-7xl font-extralight text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 bg-clip-text tracking-tight leading-none"
                variants={textVariants}
              >
                Development
              </motion.span>
              <motion.span 
                className="block text-3xl xl:text-5xl font-thin text-gray-600 tracking-wider mt-4"
                variants={textVariants}
              >
                Services
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={textVariants}>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-lg tracking-wide">
              We craft bespoke CRM solutions that elevate your business operations with 
              <span className="text-gray-800 font-normal"> unparalleled precision</span> and 
              <span className="text-gray-800 font-normal"> sophisticated design</span>.
            </p>
          </motion.div>

          {/* Premium CTA Buttons */}
          
        </div>

        {/* Right Side - Premium Laptop Display */}
        <div className="hidden lg:flex w-1/2 justify-end items-center">
          <motion.div
            className="relative"
            variants={imageVariants}
            animate="animate"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Laptop Image with Premium Shadow */}
              <div className="relative">
                <img
                  src={ImageHostLink+CRMLAPTOP}
                  loading="lazy"
                  alt="Premium CRM Dashboard"
                  className="w-[600px] xl:w-[700px] h-auto object-contain filter drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))'
                  }}
                />
                
                {/* Elegant backdrop blur effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl blur-xl -z-10"></div>
                
                {/* Premium glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-gray-100/30 to-gray-200/20 rounded-3xl blur-2xl -z-20"></div>
              </div>
            </motion.div>

            {/* Floating Elements for Premium Feel */}
            <motion.div
              className="absolute -top-8 -left-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-12 -right-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
                scale: [1.2, 1, 1.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade for seamless integration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;