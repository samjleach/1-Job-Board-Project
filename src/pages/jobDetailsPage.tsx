import React from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../data/job-data";
import JobListing from "../components/jobListing";
import NavigationButton from "../components/navButton";

function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p>No job found. Please try again</p>;

  return (
    <div>
      <JobListing
        key={job.id}
        job={job}
      />
      <NavigationButton
        to="/"
        btnMessage="Back to home"
      />
    </div>
  );
}

export default JobDetailsPage;
