import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/SpaceX-White-Logo.svg";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={Logo} alt="app logo" />
        </Link>
      </div>
      <Link className="app__navbar-login app__text" to="/login">
        Log in / Register
      </Link>
    </nav>
  );
};

export default Navbar;
