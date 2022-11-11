import "./header.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Header(){
    return(
        <div className="header">
            <Router>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/"></Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    )
}
export default Header;