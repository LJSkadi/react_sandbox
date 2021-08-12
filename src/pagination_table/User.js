import React, {useState, useEffect} from 'react';
import UserTable from './UserTable';
import Pagination from './Pagination';
import axios from 'axios';

const User = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(3);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/users`;
      const res = await axios.get(url);
      setResults(res.data);
      setLoading(false);
    };
    fetchResults();
  }, []);

  const indexLast = currentPage * resultsPerPage;
  const indexFirst = indexLast - resultsPerPage;
  const currentResults = results.slice(indexFirst, indexLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <UserTable results = {currentResults} loading = {loading}/>
      <Pagination
        resultsPerPage = {resultsPerPage}
        totalResults = {results.length}
        currentPage ={currentPage}
        paginate = {paginate}
        loading = {loading}/>
    </div>
  );
};

export default User;
