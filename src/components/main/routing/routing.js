import {
    //BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    //Link
  } from "react-router-dom";
import Home from "../home/home";
import Products from "../products/products";
import Locations from "../locations/locations";
import About from "../aboutus/aboutus";
import Contact from "../contact/contact";
import Error from "../error/error";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/locations" element={<Locations/>}></Route>
            <Route path="/aboutus" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    )
}
export default Routing;