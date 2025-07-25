import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
 
  Globe
} from 'lucide-react';

const PremiumFinanceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 min-h-screen">
      {/* Subtle Background Elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-50 to-emerald-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-lime-50 to-green-50 rounded-full blur-3xl opacity-60"></div>
      </div> */}

      {/* Main Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight">
                  <span className="font-extralight text-gray-600">Revolutionizing</span>
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Finance</span>
                  <br />
                  <span className="font-light">Through Smart</span>
                  <br />
                  <span className="font-medium text-gray-800">Digital Innovation</span>
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="font-light">
                  Join the future of banking and financial services with <span className="font-medium text-gray-900">Lazy Do</span>. 
                  Our innovative digital solutions are revolutionizing the banking and financial institution operations—streamlining 
                  productivity, reducing costs, and improving customer experiences.
                </p>
                
                <p className="font-light">
                  While the financial environment transforms at lightning speed, banks and finance corporations are moving 
                  faster to adopt web and mobile phone application solutions as a means to remain ahead in the curve. 
                  By selecting Lazy Do, numerous high-profile banking and finance companies have 
                  opened the door to sustainable growth within this highly competitive market.
                </p>
                
                <p className="font-light">
                  In the past few years, we have successfully implemented a variety of strong digital finance platforms 
                  such as mobile banking, financial management, and fintech solutions for government organizations 
                  as well as public sector banks.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
             
              </div>
            </div>

            {/* Premium Visual Element */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-300/50 p-8 border border-gray-200/50 backdrop-blur-sm">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-500">Lazy Do</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-6">
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                    
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Mobile Banking</div>
                          <div className="text-sm text-gray-500">Next-gen solutions</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Security First</div>
                          <div className="text-sm text-gray-500">Bank-grade protection</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-lime-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Digital Growth</div>
                          <div className="text-sm text-gray-500">Scalable platforms</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart Representation */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium opacity-90">Performance Metrics</div>
                        <Globe className="w-5 h-5 opacity-75" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-90">Cost Reduction</span>
                          <span className="font-bold">45%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-3/4 transition-all duration-1000"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-90">Productivity Gain</span>
                          <span className="font-bold">65%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-4/5 transition-all duration-1000 delay-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl opacity-10 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl opacity-10 blur-xl"></div>
                
                {/* Subtle Accent */}
                <div className="absolute top-8 -left-2 w-1 h-24 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumFinanceSection;