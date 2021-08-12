import React, {Component} from 'react';
import UserTable from '../UserTable';
import Pagination from '../Pagination';
import axios from 'axios';

class AltUser extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      currentPage: 1,
      resultsPerPage: 10,
      loading: true,
      totalResults: 0,
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    const fetchResults = async () => {
      const url = `https://example.com/api/user?${this.state.currentPage - 1}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: 'GET',
        credentials: 'same-origin',
      }).then( async (response)=>{
        if (!response.ok) {
          const data=await response.json();
          response.data = data;
        }
        return response;
      }).then((response)=>{
        return response.json();
      }).then((jsonResponse) => {
        return {data: jsonResponse};
      });
      const results = await response.data;
      this.setState({
        results: results,
        currentPage: this.state.currentPage,
        resultsPerPage: this.state.resultsPerPage,
        loading: false,
        totalResults: results.length,
      });
      results;
    };
    fetchResults();
  }

  paginate(pageNumber) {
    const prevProps = this.state.currentPage;
    this.setState({
      currentPage: pageNumber,
    });
    if (prevProps !== pageNumber) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div>
        <UserTable
          results = {this.state.results}
          loading = {this.state.loading}/>
        <Pagination
          resultsPerPage = {this.state.resultsPerPage}
          totalResults = {this.state.totalResults}
          paginate = {this.paginate}
          loading = {this.state.loading}/>
      </div>
    );
  }
};

export default AltUser;
