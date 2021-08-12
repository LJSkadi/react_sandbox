import React from 'react';

const Pagination = ({resultsPerPage, totalResults, currentPage, paginate, loading}) => {
  const lastPage = Math.ceil(totalResults / resultsPerPage);
  const nextPage = (pageNumber) => currentPage + 1 < lastPage ? currentPage + 1 : lastPage;
  const previousPage = (pageNumber) => currentPage - 1 > 1 ? currentPage - 1 : 1;
  const disable = (page) => currentPage == page || loading == true ? true : false;

  return (
    <nav>
      <ul className='pagination'>
        <button className='first-page-btn' disabled={disable(1)} onClick={()=> paginate(1)}>First</button>
        <button className='previous-page-btn' disabled={disable(1)} onClick={()=> paginate(previousPage)}>Previous</button>
        <button className='next-page-btn' disabled={disable(lastPage)} onClick={()=> paginate(nextPage)}>Next</button>
        <button className='last-page-btn' disabled={disable(lastPage)} onClick={()=> paginate(lastPage)}>Last</button>
      </ul>
    </nav>
  );
};

export default Pagination;
