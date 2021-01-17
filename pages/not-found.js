/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NotFound from 'views/NotFound';
import Minimal from 'layouts/Minimal';

const NotFoundPage = () => {
  return (
    <div className="container">
      <Minimal>
        <NotFound />
      </Minimal>
    </div>
  )
};

export default NotFoundPage;
