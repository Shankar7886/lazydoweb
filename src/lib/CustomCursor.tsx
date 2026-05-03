import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28 };
  const ringConfig = { stiffness: 180, damping: 22 };

  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  const scaleRef = useRef(1);
  const ringScaleMotion = useMotionValue(1);
  const ringScale = useSpring(ringScaleMotion, { stiffness: 300, damping: 25 });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (prefersReduced || isTouch) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnterHover = () => {
      ringScaleMotion.set(1.6);
      scaleRef.current = 1.6;
    };
    const onLeaveHover = () => {
      ringScaleMotion.set(1);
      scaleRef.current = 1;
    };

    const addListeners = () => {
      document
        .querySelectorAll(
          'a, button, [data-cursor="hover"], .cursor-hover'
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterHover);
          el.addEventListener("mouseleave", onLeaveHover);
        });
    };

    window.addEventListener("mousemove", onMove);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY, ringScaleMotion, prefersReduced, isTouch]);

  if (prefersReduced || isTouch) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, scale: ringScale }}
      />
    </>
  );
}
