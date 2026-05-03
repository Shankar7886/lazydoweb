import { motion } from "framer-motion";

interface GradientMeshProps {
  colors?: [string, string, string];
  intensity?: number;
  className?: string;
}

const defaultColors: [string, string, string] = [
  "var(--color-mesh-a)",
  "var(--color-mesh-b)",
  "var(--color-mesh-c)",
];

export default function GradientMesh({
  colors = defaultColors,
  intensity = 1,
  className = "",
}: GradientMeshProps) {
  const op = Math.min(intensity, 1);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${colors[0]} 0%, transparent 70%)`,
          opacity: op,
          top: "-10%",
          left: "-5%",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${colors[1]} 0%, transparent 70%)`,
          opacity: op * 0.85,
          bottom: "-10%",
          right: "-5%",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${colors[2]} 0%, transparent 70%)`,
          opacity: op * 0.7,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 35, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
    </div>
  );
}
