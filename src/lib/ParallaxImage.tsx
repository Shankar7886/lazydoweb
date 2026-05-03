import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  children: ReactNode;
  /** 0 = static, 1 = fast. Positive moves image UP as you scroll. */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Classic parallax image container.
 * The child (image/video) moves at a different speed than the scroll,
 * creating the illusion of depth. The container clips the overflow.
 *
 * Usage:
 *   <ParallaxImage speed={0.25}>
 *     <img src="..." style={{ width:"100%", height:"120%", objectFit:"cover" }} />
 *   </ParallaxImage>
 */
export default function ParallaxImage({
  children,
  speed = 0.2,
  className = "",
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll 0→1 to a y offset. Positive speed = image moves UP as you scroll.
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 15}%`, `${speed * -15}%`]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ position: "relative", ...style }}
    >
      <motion.div
        style={{
          y,
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
