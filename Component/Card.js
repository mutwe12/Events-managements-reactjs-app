import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Card =(props)=>{
    return(
        <>     {/** hello  those are codes for retreived data diplayed on 
          page of services pages comes from data.js 
         */}
             <div className="card">
            <div>
            <h2>{props.title1}</h2>{/** this heading of all services */}
            <img src={props.imgSource} alt="service1"/>{/** this for an image landing on service pages */}
            <p>
            {props.desc1}  {/** thia s code is for description of Service page */}
            </p>
            <div className ="btnBox"> 
                <div className="btn">
                <NavLink to=" " className="readMore" 
                >{props.btnService}</NavLink>{/** button to read */}

                </div>
                    </div>
            </div>

        </div>
        </>
    )

}
export default Card ;