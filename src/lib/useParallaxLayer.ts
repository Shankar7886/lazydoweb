import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxLayer {
  containerRef: React.RefObject<HTMLElement | null>;
  y: MotionValue<string>;
}

export function useParallaxLayer(
  speed: number = 0.3,
  outputRange?: [string, string]
): ParallaxLayer {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const range = outputRange ?? [`${speed * -10}%`, `${speed * 10}%`];
  const y = useTransform(scrollYProgress, [0, 1], range);

  return { containerRef, y };
}
