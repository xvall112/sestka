import React from 'react';

import { graphql } from 'gatsby';
import { Section } from 'components/organisms';
import { Info, Hero } from './components';
import Layout from '../../layouts/Main';
import Gallery from './components/gallery/gallery';
import Pricings from './components/Pricings/Pricings';
import Pozemek from './components/pozemek/pozemek';

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
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      plochaParcely
      plochaZahrady
      plyn
      pozemek {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      rokVystavby
      sklep
      slug
      stav {
        stav
      }
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
          <Pozemek data={props} />
        </Section>
        <Section>
          <Info data={props} />
        </Section>
        <Section>
          <Gallery data={props} />
        </Section>
        <Section>
          <Pricings data={props} />
        </Section>
      </Layout>
    </div>
  );
};

export default House;
