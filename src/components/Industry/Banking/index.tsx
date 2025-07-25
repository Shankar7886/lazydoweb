import TestimonialsSection from "../../About/SixthSection";
import FintechExpertiseSection from "./fifthSection";
import FirstSection from "./firstSection";
import TravelAppFeatures from "./fourthSection";
import PremiumFinanceSection from "./secondSection";
import FinanceSolutionsSection from "./thirdSection";


export default function BankingPage() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      {/* Background stays fixed or absolute and behind */}
     <FirstSection/>
     <PremiumFinanceSection/>
     <FinanceSolutionsSection/>
     <TravelAppFeatures/>
     <FintechExpertiseSection/>
     <TestimonialsSection/>
    </div>
  );
}
