import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Home
              <script async src="https://www.googletagmanager.com/gtag/js?
              id=GA_MEASUREMENT_ID"></script>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/MessageBoard">
              MessageBoard
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/Web"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Web
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/Web/miaoWeb">
                B0829031
              </Link>
              <Link className="dropdown-item" to="/Web/chenWeb">
                B0829042
              </Link>
              
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };