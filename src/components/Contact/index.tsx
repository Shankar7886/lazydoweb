import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import ContactUs from "./contactForm";

const ContactPage:React.FC =()=>{
    return(
        <>
         <div
        style={{
          minHeight: "100vh",
          paddingTop:"70px"
        }}
      >
        <Header/>
          <ContactUs/>
        <Footer/>
        </div>
        </>
    )
}

export default ContactPage