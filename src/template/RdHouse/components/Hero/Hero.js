import React from 'react';

import Img from 'gatsby-image';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { CardJobMinimal } from 'components/organisms';
import CardJobMinimalPrice from '../CardJobMinimalPrice/CardJobMinimalPrice';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '350px',
    maxHeight: '90vh',
    position: 'relative',
    overflow: 'hidden',
  },

  padding: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  image: {
    minHeight: 400,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    zIndex: '1000',
  },
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "RD3.jpg" } }) {
      fluid(maxWidth: 1600) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const Hero = props => {
  const nevim = useStaticQuery(query);
  const {
    data: {
      data: { contentfulRdHouse },
    },
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Img
        fluid={nevim.contentfulAsset.fluid}
        style={{
          maxHeight: '70vh',
          width: 'auto',
          margin: '0px auto',
        }}
      />
      <Section className={classes.padding}>
        <SectionHeader
          title={contentfulRdHouse.name}
          /* subtitle="We are founded by a leading academic and researcher in the field of Industrial Systems Engineering." */
          align="left"
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h2',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3} data-aos="fade-up">
                <CardJobMinimal
                  title={<i className="fas fa-home" />}
                  subtitle={`${contentfulRdHouse.plochaParcely} ㎡`}
                />
              </Grid>
              <Grid item xs={6} md={3} data-aos="fade-up">
                <CardJobMinimal
                  title={<i className="fas fa-parking" />}
                  subtitle="2"
                />
              </Grid>
              <Grid item xs={6} md={3} data-aos="fade-up">
                <CardJobMinimal
                  title={<i className="fas fa-bath" />}
                  subtitle="1"
                />
              </Grid>
              <Grid item xs={6} md={3} data-aos="fade-up">
                <CardJobMinimal
                  title={<i className="fas fa-door-open" />}
                  subtitle="4+kk"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} data-aos="fade-up">
                {contentfulRdHouse.stav.stav !== 'volné' ? (
                  <CardJobMinimalPrice
                    title=""
                    subtitle={
                      contentfulRdHouse.stav.stav === 'prodáno'
                        ? 'PRODÁNO'
                        : 'REZERVOVÁNO'
                    }
                  />
                ) : (
                  <CardPricingStandard
                    variant="outlined"
                    title={`Aktuální cena za ${contentfulRdHouse.name} včetně  pozemku `}
                    subtitle={
                      contentfulRdHouse.stav.stav ===
                        ('volné' || 'rezervováno') &&
                      'se mění dle postupu prací, předpokládaná cena dokončeného domu 7 900 000 Kč - cena bude určena dle skutečně použitých materiálů a provedených prací.'
                    }
                    priceComponent={
                      <div>
                        <Typography component="span" variant="subtitle1">
                          Aktuální cena:
                        </Typography>
                        <br></br>
                        <Typography variant="h3" component="span">
                          {contentfulRdHouse.cena}
                        </Typography>
                        <Typography component="span" variant="subtitle1">
                          Kč s DPH
                        </Typography>
                      </div>
                    }
                    cta={
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={
                          contentfulRdHouse.stav.stav === 'prodáno'
                            ? true
                            : contentfulRdHouse.stav.stav === 'rezervováno'
                            ? true
                            : false
                        }
                        onClick={() => scrollTo('#contact')}
                      >
                        mám zájem
                      </Button>
                    }
                    disclaimer=""
                  />
                )}
              </Grid>
            </Grid>
          </Grid>

          {/*  <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} data-aos="fade-up">
                <CardJobMinimalPrice
                  title="Aktuální cena"
                  subtitle={
                    contentfulRdHouse.stav.stav === 'prodáno'
                      ? 'PRODÁNO'
                      : contentfulRdHouse.stav.stav === 'rezervováno'
                      ? 'REZERVOVÁNO'
                      : `${contentfulRdHouse.cena} Kč s DPH`
                  }
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Section>
    </div>
  );
};

export default Hero;
