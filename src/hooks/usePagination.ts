import { useState } from "react";
import { JobListingAttributes } from "../types/types";

function usePagination(items: JobListingAttributes[], itemsPerPage = 5) {
  const [currentPage, setPage] = useState(1);
  let numberOfItems = items.length;
  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

  let firstItemCurrentPage = currentPage * itemsPerPage - itemsPerPage;
  let lastItemCurrentPage = currentPage * itemsPerPage;

  const pageItems = items.slice(firstItemCurrentPage, lastItemCurrentPage);

  const incrementPage = () => {
    if (currentPage !== numberOfPages) {
      setPage(currentPage + 1);
    }
  };
  const decrementPage = () => {
    if (currentPage !== 1) {
      setPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    numberOfPages,
    pageItems,
    incrementPage,
    decrementPage,
  };
}

export default usePagination;
