/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import About from 'views/About';
import Main from 'layouts/Main';

const AboutPage = () => {
  return (
    <div className="container">
      <Main>
        <About />
      </Main>
    </div>
  )
};

export default AboutPage;
