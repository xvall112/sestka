/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignupSimple from 'views/SignupSimple';
import Minimal from 'layouts/Minimal';

const SignupSimplePage = () => {
  return (
    <div className="container">
      <Minimal>
        <SignupSimple />
      </Minimal>
    </div>
  )
};

export default SignupSimplePage;
