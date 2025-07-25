import React, { useState, useEffect, useRef } from 'react';
import { 
  Megaphone, 
  FileText, 
  Search, 
  MonitorSmartphone, 
  MousePointerClick, 
  Mail, 
  BarChart3, 
  ClipboardCheck, 
  TrendingUp, 
  Users2, 
  Globe,
  ArrowRight,
  Play
} from "lucide-react";
import useGoToContactPage from '../../Contact/contactFn';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient: string;
  iconColor: string;
}

interface ProcessItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient: string;
  iconColor: string;
}

const services: ServiceItem[] = [
  { 
    icon: Megaphone, 
    title: "Marketing Strategy", 
    desc: "Insightful scale-up plans using digital automation and competitive brand strategy.", 
    gradient: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500"
  },
  { 
    icon: FileText, 
    title: "Content Marketing", 
    desc: "Engaging content tailored to build trust and drive customer actions.", 
    gradient: "from-purple-500 to-purple-600",
    iconColor: "text-purple-500"
  },
  { 
    icon: Search, 
    title: "Search Engine Marketing", 
    desc: "Improve search rankings and web visibility with SEO expertise.", 
    gradient: "from-green-500 to-green-600",
    iconColor: "text-green-500"
  },
  { 
    icon: MonitorSmartphone, 
    title: "Digital Advertising", 
    desc: "Maximize reach and impact through targeted digital campaigns.", 
    gradient: "from-orange-500 to-orange-600",
    iconColor: "text-orange-500"
  },
  { 
    icon: MousePointerClick, 
    title: "PPC Marketing", 
    desc: "Certified AdWords experts managing ROI-focused paid advertising.", 
    gradient: "from-indigo-500 to-indigo-600",
    iconColor: "text-indigo-500"
  },
  { 
    icon: Mail, 
    title: "Email Marketing", 
    desc: "Compelling campaigns designed to convert and nurture your audience.", 
    gradient: "from-pink-500 to-pink-600",
    iconColor: "text-pink-500"
  },
];

const process: ProcessItem[] = [
  { 
    icon: ClipboardCheck, 
    title: "Project Requirements", 
    desc: "Business Analysts define precise project goals and strategies.", 
    gradient: "from-slate-600 to-slate-700",
    iconColor: "text-slate-600"
  },
  { 
    icon: BarChart3, 
    title: "Domain Analysis", 
    desc: "Thorough SEO analysis to understand market position and opportunities.", 
    gradient: "from-blue-600 to-blue-700",
    iconColor: "text-blue-600"
  },
  { 
    icon: TrendingUp, 
    title: "Traffic Generation", 
    desc: "Keyword-based campaigns crafted for engagement and ranking.", 
    gradient: "from-emerald-600 to-emerald-700",
    iconColor: "text-emerald-600"
  },
  { 
    icon: Users2, 
    title: "Leads Generation", 
    desc: "Lead conversion strategies tailored to your audience and channels.", 
    gradient: "from-amber-600 to-amber-700",
    iconColor: "text-amber-600"
  },
  { 
    icon: Globe, 
    title: "Grow Your Business", 
    desc: "Turn traffic into loyal customers through proven marketing methods.", 
    gradient: "from-rose-600 to-rose-700",
    iconColor: "text-rose-600"
  },
];

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl"
        style={{ 
          top: `${20 - scrollY * 0.1}%`, 
          left: `${10 - scrollY * 0.05}%`,
          transform: `translateZ(0)`
        }}
      />
      <div 
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-200/30 to-orange-200/30 blur-3xl"
        style={{ 
          top: `${60 - scrollY * 0.15}%`, 
          right: `${15 - scrollY * 0.08}%`,
          transform: `translateZ(0)`
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-200/30 to-blue-200/30 blur-3xl"
        style={{ 
          bottom: `${20 - scrollY * 0.12}%`, 
          left: `${30 - scrollY * 0.06}%`,
          transform: `translateZ(0)`
        }}
      />
    </div>
  );
};

const AppleCard: React.FC<{
  item: ServiceItem | ProcessItem;
  index: number;
  delay: number;
}> = ({ item, index, delay }) => {
  console.info(index)
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-10 blur-xl scale-105`} />
      </div>

      {/* Main card */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90">
        
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-3.5 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
            <item.icon className="w-full h-full text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight">
            {item.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-sm font-medium">
            {item.desc}
          </p>

          {/* Learn more link */}
          <div className="flex items-center gap-2 text-blue-600 font-medium text-sm pt-2 transition-all duration-300 group-hover:gap-3">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Subtle border highlight */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] transition-all duration-1000 group-hover:bg-[position:100%_0%] opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="relative text-center mb-24">
      <div className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
      <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight whitespace-nowrap">
  Our Innovative <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-2">
    Digital Marketing
  </span> Services Include:
</h4>
        
        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Designed to transform your business with cutting-edge strategies and seamless execution.
        </p>
      </div>
    </div>
  );
};

const ProcessHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative text-center mb-20">
      <div className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight whitespace-nowrap">
  Our Working <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent ml-2">
    Process
  </span>
</h2>
        
        <p className="text-lg text-gray-600 font-medium max-w-xl mx-auto leading-relaxed">
          A refined methodology that delivers exceptional results through thoughtful planning and execution.
        </p>
      </div>
    </div>
  );
};

const DigitalMarketingServices: React.FC = () => {
   const goContact = useGoToContactPage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            
            <HeroSection />

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-32">
              {services.map((service, i) => (
                <AppleCard
                  key={service.title}
                  item={service}
                  index={i}
                  delay={i * 150}
                />
              ))}
            </div>

            <ProcessHero />

            {/* Process Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {process.map((proc, i) => (
                <AppleCard
                  key={proc.title}
                  item={proc}
                  index={i}
                  delay={i * 150}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-24"   onClick={goContact}>
              <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer">
                <Play className="w-5 h-5" />
                <span>Get Started Today</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketingServices;