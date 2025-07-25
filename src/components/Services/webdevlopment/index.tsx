import BackgroundCanvas from "../CustomSoftwareDev/background";
import FourthSection from "../CustomSoftwareDev/FourthSection";
import WebDevelopmentServices from "./firstSection";
import WebDevServicesOverviewSection from "./lastsection";
import WebDevelopmentServicesSection from "./secondSection";
import WebDevSolutionsSection from "./thirdSection";

export default function WebDevlopment() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      {/* Background stays fixed or absolute and behind */}
      <div className="fixed inset-0 -z-10">
        <BackgroundCanvas />
      </div>
      <WebDevelopmentServices />
      <WebDevelopmentServicesSection />
      <FourthSection />
      <WebDevSolutionsSection />
      <WebDevServicesOverviewSection/>
    </div>
  );
}
