import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const IndustryPage:React.FC =()=>{
    return(
        <>
         <div
        style={{
          minHeight: "100vh",
          // background:
          //   "linear-gradient(25deg, rgb(255, 255, 255) 0%, rgba(222, 214, 235, 0.12) 50%, rgb(242 245 245) 100%)",
          paddingTop: "40px",
          // paddingBottom: "80px",
        }}
      >
        <Header/>
         <Outlet/>
        <Footer/>
        </div>
        </>
    )
}

export default IndustryPage