/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SigninCover from 'views/SigninCover';
import Minimal from 'layouts/Minimal';

const SigninCoverPage = () => {
  return (
    <div className="container">
      <Minimal>
        <SigninCover />
      </Minimal>
    </div>
  )
};

export default SigninCoverPage;
