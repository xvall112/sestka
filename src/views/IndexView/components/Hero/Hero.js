import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Button, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { SwiperImage } from '../../components';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  swiper: { height: '100%', [theme.breakpoints.up('lg')]: { height: '90vh' } },
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
  },
}));
const query = graphql`
  {
    contentfulLandingPageImage {
      images {
        fluid(maxHeight: 700) {
          src
        }
      }
    }
  }
`;
const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = useStaticQuery(query);
  console.log(data);
  return (
    <div className={classes.swiper} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title={
              <span>
                Coworking made{' '}
                <Typography component="span" variant="inherit" color="primary">
                  easy
                </Typography>
              </span>
            }
            subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Book
              </Button>,
              <Button
                variant="outlined"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Browse
              </Button>,
            ]}
            align="left"
            titleVariant="h3"
          />
        }
        rightSide={
          <SwiperImage
            navigationButtonStyle={classes.swiperNavButton}
            items={data.contentfulLandingPageImage.images}
          />
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
