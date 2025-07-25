import React  from "react";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection"
import CRMInsideOutSection from "./thirdSection";
import CRMServicesSection from "./fourthSection";
import WhyCustomCRM from "./fifthSection";


const CRMSoftwareDevelopement:React.FC =()=>{
    return(
        <>
         <div className="relative w-full min-h-screen overflow-x-hidden text-gray-800">
              <FirstSection/>
              <SecondSection/>
              <CRMInsideOutSection/>
              <CRMServicesSection/>
              <WhyCustomCRM/>
        </div>
        </>
    )
};

export default CRMSoftwareDevelopement;