import { type ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

interface ThreeSceneProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  cameraPosition?: [number, number, number];
  fov?: number;
  disableOnMobile?: boolean;
}

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isMobile =
  typeof window !== "undefined" && window.innerWidth <= 768;

export default function ThreeScene({
  children,
  className = "",
  style,
  cameraPosition = [0, 0, 8],
  fov = 50,
  disableOnMobile = false,
}: ThreeSceneProps) {
  if (prefersReduced || (disableOnMobile && isMobile)) return null;

  return (
    <Canvas
      className={className}
      style={style}
      camera={{ position: cameraPosition, fov }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} color="#fff8f0" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#e8e6ff" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
