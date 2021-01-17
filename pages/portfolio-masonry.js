/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PortfolioMasonry from 'views/PortfolioMasonry';
import Main from 'layouts/Main';

const PortfolioMasonryPage = () => {
  return (
    <div className="container">
      <Main>
        <PortfolioMasonry />
      </Main>
    </div>
  )
};

export default PortfolioMasonryPage;
