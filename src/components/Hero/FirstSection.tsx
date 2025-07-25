import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import webAnimation from "./Assests/1.json";
import mobileAnimation from "./Assests/2.json";
import marketingAnimation from "./Assests/3.json";
import useGoToContactPage from "../Contact/contactFn";
import companyLogo from "../../assets/logogreen.png";

const HeroSection = () => {
  const goContact = useGoToContactPage();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 200),
      setTimeout(() => setAnimationStep(2), 400),
      setTimeout(() => setAnimationStep(3), 600),
      setTimeout(() => setAnimationStep(4), 800),
      setTimeout(() => setAnimationStep(5), 1000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: animationStep >= 1 ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f5f7 0%, #fafafa 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,0,0,0.01) 0%, transparent 40%),
                             radial-gradient(circle at 80% 80%, rgba(0,0,0,0.01) 0%, transparent 40%)`,
          backgroundSize: "800px 800px",
        }}
      />

      <section
        style={{
          padding: "1rem 1rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: animationStep >= 2 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <img
            src={companyLogo}
            alt="Lazy Do"
            style={{
              width: "clamp(12rem, 30vw, 24rem)",
              margin: "0 auto 1.5rem", // center horizontally, with bottom spacing
              display: "block",
            }}
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: animationStep >= 3 ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "1.5rem",
              fontFamily:
                "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
              color: "#6e6e73",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.5",
            }}
          >
            Engineered for excellence. Built for the future.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: animationStep >= 4 ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontFamily: "'SF Pro Text'",
              color: "#86868b",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            We create digital solutions that combine cutting-edge technology
            with sophisticated design principles. Our CRM, DMS, and custom
            development services are meticulously crafted to deliver exceptional
            performance and unparalleled user experiences.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: animationStep >= 4 ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginTop: "5rem",
            textAlign: "center",
            alignItems: "start",
          }}
        >
          {[
            {
              title: "Web Development",
              desc: "Precision-engineered digital experiences that set new industry standards.",
              animation: webAnimation,
            },
            {
              title: "Mobile Development",
              desc: "Native applications crafted for the most discerning users.",
              animation: mobileAnimation,
            },
            {
              title: "Digital Marketing",
              desc: "Strategic brand elevation through sophisticated digital orchestration.",
              animation: marketingAnimation,
            },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: "1rem" }}>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  marginBottom: "1.5rem",
                }}
              >
                <Lottie
                  animationData={item.animation}
                  loop
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  marginBottom: "0.75rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "'SF Pro Text'",
                  color: "#6e6e73",
                  lineHeight: "1.6",
                  maxWidth: "90%",
                  margin: "0 auto",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: animationStep >= 5 ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0056d3" }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: "1.1rem",
              fontFamily: "'SF Pro Text'",
              fontWeight: 500,
              color: "white",
              backgroundColor: "#007aff",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0, 122, 255, 0.3)",
            }}
            onClick={goContact}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
