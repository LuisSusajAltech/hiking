import {
    //BrowserRouter as Router,
    // Switch,
    // Route,
    // Routes,
    Link
  } from "react-router-dom";
import images from "../../../assets/images/images"
import React from "react";
function Header(){
    return(
    <div className="header">
        <div className="header-top">

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