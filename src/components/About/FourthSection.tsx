import { motion } from "framer-motion";

import ImageHostLink from "../../variable";

const AboutUsSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-left tracking-tight">
            About Us
          </h2>
          <div className="h-1 w-20 bg-red-500 mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
            <span className="font-semibold text-gray-800">
              Lazy Do
            </span>{" "}
            is a leading software development company dedicated to providing
            innovative and tailored solutions to businesses of all sizes. With
            our team of experienced developers and cutting-edge technologies,
            we strive to deliver high-quality software products that meet our
            clients’ unique requirements.
          </p>
        </motion.div>

        {/* Right: Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
        >
          <video
            src={`${ImageHostLink}team.mp4`} // Replace with your actual path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
