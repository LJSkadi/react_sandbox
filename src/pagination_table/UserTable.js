import React from 'react';
import Results from './Results';

const UserTable = ({results, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <Results results = {results}/>
    </table>
  );
};

export default UserTable;
