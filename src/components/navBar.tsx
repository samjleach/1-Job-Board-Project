import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import useSearch from "../hooks/useSearch";

function Navbar() {
  const { searchInput, handleChange, matches } = useSearch();
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
      <div className="navbar-center">
        <input
          placeholder="Search here"
          className="searchBar"
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
        <p>{searchInput}</p>
        {matches.map((j) => {
          return <p>{j.title}</p>;
        })}
      </div>
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
