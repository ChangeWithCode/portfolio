import { NavLink,Link} from 'react-router-dom';
const Footer = () => {
    return ( <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 footer_text">&copy; 2022 Company, Inc</p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <Link class="navbar-brand link-dark text-uppercase logo_main " to="/">Muhammad Qasim</Link>
      </a>
    </footer>
  </div>
   );
}
 
export default Footer;