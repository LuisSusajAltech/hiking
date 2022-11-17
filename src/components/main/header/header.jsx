import "./header.css"
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
  import images from "../../../assets/images/images"
function Header(){
    return(
        <div className="header">
            <img src={images.logo}></img>
            <Router>
                <div className="nav">
                    <ul className="nav-cont">
                        <li className="nav-cont-child">
                            <Link to="/" className="nav-cont-child-link">Home</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/products" className="nav-cont-child-link">Products</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/hotels" className="nav-cont-child-link">Hotels</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/places" className="nav-cont-child-link">Places</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/aboutus" className="nav-cont-child-link">About Us</Link>
                        </li>
                        <li className="nav-cont-child">
                            <Link to="/contact" className="nav-cont-child-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    )
}
export default Header;