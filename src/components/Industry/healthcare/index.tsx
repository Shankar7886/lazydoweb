import TestimonialsSection from "../../About/SixthSection";
import HealthFeaturesSection from "./fifthSection";
import HealthcareLanding from "./firstSEction";
import TechHealthcareSection from "./fourthSection";
import HealthcareSolutionsSection from "./secondSection";
import HealthcareProcessSection from "./thirdSection";


export default function HealthCarePage() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      {/* Background stays fixed or absolute and behind */}
     <HealthcareLanding/>
     <HealthcareSolutionsSection/>
     <HealthcareProcessSection/>
     <TechHealthcareSection/>

     <HealthFeaturesSection/>
     <TestimonialsSection/>
    </div>
  );
}
