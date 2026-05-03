import { type ReactNode } from "react";
import Tilt from "react-parallax-tilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEffect?: boolean;
  maxAngle?: number;
  disabled?: boolean;
}

const isTouch =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

export default function TiltCard({
  children,
  className = "",
  glareEffect = false,
  maxAngle = 8,
  disabled = false,
}: TiltCardProps) {
  if (isTouch || disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tilt
      className={className}
      tiltMaxAngleX={maxAngle}
      tiltMaxAngleY={maxAngle}
      perspective={1000}
      glareEnable={glareEffect}
      glareMaxOpacity={0.12}
      glareColor="rgba(255,255,255,0.8)"
      scale={1.02}
      transitionSpeed={600}
    >
      {children}
    </Tilt>
  );
}
