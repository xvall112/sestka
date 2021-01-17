/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import HelpCenterArticle from 'views/HelpCenterArticle';
import Main from 'layouts/Main';

const HelpCenterArticlePage = () => {
  return (
    <div className="container">
      <Main>
        <HelpCenterArticle />
      </Main>
    </div>
  )
};

export default HelpCenterArticlePage;
