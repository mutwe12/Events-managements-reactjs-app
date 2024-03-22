import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";



const Same =(props)=>{
    return(
        <>
        <div className="mainSection">
        <div className="conentBox">
            <h1>
                {props.title}
        {/* Amea Events ** the events code paragraph */}
            </h1>
            <p>{props.text}
                </p>
                <div className ="btnBox"> 
                <div className="btn">
                <NavLink exact to="/About" className="readMore"
                   >{props.btn}</NavLink>{/**button to about page */}

                </div>
                    </div>
          

        </div>{/**Home page image  */}
     <div className="ImageContainer">
            <img src={props.imgsrc}  alt="home"/>

        </div>

      </div>
        </>
    )

}
export default Same ;