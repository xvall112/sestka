import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Section, SectionAlternate } from 'components/organisms';
import { Info, Hero } from './components';
import Layout from '../../layouts/Main';

export const query = graphql`
  query($slug: String!) {
    contentfulRdHouse(slug: { eq: $slug }) {
      balkon
      celkemPater
      cena
      childContentfulRdHouseStrucnyPopisTextNode {
        strucnyPopis
      }
      dispozice
      elektrina
      energetickaTrida
      garaz
      introImages {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      konstrukce
      lodzie
      lokalita
      nabidka
      name
      objekt
      obrazky {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      plochaParcely
      plochaZahrady
      plyn
      rokVystavby
      sklep
      slug
      stavNemovitosti
      strucnyPopis {
        strucnyPopis
      }
      telefoniPripojka
      terasa
      typVlastnictvi
      uzitaPlocha
      uzitaPlochaGaraz
      voda
      vytah
      vytapeni
      zahrada
      zarizeno
      zastavenaPlocha
      zastavenaPlochaGaraz
    }
  }
`;

const House = props => {
  return (
    <div>
      <Layout>
        <Hero data={props} />
        <Section>
          <Info data={props} />
        </Section>
      </Layout>
    </div>
  );
};

export default House;
