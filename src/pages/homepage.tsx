import React from "react";
import NavigationButton from "../components/navButton";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div>
      <h1 className="title">Hello!</h1>
      <NavigationButton
        to="/about"
        btnMessage="About"
      />
    </div>
  );
}

export default Homepage;
