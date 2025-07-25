
import DigitalMarketingPage from "./firstSection";
import DigitalMarketingCompanySection from "./secondsection";
import DigitalMarketingServices from "./thirdSection";

const DigitalMarketing = () => {
  return (
    <>
      <div className="relative w-full overflow-x-hidden text-gray-800">
        <DigitalMarketingPage />
        <DigitalMarketingCompanySection />
        <DigitalMarketingServices/>
      </div>
    </>
  );
};

export default DigitalMarketing;