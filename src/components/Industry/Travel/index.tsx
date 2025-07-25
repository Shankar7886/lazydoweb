import TestimonialsSection from "../../About/SixthSection";
import CustomWebDevPage from "./firstSection";
import TravelAppFeatures from "./fourthSection";
import TravelAppSolutionsSection from "./secondSection";
import TravelBusinessSection from "./thirdSection";

export default function TravelPage() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      <CustomWebDevPage />
      <TravelAppSolutionsSection/>
      <TravelBusinessSection/>
      <TravelAppFeatures/>
      <TestimonialsSection/>
    </div>
  );
}
