import React from "react";
import log from '../Images/log.png';
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import  '../Css/ListStyle.css';

const List = () => {
    return (
        <>
            <header>
                <h1>{/* Add your title here */}</h1>
                <div className="Container container-flex" >
                    {/* child contain logo */}
                    <img src={log} alt="log" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                </div>
                <nav>
                    <div className="list">
                        {/* child contain menu links part */}
                        <NavLink  exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/Services" className="listItem" activeClassName="activeItem">Services</NavLink>
                        <NavLink to="/Contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                        <NavLink to="/Policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                        <NavLink to="/About" className="listItem" activeClassName="activeItem">About</NavLink>
                    </div>
                </nav>
                {/* child icon list */}
                <div className="icons">
                    <a href="https://www.google.com/" className="icon-link">
                        <SearchIcon className="icon" />
                    </a>
                    <a href="url_to_person_website" className="icon-link">
                        <PersonOutlineIcon className="icon" />
                    </a>
                    <a href="tel:+250780520520" className="icon-link">
                        <LocalPhoneIcon className="icon" />
                    </a>
                    <a href="url_to_location_website" className="icon-link">
                        <LocationOnIcon className="icon" />
                    </a>
                </div>
            </header>
        </>
    );
}

export default List;
