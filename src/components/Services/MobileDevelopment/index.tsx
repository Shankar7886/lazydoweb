import React from "react";
import WebBackground from "./background";
import FirstSection from "./FirstSection";
import WebDevelopmentServicesSection from "./SeconsSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";

const MobileDevService:React.FC =()=>{
    return(
        <> <div className="relative w-full min-h-screen overflow-x-hidden text-gray-800">
              
              <div className="fixed inset-0 -z-10">
                <WebBackground />
              </div>
              <FirstSection/>
              <WebDevelopmentServicesSection/>
              <ThirdSection/>
              <FourthSection/>
              <FifthSection/>
            </div>   
        </>
    )
}

export default MobileDevService