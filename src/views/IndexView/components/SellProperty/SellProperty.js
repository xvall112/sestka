import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Img from 'gatsby-image';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: '100%',
    background: theme.palette.primary.dark,
  },
  textWhite: {
    color: 'white',
  },
}));

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "ACCamera_2.jpg" } }) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const SellProperty = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Img fluid={data.contentfulAsset.fluid} alt="house" />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <SectionHeader
              title={
                <span className={classes.textWhite}>
                  Want to Sell Property?
                </span>
              }
              titleVariant="h3"
              subtitle={
                <span className={classes.textWhite}>
                  Let us create a tailored strategic marketing plan and keep
                  track of the selling process.
                </span>
              }
              ctaGroup={[
                <Button variant="contained" size="large">
                  Get started
                </Button>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
            />
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

SellProperty.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default SellProperty;
