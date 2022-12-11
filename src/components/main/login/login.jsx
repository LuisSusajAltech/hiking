import "./login.css"
import {Link} from "react-router-dom";
function Login(){
    return(
        <div className="login maxWidth">
            <h5 className="login-title">Login</h5>
            <form className="login-form">
                <label for="email">Email</label>
                <input type="email" className="email"></input>
                <label for="pass">Password</label>
                <input type="password" className="pass"></input>
                <button type="submit">Login</button>
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    )
}
export default Login;