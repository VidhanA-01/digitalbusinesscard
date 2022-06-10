import React from "react";
import Info from "./components/info.js";
import About from "./components/About.js";
import Interest from "./components/Interest.js";
import Footer from "./components/Footer.js";
export default function App(){
  return(
    <div className="InsideCard">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}