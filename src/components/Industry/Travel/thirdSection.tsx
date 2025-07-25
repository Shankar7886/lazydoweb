import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BarChart3,
  Target,
  Zap,
  Smartphone,
  Palette,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ImageHostLink from "../../../variable";
const image1 = "In-DepthProjectConsultation.jpg";
const image2 = "ComprehensiveProjectAnalysis.jpg";
const image3 = "result.jpg";
const image4 = "2431333.jpg";
const image5 = "4205553.jpg";

const image6 = "7706589.jpg";
const image7 = "370976-PBTSKZ-439.jpg";
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const TravelBusinessSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "In-Depth Project Consultation",
      description:
        "We begin with purposeful conversations. Our seasoned management team immerses themselves in your project requirements to craft digital solutions that exceed expectations.",
      imageUrl: image1,
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Comprehensive Project Analysis",
      description:
        "Taking advantage of cutting-edge tools and technology, our analysts break down your project at each step—giving you a strong foundation that results in tangible, successful results.",
      imageUrl: image2,
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Focused on Real Results",
      description:
        "Our solutions are designed with intent. By focusing on your business objectives, we guide you through competitive hurdles and unlock potential.",
      imageUrl: image3,
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Crafting a Smart Digital Environment",
      description:
        "As a leading development partner, we build a solid, tech-fueled environment—fitted with the most advanced features and innovations—to boost your customer experience.",
      imageUrl: image4,
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Customer App Interface",
      description:
        "Our UI/UX specialists design for the user—creating seamless, customer-centric apps loaded with intelligent features such as easy navigation and an optimized booking experience.",
      imageUrl: image5,
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Visually Engaging Design",
      description:
        "We infuse a dash of creativity in every interface. Our designers employ cutting-edge tools to create distinctive looks that render high user satisfaction and a sophisticated brand experience.",
      imageUrl: image6,
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Robust Admin Dashboard",
      description:
        "Our intuitive, white-label admin panels are designed to be at your fingertips—enabling you to oversee operations, track sales, and keep an eye on business performance with ease.",
      imageUrl: image7,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How We Empower Your
            <span className="block text-sky-600">Travel Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We create intelligent strategies to enable travel brands to succeed
            in the current fast-paced digital landscape.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={`${ImageHostLink}${services[currentIndex].imageUrl}`}
                  alt={services[currentIndex].title}
                  className="w-full h-full object-cover"
                   loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Content */}
          <div>
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                  <div className="text-sky-600">
                    {services[currentIndex].icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {services[currentIndex].title}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {services[currentIndex].description}
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-200">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            {/* Service Navigation Dots */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-sky-50 border-l-4 border-sky-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        index === currentIndex
                          ? "bg-sky-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <span
                      className={`font-medium ${
                        index === currentIndex
                          ? "text-sky-600"
                          : "text-gray-700"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-sky-600 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
     
      </div>
    </section>
  );
};

export default TravelBusinessSection;
