/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactPageSidebarMap from 'views/ContactPageSidebarMap';
import Main from 'layouts/Main';

const ContactWithSidebarMapPage = () => {
  return (
    <div className="container">
      <Main>
        <ContactPageSidebarMap />
      </Main>
    </div>
  )
};

export default ContactWithSidebarMapPage;
