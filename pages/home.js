/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Home from 'views/Home';
import Main from 'layouts/Main';

const HomePage = () => {
  return (
    <div className="container">
      <Main>
        <Home />
      </Main>
    </div>
  )
};

export default HomePage;
