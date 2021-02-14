/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import IndexView from '../views/IndexView';
import Main from '../layouts/Main';
import SEO from '../views/IndexView/components/seo';

const IndexPage = () => {
  return (
    <div className="container">
      <Main>
        <SEO title="Šestka" />
        <IndexView />
      </Main>
    </div>
  );
};

export default IndexPage;
