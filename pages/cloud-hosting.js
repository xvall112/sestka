/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CloudHosting from 'views/CloudHosting';
import Main from 'layouts/Main';

const CloudHostingPage = () => {
  return (
    <div className="container">
      <Main>
        <CloudHosting />
      </Main>
    </div>
  )
};

export default CloudHostingPage;
