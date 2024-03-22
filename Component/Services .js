import React from "react";
import '../Css/ServiceStyle.css';
import Card from "./Card";
import Data from "./Data";
import photographImage from '../Images/ServicesPhotograph.JPG';
    {/** this a code for services that are landed on webpage  */}
const Services =()=>{
    return(
    
        <>
        <h1>Our Services </h1>
        <div className="services">
            {Data.map((values)=>{
            return(
                <Card
                title1={values.stitle}
                imgSource={values.imgsrc}
                desc1 ={values.desc1}
                btnService={values.btnService}
                />)
                

            } )}
        

        </div>
        
 
        </>
    )

}
export default Services;