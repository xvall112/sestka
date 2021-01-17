/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import HelpCenter from 'views/HelpCenter';
import Main from 'layouts/Main';

const HelpCenterPage = () => {
  return (
    <div className="container">
      <Main>
        <HelpCenter />
      </Main>
    </div>
  )
};

export default HelpCenterPage;
