/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import WebBasic from 'views/WebBasic';
import Main from 'layouts/Main';

const WebBasicPage = () => {
  return (
    <div className="container">
      <Main>
        <WebBasic />
      </Main>
    </div>
  )
};

export default WebBasicPage;
