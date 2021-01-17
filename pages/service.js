/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Service from 'views/Service';
import Main from 'layouts/Main';

const ServicePage = () => {
  return (
    <div className="container">
      <Main>
        <Service />
      </Main>
    </div>
  )
};

export default ServicePage;
