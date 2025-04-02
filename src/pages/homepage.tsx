import React from "react";
import "../styles/homepage.css";
import { jobs } from "../data/job-data";
import { Link } from "react-router-dom";
import InfoBox from "../components/homepageInfoBoxes";

function Homepage() {
  return (
    <div className="home">
      {jobs.map((job) => {
        return (
          <div className="jobCard">
            <h3>{job.title}</h3>
            <InfoBox
              company={job.company}
              location={job.location}
              empType={job.type}
            />
            <p>{job.description}</p>
            <Link to={`/job-details/${job.id}`}>Show more</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
