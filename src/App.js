import Header from "./components/main/header/header";
import Routing from "./components/main/routing/routing";
import "./assets/styling/root.css"
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
       <Header/>
       <Routing/>
    </Router>
  );
}

export default App;
