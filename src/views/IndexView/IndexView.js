import React from 'react';
import { makeStyles, colors } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';

import {
  Features,
  Services,
  Hero,
  SellProperty,
  AboutMiddle,
  PromoNumbers,
  ModifyInterior,
  ModifyHouse,
  HouseAdvertising,
} from './components';

import { promoNumbers, features } from './data';

const useStyles = makeStyles(theme => ({
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },

  dividerSection: {
    paddingTop: 0,
  },
}));

const IndexView = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate className={classes.sectionNoPaddingTop} id="info">
        <PromoNumbers data={promoNumbers} />
      </SectionAlternate>
      <Section>
        <HouseAdvertising />
      </Section>
      <Section className={classes.dividerSection}>
        <ModifyHouse />
      </Section>
      <Section className={classes.dividerSection}>
        <ModifyInterior />
      </Section>
      <Section className={classes.dividerSection}>
        <Features data={features} />
      </Section>
      <SellProperty />
      <SectionAlternate id="house">
        <Services />
      </SectionAlternate>
      <AboutMiddle />

      {/*  <Section narrow>
        <GetStarted />
      </Section> */}
    </div>
  );
};

export default IndexView;
