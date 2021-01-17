/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PortfolioGrid from 'views/PortfolioGrid';
import Main from 'layouts/Main';

const PortfolioGridPage = () => {
  return (
    <div className="container">
      <Main>
        <PortfolioGrid />
      </Main>
    </div>
  )
};

export default PortfolioGridPage;
