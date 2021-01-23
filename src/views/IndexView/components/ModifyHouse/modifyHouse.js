import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { SectionHeader, OverlapedImages } from 'components/molecules';
import Gif from 'assets/gi/animateColor.gif';
import HouseImg from 'assets/gi/houseColor10Replay.png';
var GifPlayer = require('react-gif-player');

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "justHouse.png" } }) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid
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
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
        >
          <GifPlayer
            autoplay={true}
            gif={Gif}
            still={HouseImg}
            style={{ height: '100%', width: '100%' }}
          />
          ,
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionHeader
            label="EXTERIÉR"
            title={
              <span>
                Vizuální podobu domu si můžete upravit{' '}
                <Typography color="primary" variant="inherit" component="span">
                  podle sebe!
                </Typography>
              </span>
            }
            subtitle="Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor."
            align="left"
            fadeUp
            disableGutter
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
