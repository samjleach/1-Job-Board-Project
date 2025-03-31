import React from "react";
import NavigationButton from "../components/navButton";

function About() {
  return (
    <div>
      <h1>This is the about page!</h1>
      <NavigationButton
        to="/"
        btnMessage="Back to home"
      />
    </div>
  );
}

export default About;
