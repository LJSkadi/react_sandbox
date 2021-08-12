import React from 'react';

const Results = ({results}) => {
  return <tbody>
    { results.map((result, i) => (
      <tr key={i}>
        <td>{result.id}</td>
        <td>{result.name}</td>
        <td>{result.username}</td>
      </tr>
    ))}
  </tbody>;
};

export default Results;
