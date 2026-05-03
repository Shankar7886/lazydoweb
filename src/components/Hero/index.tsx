import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FirstHeroSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import StatsSection from "./StatsSection";

const Hero: React.FC = () => {
  return (
    <div style={{ background: "#ffffff" }}>
      <Header />
      {/* Hero — white with vivid blobs + 3D */}
      <FirstHeroSection />
      {/* Features — white */}
      <SecondSection />
      {/* Services — white, magazine list */}
      <ThirdSection />
      {/* Process — dark (#0f0e0d) */}
      <FourthSection />
      {/* Why Us — white with video */}
      <FifthSection />
      {/* Stats — dark (#0f0e0d) */}
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Hero;
