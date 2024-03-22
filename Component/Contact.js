import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../Css/ContactStyle.css';



const Contact =()=>{
    return(
        <>
        <h1>Contact  Page</h1>
        <form className="contact">
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" placeholder="enter your Name"/>
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" placeholder="enter your email"/>
              
            </div>
            <div>
            { /** <label htmlFor="password">
                    Password
                </label>
              <input type="password" placeholder="enter your password"/>*/}
              
            </div>
            <div>
                <label htmlFor="mobile">
                    Phone
                </label>
                <input type="mobile" placeholder="enter your phome"/>
              
            </div>
            <div className ="btnBox"> 
                <div className="btn">
                <NavLink exact to="/" className="Submit"
                   >Submit Details</NavLink>{/**button to */}

                </div>
                    </div>


        </form>
        </>
    )

}
export default Contact ;