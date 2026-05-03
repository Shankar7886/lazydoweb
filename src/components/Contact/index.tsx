import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ContactUs from "./contactForm";
import GradientMesh from "../../lib/GradientMesh";

const ContactPage: React.FC = () => {
  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "70px",
        }}
      >
        <GradientMesh colors={["#fde8e1", "#e8e6ff", "#d4f0e8"]} />
        <Header />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
