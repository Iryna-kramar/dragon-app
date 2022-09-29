import React from "react";
import "./Navbar.css";

import Logo from "../../assets/SpaceX-White-Logo.svg"

const Navbar = () => {

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="app logo" />
      </div>
      <div className="app__navbar-login">
        <a href="#login" className="app__text">
          Log in / Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
