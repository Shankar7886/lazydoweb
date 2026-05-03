import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxTextProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  size?: string;
  color?: string;
  opacity?: number;
  className?: string;
}

/**
 * Large decorative text that drifts horizontally as the page scrolls.
 * Used between sections for visual depth.
 */
export default function ParallaxText({
  text,
  direction = "left",
  speed = 120,
  size = "clamp(4rem, 12vw, 10rem)",
  color = "var(--color-ink-900)",
  opacity = 0.06,
  className = "",
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [speed, -speed] : [-speed, speed]
  );

  return (
    <div
      ref={ref}
      className={`overflow-hidden pointer-events-none ${className}`}
      style={{ userSelect: "none" }}
      aria-hidden="true"
    >
      <motion.div style={{ x }}>
        <span
          style={{
            fontSize: size,
            fontWeight: 100,
            letterSpacing: "-0.04em",
            color,
            opacity,
            whiteSpace: "nowrap",
            display: "block",
            lineHeight: 1,
          }}
        >
          {text}
        </span>
      </motion.div>
    </div>
  );
}
