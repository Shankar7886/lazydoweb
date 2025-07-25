import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface HighlightWord {
  text: string;
  color: string;
}

const highlightWords: HighlightWord[] = [
  { text: "end-to-end", color: "from-blue-500 to-cyan-400" },
  { text: "user-centric", color: "from-purple-500 to-pink-400" },
  { text: "digital impact", color: "from-emerald-500 to-teal-400" },
  { text: "beautiful-looking", color: "from-rose-500 to-orange-400" },
  { text: "interactive", color: "from-violet-500 to-purple-400" },
  { text: "long-lasting impression", color: "from-indigo-500 to-blue-400" },
  { text: "experienced", color: "from-amber-500 to-yellow-400" },
  { text: "world-class", color: "from-pink-500 to-rose-400" },
  { text: "personalized", color: "from-teal-500 to-cyan-400" },
  { text: "modern web technologies", color: "from-slate-600 to-gray-500" },
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

export default function WebDevelopmentServicesSection() {
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
      className="py-24 px-6 text-center relative overflow-hidden"
    >
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

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl mx-auto relative"
      >
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="relative h-px"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
            />
            <div className="absolute -left-1 -top-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent"
            >
              Web Development{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-red-600 via-darkred-600 to-red-600 bg-clip-text text-transparent font-extralight"
            >
              Services
            </motion.span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-6 origin-center"
          />
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 tracking-wide">
              <WordHighlight index="mayank">
               Lazy Do
              </WordHighlight>{" "}
              is committed to keeping pace with changing industry standards,
              providing{" "}
              <WordHighlight index="end-to-end">
                end-to-end web development services
              </WordHighlight>{" "}
              through{" "}
              <WordHighlight index="user-centric">
                user-centric approaches
              </WordHighlight>
              . Our solutions are specifically designed to suit the specific
              needs of each client and maximize their{" "}
              <WordHighlight index="digital-impact">
                digital impact
              </WordHighlight>
              . A{" "}
              <WordHighlight index="beautiful">beautiful-looking</WordHighlight>{" "}
              and{" "}
              <WordHighlight index="interactive">
                interactive website
              </WordHighlight>{" "}
              is necessary for creating a{" "}
              <WordHighlight index="impression">
                long-lasting impression
              </WordHighlight>{" "}
              on your visitors—and we assist you in doing just that.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 tracking-wide">
              At{" "}
              <WordHighlight index="mayank">
             Lazy Do
              </WordHighlight>
              , our team of{" "}
              <WordHighlight index="experienced">
                experienced web designers
              </WordHighlight>{" "}
              and developers with a profound understanding of{" "}
              <WordHighlight index="web-tech">web technologies</WordHighlight>{" "}
              and development methodologies. From{" "}
              <WordHighlight index="startups">small startups</WordHighlight> to{" "}
              <WordHighlight index="corporations">
                big corporations
              </WordHighlight>
              , our professionals are well-versed in designing{" "}
              <WordHighlight index="world-class">world-class</WordHighlight>,{" "}
              <WordHighlight index="personalized">
                personalized websites
              </WordHighlight>{" "}
              catered to your industry requirements. If you are looking to start
              a <WordHighlight index="corporate">corporate</WordHighlight> or{" "}
              <WordHighlight index="ecommerce">
                e-commerce website
              </WordHighlight>
              ,{" "}
              <WordHighlight index="ideal">
              Lazy Do is your ideal partner
              </WordHighlight>{" "}
              for digital success.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
