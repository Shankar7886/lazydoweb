import React from "react";
import Header from "../Header";
// import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import FirstHeroSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import StatsSection from "./StatsSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";



const Hero: React.FC = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(25deg, rgb(255, 255, 255) 0%, rgba(222, 214, 235, 0.12) 50%, rgb(242 245 245) 100%)",
          paddingTop: "40px",
          // paddingBottom: "80px",
        }}
      >
        <Header />
        <FirstHeroSection />
        <SecondSection/>
       
        {/* <BrandSection /> */}
        <ThirdSection/>
        
        <FourthSection/>
        <FifthSection/>
         <StatsSection/>
        <Footer/>
      </div>
    </>
  );
};

export default Hero;
