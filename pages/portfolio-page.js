/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PortfolioPage from 'views/PortfolioPage';
import Main from 'layouts/Main';

const PortfolioViewPage = () => {
  return (
    <div className="container">
      <Main>
        <PortfolioPage />
      </Main>
    </div>
  )
};

export default PortfolioViewPage;
