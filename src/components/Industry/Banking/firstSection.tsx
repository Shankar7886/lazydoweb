import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FintechLanding() {
  const [currentAmount, setCurrentAmount] = useState(12928.10);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentAmount(prev => prev + Math.random() * 100 - 50);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount:number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 sm:mb-6 text-center lg:text-left">
              <span className="font-semibold">Banking and Finance</span><br />
              <span className="font-normal">App Development</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-light text-center lg:text-left">
              Transform banking services with our innovative strategies. Banking & Financial solutions offered by Apbundle Technologies are increasing operational efficiency of the banking and finance industry.
            </p>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="flex-1 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 sm:p-6 lg:p-12 flex items-center justify-center relative overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/20 rounded-full blur-xl sm:blur-2xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-xl sm:blur-2xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md space-y-3 sm:space-y-4">
            {/* Balance Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <motion.div
                animate={{ 
                  scale: isAnimating ? 1.02 : 1,
                  y: isAnimating ? -2 : 0
                }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                  <span className="text-xs text-gray-500 hidden sm:inline">USD Balance</span>
                  <span className="text-xs text-gray-500 sm:hidden">USD</span>
                </div>
                <div className="text-sm sm:text-lg font-semibold text-gray-900">
                  {formatCurrency(currentAmount)}
                </div>
                <div className="text-xs text-emerald-500">+6%</div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: isAnimating ? 1.02 : 1,
                  y: isAnimating ? -2 : 0
                }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">€</span>
                  </div>
                  <span className="text-xs text-gray-500 hidden sm:inline">EUR Balance</span>
                  <span className="text-xs text-gray-500 sm:hidden">EUR</span>
                </div>
                <div className="text-sm sm:text-lg font-semibold text-gray-900">
                  {formatCurrency(currentAmount * 0.85)}
                </div>
                <div className="text-xs text-emerald-500">+8%</div>
              </motion.div>
            </div>

            {/* Payroll Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Payroll Summary</h3>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {[
                  { label: '200,000', sublabel: 'View' },
                  { label: '200,000', sublabel: 'View' },
                  { label: '200,000', sublabel: 'View' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Platform Overview */}
              <div className="mb-3 sm:mb-4">
                <div className="text-xs text-gray-600 mb-2">Platform Overview</div>
                <div className="grid grid-cols-4 gap-1 sm:gap-2">
                  {[
                    { value: '45.5%', color: 'bg-emerald-400' },
                    { value: '45.5%', color: 'bg-teal-400' },
                    { value: '45.5%', color: 'bg-cyan-400' }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`h-6 sm:h-8 ${item.color} rounded mb-1`}></div>
                      <div className="text-xs text-gray-600 hidden sm:block">{item.value}</div>
                    </div>
                  ))}
                  <div className="text-center">
                    <div className="h-6 sm:h-8 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs text-gray-400 hidden sm:block">Empty</div>
                  </div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="grid grid-cols-6 gap-1 h-8 sm:h-12 items-end mb-3">
                {[0.7, 0.4, 0.8, 0.6, 0.9, 0.5].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-emerald-400 to-teal-400 rounded-sm"
                    style={{ height: `${height * 100}%` }}
                  ></div>
                ))}
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 flex items-center space-x-3"
            >
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm sm:text-base">You are doing good!</div>
                <div className="text-xs text-gray-500">Keep up the great work</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}