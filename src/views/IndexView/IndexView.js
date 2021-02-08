import React from 'react';
import { makeStyles, Divider, colors, Box, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';

import {
  GetStarted,
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
    paddingBottom: 0,
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
      <Section>
        <ModifyHouse />
      </Section>
      <Section>
        <ModifyInterior />
      </Section>
      <Section>
        <Features data={features} />
      </Section>
      <SellProperty />
      <SectionAlternate id="house">
        <Services />
      </SectionAlternate>
      <AboutMiddle />
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      {/*  <Section narrow>
        <GetStarted />
      </Section> */}
    </div>
  );
};

export default IndexView;
