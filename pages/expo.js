/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Expo from 'views/Expo';
import Main from 'layouts/Main';

const ExpoPage = () => {
  return (
    <div className="container">
      <Main>
        <Expo />
      </Main>
    </div>
  )
};

export default ExpoPage;
