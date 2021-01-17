/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SigninSimple from 'views/SigninSimple';
import Minimal from 'layouts/Minimal';

const SigninSimplePage = () => {
  return (
    <div className="container">
      <Minimal>
        <SigninSimple />
      </Minimal>
    </div>
  )
};

export default SigninSimplePage;
