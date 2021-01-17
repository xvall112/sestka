/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignupCover from 'views/SignupCover';
import Minimal from 'layouts/Minimal';

const SignupCoverPage = () => {
  return (
    <div className="container">
      <Minimal>
        <SignupCover />
      </Minimal>
    </div>
  )
};

export default SignupCoverPage;
