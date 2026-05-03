import React, { useRef, useEffect, useState } from "react";
import ImageHostLink from "../../../variable";
import GradientMesh from "../../../lib/GradientMesh";
import TiltCard from "../../../lib/TiltCard";

interface CinematicFoodSectionProps {
  videoPath?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  secondaryDescription?: string;
  brandName?: string;
}

const CinematicFoodSection: React.FC<CinematicFoodSectionProps> = ({
  videoPath = ImageHostLink + "fast-food.mp4",
  title = "Smart Food Ordering App Solutions for",
  subtitle = "Modern Businesses",
  description = "The food delivery boom in the online space has revolutionized eating habits. With more and more users choosing to order food from the comfort of their own homes or offices, the demand for hassle-free digital platforms is rising by leaps and bounds. On-demand food delivery has fully replaced the traditional dine-in model, enabling restaurants to deliver directly to customers' doorsteps—anywhere, anytime.",
  secondaryDescription = "Led by an expert team of developers, we deal in the creation of custom food delivery app solutions for startups, standalone eateries, and café owners. Our user-friendly platforms are intended to assist you in growing, expanding, and serving more with efficiency and innovation.",
  brandName = "Lazy Do",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.play().catch((e) => {
        console.log("Video autoplay failed:", e);
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28 px-6 text-white bg-black">
      <GradientMesh colors={["#fef3cd", "#fde8e1", "#ffe0cc"]} intensity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2
            className="text-4xl md:text-5xl font-thin leading-tight"
            style={{ color: "#fff" }}
          >
            {title}{" "}
            <span style={{ color: "var(--color-accent-primary)", fontWeight: 600 }}>
              {subtitle}
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">{description}</p>

          <p className="text-base leading-relaxed text-gray-400">
            At <span className="text-white font-medium">{brandName}</span>, we have
            achieved a solid presence in this dynamic landscape as a reliable Food
            Delivery App Development Company in India. {secondaryDescription}
          </p>
        </div>

        {/* Video in TiltCard */}
        <TiltCard>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: "450px" }}>
            {hasError ? (
              <div className="flex items-center justify-center w-full h-full bg-gray-900 text-gray-400 text-base rounded-2xl">
                Video could not be loaded
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setHasError(true)}
              >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default CinematicFoodSection;
