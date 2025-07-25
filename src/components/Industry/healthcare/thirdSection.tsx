import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "Our business analysts thoroughly explore what you want, face, and need. After shared discussions, we organize a kickoff session for designers and developers to map a detailed roadmap towards a successful build.",
  },
  {
    title: "Smart Development",
    description:
      "To make your healthcare operations stronger and your services more organized, our development team uses latest technologies and frameworks to shape your idea into a robust online solution.",
  },
  {
    title: "Quality Assurance",
    description:
      "Your flawless user experience is our priority. Our quality analysts conduct intense testing with latest tools to ensure your application is efficient, reliable, and absolutely bug-free.",
  },
  {
    title: "Final Deployment",
    description:
      "Releasing your application is a milestone we approach with care. We adhere to each guideline established by the Play Store and App Store to ensure your app's approval and best performance after release.",
  },
];

export default function HealthcareProcessSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden font-quicksand">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-playfair text-slate-900 leading-snug"
        >
          Our Process: From Vision to{" "}
          <span className="bg-gradient-to-r from-sky-500 to-blue-400 text-transparent bg-clip-text">
            Interactive Innovation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 mt-4"
        >
          We believe each phenomenal solution starts with planning and ends with
          an experience that excites.
        </motion.p>
      </div>

      {/* Process Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="p-6 rounded-xl border border-slate-100 shadow-sm bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition"
          >
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-400 text-white rounded-full text-lg font-semibold shadow">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2 font-playfair">
              {step.title}
            </h3>
            <p className="text-slate-600 text-md leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Shapes */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-16 right-0 w-80 h-80 bg-gradient-to-br from-blue-400 to-sky-300 rounded-full"
      />
    </section>
  );
}
