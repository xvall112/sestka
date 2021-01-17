/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Ecommerce from 'views/Ecommerce';
import Main from 'layouts/Main';

const EcommercePage = () => {
  return (
    <div className="container">
      <Main>
        <Ecommerce />
      </Main>
    </div>
  )
};

export default EcommercePage;
