/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import AboutSideCover from 'views/AboutSideCover';
import Main from 'layouts/Main';

const AboutSideCoverPage = () => {
  return (
    <div className="container">
      <Main>
        <AboutSideCover />
      </Main>
    </div>
  )
};

export default AboutSideCoverPage;
