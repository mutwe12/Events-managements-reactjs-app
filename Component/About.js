import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import log from '../Images/log.png';
import aboutImage from '../Images/aboutImage.JPG';
import Same from "./Same";
const About =()=>{
    return(
        <>
     <Same  
        title= "Know About us!!!!!!!!!!!!!!!"
        text="We offer  best service regarding any events and make it memorable to
         your best expectations. 
        "
        imgsrc={aboutImage}
        btn=" Know More"/>   
      
        </>
    )

}
export default About;