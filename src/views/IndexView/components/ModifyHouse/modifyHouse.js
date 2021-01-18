import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { SectionHeader, OverlapedImages } from 'components/molecules';

const query = graphql`
  query {
    image: file(relativePath: { eq: "interier.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ModifyHouse = props => {
  const data = useStaticQuery(query);
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container direction={isMd ? 'row' : 'column-reverse'} spacing={4}>
        <Grid item xs={12} md={6}>
          <SectionHeader
            label="EXTERIÉR"
            title={
              <span>
                <Typography
                  color="secondary"
                  variant="inherit"
                  component="span"
                >
                  Flexible office space{' '}
                </Typography>
                means growing your team is easy.
              </span>
            }
            subtitle="Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor."
            align="left"
            fadeUp
            disableGutter
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
        >
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="obrazek"
            style={{ height: '100%', width: '100%' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

ModifyHouse.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ModifyHouse;
