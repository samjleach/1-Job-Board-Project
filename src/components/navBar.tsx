import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink
          to="/"
          className={"logo"}
        >
          Job Seeker
        </NavLink>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-right">
        <ul>
          <li>
            <NavLink
              className="nav-link"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
