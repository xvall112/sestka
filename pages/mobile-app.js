/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import MobileApp from 'views/MobileApp';
import Main from 'layouts/Main';

const MobileAppPage = () => {
  return (
    <div className="container">
      <Main>
        <MobileApp />
      </Main>
    </div>
  )
};

export default MobileAppPage;
