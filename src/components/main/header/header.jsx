import React from "react";
import {Link} from "react-router-dom";
import images from "../../../assets/images/images"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import {faPhone} from '@fortawesome/pro-light-svg-icons'
function Header(){
    return(
    <div className="header">
        <div className="header-top">
            <div className="header-top-left">
            <div className="header-top-left-phone">
                <i class="fal fa-phone"></i>  
                <span>+355 67 77 77 777</span>
            </div>
            <div className="header-top-left-email">
                <i class="fal fa-envelope"></i>
                <span>info@hiking.al</span>
            </div>
            </div>
            <div className="header-top-right">
                <Link to="/login" className="header-top-right-submit">Login</Link>
            </div>
        </div>
        <div className="header-btm">
            <div className="header-btm-logo">
                <img src={images.logo} alt="logo"></img>
            </div>
                <div className="nav">
                    <ul className="nav-cont">
                        <li className="nav-cont-child">
                            <Link to="/" className="nav-cont-child-link">Home</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/products" className="nav-cont-child-link">Products</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/locations" className="nav-cont-child-link">Locations</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/aboutus" className="nav-cont-child-link">About Us</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/contact" className="nav-cont-child-link">Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
    )
}
export default Header;