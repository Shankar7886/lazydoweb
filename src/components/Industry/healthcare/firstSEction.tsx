
import { motion } from 'framer-motion';
// import doctorImage1 from "../../../assets/healthBackground.jpg";
// import doctorImage2 from "../../../assets/healthsecond.jpg";
import useGoToContactPage from '../../Contact/contactFn';
import ImageHostLink from '../../../variable';

export default function App() {
  const goContact = useGoToContactPage();

  const doctorImage1 = `${ImageHostLink}healthBackground.jpg`
  const doctorImage2 = `${ImageHostLink}healthsecond.jpg`
  return (
    <section className="relative w-full min-h-screen bg-white text-slate-800 flex items-center justify-center overflow-hidden font-quicksand py-16 px-4 md:px-8">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-cyan-400/10 rounded-full translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-purple-400/10 rounded-full -translate-x-1/2" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-semibold text-slate-900 mb-6 leading-tight tracking-tight"
          >
            Healthcare App Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-quicksand text-slate-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
          >
            Let your business leverage healthcare mobility solutions to connect practitioners, patients, fitness trainers, and medical companies.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 165, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-quicksand font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out self-center lg:self-start"
           onClick={goContact}
          >
            Get Started
          </motion.button>

          {/* Stats */}
        
        </div>

        {/* Right Image Area */}
        <div className="relative flex items-center justify-center h-96 lg:h-[500px] w-full">
          {/* Doctor Images */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `url(${doctorImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              top: '10%',
              left: '10%',
              transform: 'rotate(-5deg)'
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `url(${doctorImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              bottom: '10%',
              right: '10%',
              transform: 'rotate(5deg)'
            }}
          />

          {/* Decorative Circles */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-orange-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
