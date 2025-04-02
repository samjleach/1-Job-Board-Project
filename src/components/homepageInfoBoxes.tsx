import React from "react";
import "../styles/styles.css";
import { InfoBoxProps } from "../types/types";

function InfoBox({ company, location, empType }: InfoBoxProps) {
  return (
    <div className="infoArea">
      <div className="infoBox">
        <h4 className="title">Company</h4>
        <h4>{company}</h4>
      </div>
      <div className="infoBox">
        <h4 className="title">Location</h4>
        <h4>{location}</h4>
      </div>
      <div className="infoBox">
        <h4 className="title">Hours</h4>
        <h4>{empType}</h4>
      </div>
    </div>
  );
}

export default InfoBox;
