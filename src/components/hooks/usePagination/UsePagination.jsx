import { useState } from "react";

const UsePagination = ({ totalItem, itemPerPage }) => {
  // console.log(totalItem, itemPerPage)
  const totalPage = Math.ceil(totalItem / itemPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleGoToPage = (page) => {
    if (page > 0 && page <= totalPage) {
      setCurrentPage(page);
    }
  };
  const handleGetPageNumber = () => {
    return Array.from({ length: totalPage }, (_, index) => index + 1);
  };

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handleGoToPage,
    handleGetPageNumber,
    totalPage,
  };
};

export default UsePagination;
