import BackgroundCanvas from "./background";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection"

export default function CustomWebDevPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-gray-800">
      {/* Background stays fixed or absolute and behind */}
      <div className="fixed inset-0 -z-10">
        <BackgroundCanvas />
      </div>

      {/* Section stack vertically now */}
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}
