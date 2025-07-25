import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface HighlightWord {
  text: string;
  color: string;
}

const highlightWords: HighlightWord[] = [
  { text: "healthcare mobility", color: "from-rose-500 to-red-400" },
  { text: "fitness professionals", color: "from-orange-500 to-yellow-400" },
  { text: "entertainment", color: "from-purple-500 to-pink-400" },
  { text: "media", color: "from-indigo-500 to-blue-400" },
  { text: "next-generation", color: "from-emerald-500 to-teal-400" },
  { text: "digital solutions", color: "from-red-500 to-rose-400" },
  { text: "on-demand", color: "from-cyan-500 to-blue-400" },
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

export default function MediaEntertainmentSection() {
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
      className="py-24 px-6 text-center relative overflow-hidden bg-white"
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
        <div className="w-full h-full border border-rose-400/20 rounded-2xl rotate-45" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Gradient divider line */}
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
              className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60"
            />
            <div className="absolute -left-1 -top-1 w-2 h-2 bg-gradient-to-br from-red-400 to-pink-500 rounded-full" />
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-12"
        >
          Bridging Innovation:{" "}
          <span className="font-medium text-red-600">
            Media & Entertainment
          </span>{" "}
          Services
        </motion.h2>

        {/* Content Blocks */}
        <div className="space-y-10 text-left">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl leading-relaxed font-light text-slate-700 tracking-wide"
          >
            Enrich your business by adopting{" "}
            <WordHighlight index="1">healthcare mobility</WordHighlight>{" "}
            solutions that bring together{" "}
            <WordHighlight index="2">fitness professionals</WordHighlight>,
            healthcare professionals, patients, and medical businesses — all via{" "}
            <WordHighlight index="5">next-generation</WordHighlight> digital
            platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl leading-relaxed font-light text-slate-700 tracking-wide"
          >
            The{" "}
            <WordHighlight index="3">entertainment</WordHighlight> and{" "}
            <WordHighlight index="4">media</WordHighlight> space are growing at
            a fast pace, and Lazy Do is leading the way with
            customized mobile and web application development services. Using
            the latest tools and technologies, we build{" "}
            <WordHighlight index="6">digital solutions</WordHighlight> that
            support music, video, gaming, sports and more. Our{" "}
            <WordHighlight index="7">on-demand</WordHighlight> app development
            ensures enhanced user experience and innovation at your fingertips.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
