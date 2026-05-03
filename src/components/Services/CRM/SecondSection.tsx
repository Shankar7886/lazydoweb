import React from "react";
import ScrollReveal from "../../../lib/ScrollReveal";
import TiltCard from "../../../lib/TiltCard";

const CRMLaptopSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-10 md:px-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
              CRM{" "}
              <span
                className="bg-clip-text text-transparent font-medium"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
                }}
              >
                Development Company
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Crafting sophisticated customer relationship platforms that transform
              business interactions through intelligent design and seamless functionality
            </p>
          </div>
        </ScrollReveal>

        {/* Main content block */}
        <ScrollReveal direction="up" delay={0.2}>
          <TiltCard>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Tailored Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    At{" "}
                    <span
                      className="font-medium"
                      style={{ color: "var(--color-accent-primary)" }}
                    >
                      Lazy Do
                    </span>
                    , we architect bespoke CRM ecosystems that align perfectly with
                    your business vision. Our approach combines deep industry
                    expertise with cutting-edge technology to deliver solutions that
                    drive meaningful growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Every platform we create is thoughtfully designed for
                    scalability and user experience, ensuring your team can focus on
                    what matters most—building exceptional customer relationships.
                  </p>
                </div>

                <div className="space-y-4">
                  <div
                    className="p-5 rounded-xl border"
                    style={{ borderColor: "rgba(200,57,43,0.2)", background: "rgba(200,57,43,0.04)" }}
                  >
                    <h4 className="font-medium text-gray-900 mb-2">
                      Strategic Partnership
                    </h4>
                    <p className="text-gray-700 font-light leading-relaxed text-sm">
                      Our experienced team partners with organizations across
                      industries, from emerging startups to established enterprises,
                      delivering CRM solutions that evolve with your business needs.
                    </p>
                  </div>

                  <div
                    className="p-5 rounded-xl border"
                    style={{ borderColor: "rgba(232,93,62,0.2)", background: "rgba(232,93,62,0.04)" }}
                  >
                    <h4 className="font-medium text-gray-900 mb-2">
                      Innovation Focus
                    </h4>
                    <p className="text-gray-700 font-light leading-relaxed text-sm">
                      We integrate the latest technologies and best practices to
                      create CRM platforms that not only meet today's requirements
                      but anticipate tomorrow's opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Closing statement */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center mt-8">
            <div className="max-w-4xl mx-auto glass-card rounded-xl p-6">
              <p className="text-lg text-gray-800 leading-relaxed font-light mb-3">
                Our development process goes beyond traditional software creation.
                We immerse ourselves in understanding your unique business model,
                delivering functional and sophisticated CRM systems that catalyze
                sustainable growth.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-3" />
              <p className="text-gray-700 font-medium">
                When you need a technology partner committed to excellence,{" "}
                <span style={{ color: "var(--color-accent-primary)" }}>
                  Lazy Do
                </span>{" "}
                delivers results that matter.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CRMLaptopSection;
