/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Rental from 'views/Rental';
import Main from 'layouts/Main';

const RentalPage = () => {
  return (
    <div className="container">
      <Main>
        <Rental />
      </Main>
    </div>
  )
};

export default RentalPage;
