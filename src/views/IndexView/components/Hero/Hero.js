import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Button, Typography, Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SwiperImageAutoplay from '../Swiper/SwiperImageAutoplay';
import { HeroShaped } from 'components/organisms';

import scrollTo from 'gatsby-plugin-smoothscroll';

const useStyles = makeStyles(theme => ({
  buttons: {
    width: '40vw',
    [theme.breakpoints.up('md')]: { width: '10vw' },
  },
  swiper: {
    height: '100%',
    /* [theme.breakpoints.up('lg')]: { minHeight: '70vh' }, */
  },
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
        fluid(maxWidth: 700) {
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

  return (
    <div className={classes.swiper} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title={
              <Box
                fontWeight="fontWeightBold"
                textAlign={isMd ? 'left' : 'center'}
              >
                <Typography component="h2" variant="inherit" color="primary">
                  "ŠESTKA"
                </Typography>
                Rodinné domy na prodej <br></br>
              </Box>
            }
            subtitle={
              <span>
                {' '}
                Bydlení v přírodě s docházkovou vzdáleností do centra Příbrami.
                Minimalistické, moderní, pohodlné a hlavně s naprostým
                soukromím! <br></br> To jsou domy Šestka!{' '}
              </span>
            }
            ctaGroup={[
              <Button
                className={classes.buttons}
                type="button"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={() => scrollTo('#info')}
              >
                více
              </Button>,
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.buttons}
                onClick={() => scrollTo('#house')}
                type="button"
              >
                domy
              </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            titleVariant="h3"
          />
        }
        rightSide={
          <SwiperImageAutoplay
            navigation
            autoplay
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
