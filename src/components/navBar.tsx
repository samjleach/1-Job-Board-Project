import React from "react";
import "../styles/navbar.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import useSearch from "../hooks/useSearch";

function Navbar() {
  const { searchInput, handleChange, matches, resetSearchBar } = useSearch();

  if (searchInput) {
    const searchResults = document.getElementById("searchResults");
    if (searchResults) {
      searchResults.style.visibility = "inherit";
    }
  } else {
    const searchResults = document.getElementById("searchResults");
    if (searchResults) {
      searchResults.style.visibility = "hidden";
    }
  }

  function onSearchOptionClick() {
    const searchbar = document.getElementById("search");
    if (searchbar) {
      resetSearchBar();
    }
  }

  const refresh = () => {
    // This is a really janky way of setting the pages back to the first
    // by clicking the "logo", I'm sure theres a better way - this works for now

    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink
          to={"/"}
          className={"logo"}
          onClick={refresh}
        >
          Job Seeker
        </NavLink>
      </div>
      <div className="navbar-center">
        <input
          id="search"
          placeholder="Search here"
          className="searchBar"
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
        <div id="searchResults">
          {matches.map((j) => {
            return (
              <>
                <Link
                  className="remove"
                  to={`/job-details/${j.id}`}
                  onClick={onSearchOptionClick}
                >
                  <div className="option searchLink">
                    <p>
                      {j.title} | {j.location} | {j.company}
                    </p>
                  </div>
                </Link>
                <hr />
              </>
            );
          })}
        </div>
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
