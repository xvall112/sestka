/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerListingMinimal from 'views/CareerListingMinimal';
import Main from 'layouts/Main';

const CareerListingMinimalPage = () => {
  return (
    <div className="container">
      <Main>
        <CareerListingMinimal />
      </Main>
    </div>
  )
};

export default CareerListingMinimalPage;
