import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, useMediaQuery } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Img from 'gatsby-image';

export const query = graphql`
  {
    contentfulKontaktImages {
      images {
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
    },
    '& img': {
      borderRadius: '5px',
      position: 'relative',
      maxWidth: '100%',
    },
  },

  header: {
    zIndex: 4,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      maxWidth: '50%',
      transform: 'translateY(-50%)',
    },
  },
  contactImg: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(0),
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const AboutMiddle = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const data = useStaticQuery(query);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
          spacing={isMd ? 1 : 0}
        >
          {data.contentfulKontaktImages.images.map((image, index) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                className={classes.contactImg}
              >
                <Img fluid={image.fluid} alt="obrazek domu" />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          <Section className={classes.header}>
            <SectionHeader
              title={<span className={classes.textWhite}>Kontaktujte Nás</span>}
              subtitle={
                <span className={classes.textWhite}>
                  {' '}
                  Šestka se nachází v krásném prostředí městské části Sázky v
                  Příbrami a ve vysokém standardu zajišťuje klidné a pohodlné
                  bydlení pro všechny.
                </span>
              }
              ctaGroup={[
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollTo('#contact')}
                >
                  kontakt
                </Button>,
              ]}
              align="left"
              data-aos="fade-up"
            />
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

AboutMiddle.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutMiddle;
