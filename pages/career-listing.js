/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerListing from 'views/CareerListing';
import Main from 'layouts/Main';

const CareerListingPage = () => {
  return (
    <div className="container">
      <Main>
        <CareerListing />
      </Main>
    </div>
  )
};

export default CareerListingPage;
