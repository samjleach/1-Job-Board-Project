import React from "react";
import JobRequirements from "./jobRequirements";
import { JobListingAttributes } from "../data/job-data";

interface SingleJobListing {
  job: JobListingAttributes;
}

function JobListing({ job }: SingleJobListing) {
  return (
    <div>
      <h2>{job.title}</h2>
      <div>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p>{job.type}</p>
      </div>
      <p>{job.description}</p>
      <JobRequirements requirements={job.requirements} />
    </div>
  );
}

export default JobListing;
