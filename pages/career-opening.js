/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerOpening from 'views/CareerOpening';
import Main from 'layouts/Main';

const CareerOpeningPage = () => {
  return (
    <div className="container">
      <Main>
        <CareerOpening />
      </Main>
    </div>
  )
};

export default CareerOpeningPage;
