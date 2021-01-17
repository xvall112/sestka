/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Enterprise from 'views/Enterprise';
import Main from 'layouts/Main';

const EnterprisePage = () => {
  return (
    <div className="container">
      <Main>
        <Enterprise />
      </Main>
    </div>
  )
};

export default EnterprisePage;
