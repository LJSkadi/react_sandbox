import React from 'react';

// A -> contacts
// B -> phones phoneNumbers
// P _> partial phoneNumber
const ContactDialer = ({A, B, P}) => {
  let results = [];

  for (let i = 0; i < B.length; i++) {
    if (B[i].includes(P)) {
      results.push(A[i]);
    }
  }

  results = results.length == 0 ? ['NO CONTACT'] : results.sort();

  return (
    <div>
      {results[0]}
    </div>
  );
};

export default ContactDialer;
