/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import JobListing from 'views/JobListing';
import Main from 'layouts/Main';

const JobListingPage = () => {
  return (
    <div className="container">
      <Main>
        <JobListing />
      </Main>
    </div>
  )
};

export default JobListingPage;
