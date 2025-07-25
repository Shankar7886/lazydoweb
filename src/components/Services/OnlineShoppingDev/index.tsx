import React from "react";
import FloatingWhiteBackground from "./background";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
// import PriceAnimation from "./calculter";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection"
import TestimonialsSection from "./testinomianlSection";

const OnlineShoppingAppDev:React.FC = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden text-gray-800">
        <div className="fixed inset-0 -z-10">
            <FloatingWhiteBackground/>
        </div>
       <FirstSection/>
       <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <TestimonialsSection/>
      </div>
     
      
    </>
  );
};

export default OnlineShoppingAppDev;
