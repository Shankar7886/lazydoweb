import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FirstHeroSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import StatsSection from "./StatsSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import GradientMesh from "../../lib/GradientMesh";

const Hero: React.FC = () => {
  return (
    <>
      {/* Global animated gradient background — fixed behind all content */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <GradientMesh colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]} />
      </div>

      <div style={{ minHeight: "100vh", paddingTop: "40px" }}>
        <Header />
        <FirstHeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <StatsSection />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
