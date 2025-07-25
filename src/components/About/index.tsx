import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import FirstSectionAbout from "./FirstSection";

const AboutUs:React.FC =()=>{
    return(
        <>
         <div
        style={{
          minHeight: "100vh",
          
        //   paddingTop: "40px",
          // paddingBottom: "80px",
        }}
      >
        <Header/>
        <FirstSectionAbout/>
        <Footer/>
      </div>
       
        </>
    )
}

export default AboutUs;