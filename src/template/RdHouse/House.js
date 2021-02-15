import React from 'react';

import { graphql } from 'gatsby';
import { Section } from 'components/organisms';
import { Info, Hero } from './components';
import SEO from '../../views/IndexView/components/seo';
import Layout from '../../layouts/Main';
import Gallery from './components/gallery/gallery';
import Pricings from './components/Pricings/Pricings';
import Pozemek from './components/pozemek/pozemek';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

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
      seoImage {
        file {
          url
        }
      }
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
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <SEO
          title={props.data.contentfulRdHouse.name}
          url={props.data.contentfulRdHouse.slug}
          image={props.data.contentfulRdHouse.seoImage.file.url}
        />
        <Hero data={props} />
        <Section>
          <Pozemek data={props} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Info data={props} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Gallery data={props} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Pricings data={props} />
        </Section>
      </Layout>
    </div>
  );
};

export default House;
