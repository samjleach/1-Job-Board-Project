import React from "react";
import JobRequirements from "./jobRequirements";
import { SingleJobListingProp } from "../types/types";

function JobListing({ job }: SingleJobListingProp) {
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
