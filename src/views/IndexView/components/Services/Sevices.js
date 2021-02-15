import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import CardHouse from './Card';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  root: {},
}));

const query = graphql`
  query {
    house: allContentfulRdHouse(sort: { fields: name }) {
      edges {
        node {
          slug
          name
          plochaParcely
          introImages {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
          stav {
            stav
          }
        }
      }
    }
  }
`;

const Services = ({ className, ...rest }) => {
  const data = useStaticQuery(query);
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Na výběr máte z šesti domů{' '}
      <Typography component="span" variant="inherit" color="primary">
        "ŠESTKA"
      </Typography>
    </Typography>
  );

  const subtitle = '';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={2}>
          {data.house.edges.map((item, index) => (
            <CardHouse item={item} key={index} />
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default Services;
