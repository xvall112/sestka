/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactPageCover from 'views/ContactPageCover';
import Main from 'layouts/Main';

const ContactCoverPage = () => {
  return (
    <div className="container">
      <Main>
        <ContactPageCover />
      </Main>
    </div>
  )
};

export default ContactCoverPage;
