import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface HighlightWord {
  text: string;
  color: string;
}

const highlightWords: HighlightWord[] = [
  { text: "Smart Healthcare", color: "from-blue-400 to-cyan-300" },
  { text: "mobile-first", color: "from-sky-500 to-blue-300" },
  { text: "digital solutions", color: "from-cyan-500 to-sky-400" },
  { text: "transparency and connectivity", color: "from-blue-400 to-teal-300" },
  { text: "innovate at scale", color: "from-indigo-400 to-cyan-400" },
  { text: "cutting-edge", color: "from-sky-500 to-blue-400" },
  { text: "future-proofed", color: "from-blue-500 to-indigo-400" },
  { text: "AI and Cloud", color: "from-cyan-500 to-sky-300" },
];

interface WordHighlightProps {
  children: React.ReactNode;
  index: string | number;
}

const WordHighlight = ({ children, index }: WordHighlightProps) => {
  const [hoveredWord, setHoveredWord] = useState<number | string | null>(null);

  const textString = typeof children === "string" ? children : "";
  const matchedWord = highlightWords.find((word) =>
    textString.toLowerCase().includes(word.text.toLowerCase())
  );

  if (!matchedWord) return <>{children}</>;

  return (
    <motion.span
      className="relative cursor-pointer inline-block"
      onMouseEnter={() => setHoveredWord(index)}
      onMouseLeave={() => setHoveredWord(null)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <span
        className={`${
          hoveredWord === index
            ? `bg-gradient-to-r ${matchedWord.color} bg-clip-text text-transparent font-semibold`
            : "text-slate-700"
        } transition-all duration-500 ease-out`}
      >
        {children}
      </span>
      {hoveredWord === index && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${matchedWord.color} origin-left rounded-full`}
        />
      )}
    </motion.span>
  );
};

export default function HealthcareSolutionsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yAlt = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 text-center relative overflow-hidden font-quicksand"
    >
      {/* Decorative Motion Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-20 w-32 h-32 opacity-10"
      >
        <div className="w-full h-full border border-slate-300/30 rounded-3xl rotate-12" />
      </motion.div>

      <motion.div
        style={{ y: yAlt }}
        className="absolute bottom-32 left-16 w-20 h-20 opacity-20"
      >
        <div className="w-full h-full border border-blue-400/20 rounded-2xl rotate-45" />
      </motion.div>

      {/* Content Block */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-semibold leading-tight tracking-tight text-slate-800">
            Revolutionizing Care Through Technology
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-6 origin-center"
          />
        </motion.div>

        {/* Paragraphs with WordHighlight */}
        <div className="space-y-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed tracking-wide">
              Revolutionizing Care with{" "}
              <WordHighlight index="1">Smart Healthcare</WordHighlight> App
              Development. Join the future of healthcare with Lazy Do — your reliable partner for developing{" "}
              <WordHighlight index="2">mobile-first</WordHighlight> healthcare
              ecosystems. We help firms bridge the gap between healthcare
              professionals, patients, fitness coaches, and hospitals using{" "}
              <WordHighlight index="3">digital solutions</WordHighlight>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed tracking-wide">
              The healthcare landscape has evolved drastically, driven by{" "}
              <WordHighlight index="4">transparency and connectivity</WordHighlight>. At Lazy, we empower hospitals, pharma companies, and medical device manufacturers to{" "}
              <WordHighlight index="5">innovate at scale</WordHighlight>. As a top-tier healthcare app development company, we design{" "}
              <WordHighlight index="6">cutting-edge</WordHighlight> solutions for pharmaceuticals, biotech, med-tech, and agritech-health industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed tracking-wide">
              Our team of experienced developers combines domain knowledge and advanced tech to build{" "}
              <WordHighlight index="7">future-proofed</WordHighlight> solutions. From real-time diagnostics to smart devices, our healthcare apps integrate{" "}
              <WordHighlight index="8">AI and Cloud</WordHighlight>—ensuring your services are not only efficient, but exceptional.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
