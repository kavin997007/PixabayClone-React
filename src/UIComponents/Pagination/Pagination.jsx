import React from 'react';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPage,
  setCurrentPage,
}) => {

  function handleNext() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={handlePrev}
      >
        Prev
      </button>

      <span>
        {currentPage} / {totalPage}
      </span>

      <button
        disabled={currentPage === totalPage}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;  