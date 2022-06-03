import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink,Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {


    return (  


<nav class="navbar navbar-expand-lg bg-dark p-3 rounded-bottom  ">
  <div class="container-lg">
    <Link class="navbar-brand  link-light text-uppercase " to="/">Muhammad Qasim</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse flex-grow-0  " id="navbarSupportedContent">
      <ul class="navbar-nav  mx-auto text-uppercase " >
        <li class="nav-item ">
            <NavLink id="1" className="nav-link  text-white m-2" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item  ">
          <NavLink id="2" className="nav-link  text-white m-2"   to="/about">About Us</NavLink>
        </li>
        <li class="nav-item ">
          <NavLink id="3" className="nav-link  text-white m-2"  to="/services">Services</NavLink>
        </li>
        <li  id="4"class="nav-item ">
          <NavLink className="nav-link  text-white m-2" to="/projects">Portfolios</NavLink>
        </li>
        <li id="5" class="nav-item ">
          <NavLink className="nav-link  text-white m-2"  to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

)}
 
export default Navbar;