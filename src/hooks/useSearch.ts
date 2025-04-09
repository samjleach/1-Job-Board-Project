import { useState } from "react";
import { jobs } from "../data/job-data";
import { JobListingAttributes } from "../types/types";

function useSearch() {
  const [searchInput, setSearchInput] = useState("");
  let matches: JobListingAttributes[] = [];

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    matches = jobs.filter((j) =>
      j.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  const resetSearchBar = () => {
    setSearchInput("");
  };

  return { searchInput, handleChange, matches, resetSearchBar };
}

export default useSearch;
