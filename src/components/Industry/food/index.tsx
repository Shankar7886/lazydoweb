import InteractiveFeatureSection from "./fifthSection";
import FoodOrderingLanding from "./firstSection";
import DevelopmentWorkflowSection from "./fourthSection";
import FoodOrderingSolutionsSection from "./secondSection";
import ClientSolutionsSection from "./thirdSection";


export default function FoodPage() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      {/* Background stays fixed or absolute and behind */}
      <FoodOrderingLanding/>
      <FoodOrderingSolutionsSection/>
      <ClientSolutionsSection/>
      <DevelopmentWorkflowSection/>
      <InteractiveFeatureSection/>
    </div>
  );
}
