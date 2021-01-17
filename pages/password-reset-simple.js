/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PasswordResetSimple from 'views/PasswordResetSimple';
import Minimal from 'layouts/Minimal';

const PasswordResetSimplePage = () => {
  return (
    <div className="container">
      <Minimal>
        <PasswordResetSimple />
      </Minimal>
    </div>
  )
};

export default PasswordResetSimplePage;
