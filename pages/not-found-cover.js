/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NotFoundCover from 'views/NotFoundCover';
import Minimal from 'layouts/Minimal';

const NotFoundCoverPage = () => {
  return (
    <div className="container">
      <Minimal>
        <NotFoundCover />
      </Minimal>
    </div>
  )
};

export default NotFoundCoverPage;