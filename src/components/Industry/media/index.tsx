import TestimonialsSection from "../../About/SixthSection";
import MediaAppFeaturePanel from "./fifthSection";
import CinematicHealthcarePlatform from "./firstSection";
import CoreExpertiseSection from "./fourthSection";
import MediaEntertainmentSection from "./secondSection";
import WhyChooseUsSection from "./thirdSection";


export default function MediaPage() {
  return (
    <div className="relative w-full min-h-screen  text-gray-800">
      <CinematicHealthcarePlatform/>
      <MediaEntertainmentSection/>
      <WhyChooseUsSection/>
      <CoreExpertiseSection/>
      <MediaAppFeaturePanel/>
      <TestimonialsSection/>
    </div>
  );
}