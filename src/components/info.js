import React from "react";
import Image from "../images/Rectangle.jpg";
export default function Info(){
  return(
    <div className="Info">
      <img src={Image} alt=""/>
      <h4>Laura Smith</h4>
      <h5>Front-end Developer</h5>
      <h6>laurasmith.website</h6>
      <a href="gmail.com">
        <img src="" alt="" />
        Email
      </a>
    </div>
  )
}