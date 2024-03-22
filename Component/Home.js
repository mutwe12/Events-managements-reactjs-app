import React from "react";
import log1 from '../Images/log1.JPG';
import '../Css/HomeAbout.css';
import Same from "./Same";

const Home =()=>{
    return(
        <>
    <Same 
    title= "Amea Events "
    text="We are  service provides to you event with incredible tools and experienced workers  
    to prepare events related weeding celemony, birth day celebretion
    "
    imgsrc={log1 }
    btn="ReadMore"/>  
        </>
    )
    

}
export default Home;