/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import IndexView from '../views/IndexView';
import Main from '../layouts/Main';
import SEO from '../views/IndexView/components/seo';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "ACCamera_4.jpg" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <div className="container">
      <Main>
        <SEO title="Šestka" images={data.contentfulAsset.fluid} />
        <IndexView />
      </Main>
    </div>
  );
};

export default IndexPage;
