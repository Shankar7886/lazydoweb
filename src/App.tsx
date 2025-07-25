import "./App.css";
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import LuxuryLoader from "./components/Loader";

// Your route components
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import ServicesPage from "./components/Services";
import WebDevService from "./components/Services/CustomSoftwareDev";
import MobileDevService from "./components/Services/MobileDevelopment";
import OnlineShoppingAppDev from "./components/Services/OnlineShoppingDev";
import CRMSoftwareDevelopement from "./components/Services/CRM";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import WebDevlopment from "./components/Services/webdevlopment";
import IndustryPage from "./components/Industry";
import TravelPage from "./components/Industry/Travel";
import FoodPage from "./components/Industry/food";
import HealthCarePage from "./components/Industry/healthcare";
import BankingPage from "./components/Industry/Banking";
import MediaPage from "./components/Industry/media";
import BlogPage from "./components/Blog";
import FirstBlog from "./components/Blog/one";
import SecondBlog from "./components/Blog/two";
import DefaultBlogContent from "./components/Blog/default";
import ThirdBlog from "./components/Blog/three";
import PortfolioHome from "./components/PortFolio/PortfolioHome";
import ProjectDetail from "./components/PortFolio/ProjectDetail";
import ContactUSPage from "./components/Contact";
import ScrollToTop from "./components/scroll";
import LuxuryNotFoundPage from "./components/404";

const RouteLoaderWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LuxuryLoader />}
      <ReactRoutes location={location} key={location.pathname}>
        
        <Route path="/" element={<Hero />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<ServicesPage />}>
          <Route path="customWebDevlopment" element={<WebDevService />} />
          <Route path="mobilebDevlopment" element={<MobileDevService />} />
          <Route
            path="onlineShoppingAppDevlopment"
            element={<OnlineShoppingAppDev />}
          />
          <Route path="CrmSoftwareDvelopment" element={<CRMSoftwareDevelopement />} />
          <Route path="DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="WebDevlopment" element={<WebDevlopment />} />
        </Route>
        <Route path="/Industry" element={<IndustryPage />}>
          <Route path="TravelPage" element={<TravelPage />} />
          <Route path="Food" element={<FoodPage />} />
          <Route path="HealthCare" element={<HealthCarePage />} />
          <Route path="Banking" element={<BankingPage />} />
          <Route path="Media" element={<MediaPage />} />
        </Route>
        <Route path="/blogs" element={<BlogPage />}>
          <Route index element={<DefaultBlogContent />} />
          <Route path="1" element={<FirstBlog />} />
          <Route path="2" element={<SecondBlog />} />
          <Route path="3" element={<ThirdBlog />} />
        </Route>
        <Route path="/portfolio" element={<PortfolioHome />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactUSPage />} />
        <Route path="*" element={<LuxuryNotFoundPage/>}/>
      </ReactRoutes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <RouteLoaderWrapper />
    </BrowserRouter>
  );
}

export default App;
