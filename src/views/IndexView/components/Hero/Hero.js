import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Button, Typography, Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SwiperImageAutoplay from '../../components/SwiperImage/SwiperImageAutoplay';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
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

  return (
    <div className={classes.swiper} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title={
              <Box fontWeight="fontWeightBold">
                Rodinné domy na prodej <br></br>
                <Box pt={2}>
                  <Typography
                    component="span"
                    variant="inherit"
                    color="primary"
                  >
                    "ŠESTKA"
                  </Typography>
                </Box>
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
              <Link to="#info">
                <Button
                  variant="contained"
                  color="primary"
                  size={isMd ? 'large' : 'medium'}
                >
                  více
                </Button>
              </Link>,
              <Link to="#house">
                <Button
                  variant="outlined"
                  color="primary"
                  size={isMd ? 'large' : 'medium'}
                >
                  domy
                </Button>
              </Link>,
            ]}
            align="left"
            titleVariant="h3"
          />
        }
        rightSide={
          <SwiperImageAutoplay
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
