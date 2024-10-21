import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { getPage } from "../redux/action/moviesAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  useEffect(() => {
    setPageCount(pages);
  }, []);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      // styling with bootstrap
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-itemk"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default PaginationComponent;
