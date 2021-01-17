/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Coworking from 'views/Coworking';
import Main from 'layouts/Main';

const CoworkingPage = () => {
  return (
    <div className="container">
      <Main>
        <Coworking />
      </Main>
    </div>
  )
};

export default CoworkingPage;