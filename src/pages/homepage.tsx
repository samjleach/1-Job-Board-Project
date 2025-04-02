import React from "react";
import NavigationButton from "../components/navButton";
import "../styles/homepage.css";
import { jobs } from "../data/job-data";
import JobListing from "../components/jobListing";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <>
            <JobListing
              key={job.id}
              job={job}
            />
            <Link to={"about"}>Show more</Link>
          </>
        );
      })}
    </div>
  );
}

export default Homepage;
