import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const BlogPage:React.FC =()=>{
    return(
        <>
         <div
        style={{
          minHeight: "100vh",
         
          paddingTop: "40px",
         
        }}
      >
        <Header/>
         <Outlet/>
        <Footer/>
        </div>
        </>
    )
}

export default BlogPage