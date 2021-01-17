/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import { NoSsr } from '@material-ui/core';
import Documentation from 'views/Documentation';
import DocsLayout from 'layouts/DocsLayout';

const DocumentationPage = () => {
  return (
    <div className="container">
      <DocsLayout>
        <NoSsr>
          <Documentation />
        </NoSsr>
      </DocsLayout>
    </div>
  )
};

export default DocumentationPage;