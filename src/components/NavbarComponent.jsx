import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavbarStyle.css'

function NavbarComponent() {
  return (

    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/designs">Designs</Link>
              </li>
              <li>
                <Link className="nav-link" to="/designers">Designers</Link>

              </li>
              <li>
                <Link className="nav-link" to="/products">Products</Link>

              </li>
              <li>
                <Link className="nav-link" to="/feedback">Feedback</Link>

              </li>
              {/* <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" href="#">Action</Link></li>
                  <li><Link class="dropdown-item" href="#">Another action</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li> */}
              <li>
                <Link className="nav-link" to="/about">About</Link>

              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   
    </>

  );
}

export default NavbarComponent;