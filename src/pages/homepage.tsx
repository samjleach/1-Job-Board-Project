import React from "react";
import "../styles/homepage.css";
import { jobs } from "../data/job-data";
import { Link } from "react-router-dom";
import InfoBox from "../components/homepageInfoBoxes";
import usePagination from "../hooks/usePagination";

function Homepage() {
  const paginator = usePagination(jobs);
  const jobListings = paginator.pageItems;

  return (
    <div className="home">
      {jobListings.map((job) => {
        return (
          <div
            className="jobCard"
            key={job.id}
          >
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
      <div className="pages">
        <button
          className="button"
          onClick={paginator.decrementPage}
        >
          Previous page
        </button>
        <p>{paginator.currentPage}</p>
        <button
          className="button"
          onClick={paginator.incrementPage}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default Homepage;
