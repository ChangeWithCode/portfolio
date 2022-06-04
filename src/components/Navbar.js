import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink,Link} from 'react-router-dom';
import ReactSwitch from "react-switch";


const Navbar = ({theme,toggleTheme}) => {

  
    return (  

      <nav class="navbar rounded-bottom navbar-expand-lg navbar-dark">
          <div class="container">
          <Link class="navbar-brand link-dark text-uppercase logo_main " to="/">Muhammad Qasim</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header01" aria-controls="header01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="header01">
            <ul class="navbar-nav mx-auto text-uppercase ">
              <li class="nav-item ">
                <NavLink id="1" className="nav-link  m-2" aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item  ">
                <NavLink id="2" className="nav-link m-2" to="/about">About Us</NavLink>
              </li>
              <li class="nav-item ">
                <NavLink id="3" className="nav-link   m-2" to="/services">Services</NavLink>
              </li>
              <li id="4" class="nav-item ">
                <NavLink className="nav-link m-2" to="/projects">Portfolios</NavLink>
              </li>
              <li id="5" class="nav-item ">
                <NavLink className="nav-link m-2" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <div className="switch">
          <label> {theme === "light" ? "" : ""}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
            </div>
          </div>
        </nav>
       
)}
 
export default Navbar;