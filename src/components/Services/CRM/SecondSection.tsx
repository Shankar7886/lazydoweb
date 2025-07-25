import React from "react";
import { motion } from "framer-motion";

const CRMLaptopSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-16 px-10 md:px-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-gradient-radial from-amber-50/60 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Minimal grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Refined badge */}
        

          {/* Sophisticated heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight"
          >
            <span className="font-extralight"> </span>
            <span className="font-medium bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">CRM Development Company</span>
          </motion.h2>

          {/* Elegant subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Crafting sophisticated customer relationship platforms that transform business interactions through intelligent design and seamless functionality
          </motion.p>
        </motion.div>

        {/* Refined content layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main content block */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/40 shadow-xl shadow-gray-100/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Tailored Excellence</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  At <span className="font-medium text-blue-900">Lazy Do</span>, we architect bespoke CRM ecosystems that align perfectly with your business vision. Our approach combines deep industry expertise with cutting-edge technology to deliver solutions that drive meaningful growth.
                </p>
                <p className="text-gray-700 leading-relaxed font-light">
                  Every platform we create is thoughtfully designed for scalability and user experience, ensuring your team can focus on what matters most—building exceptional customer relationships.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50">
                  <h4 className="font-medium text-gray-900 mb-2">Strategic Partnership</h4>
                  <p className="text-gray-700 font-light leading-relaxed text-sm">
                    Our experienced team partners with organizations across industries, from emerging startups to established enterprises, delivering CRM solutions that evolve with your business needs.
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50">
                  <h4 className="font-medium text-gray-900 mb-2">Innovation Focus</h4>
                  <p className="text-gray-700 font-light leading-relaxed text-sm">
                    We integrate the latest technologies and best practices to create CRM platforms that not only meet today's requirements but anticipate tomorrow's opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-6 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200/30">
              <p className="text-lg text-gray-800 leading-relaxed font-light mb-3">
                Our development process goes beyond traditional software creation. We immerse ourselves in understanding your unique business model, delivering functional and sophisticated CRM systems that catalyze sustainable growth.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">
                When you need a technology partner committed to excellence, 
                <span className="text-blue-900">Lazy Do</span> delivers results that matter.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CRMLaptopSection;