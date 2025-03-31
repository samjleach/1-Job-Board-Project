import React from "react";
import NavigationButton from "../components/navButton";
import "../styles/homepage.css";
import { jobs } from "../data/job-data";
import JobListing from "../components/jobListing";

function Homepage() {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <JobListing
            key={job.id}
            job={job}
          />
        );
      })}
    </div>
  );
}

export default Homepage;
