/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import DesktopApp from 'views/DesktopApp';
import Main from 'layouts/Main';

const DesktopAppPage = () => {
  return (
    <div className="container">
      <Main>
        <DesktopApp />
      </Main>
    </div>
  )
};

export default DesktopAppPage;
