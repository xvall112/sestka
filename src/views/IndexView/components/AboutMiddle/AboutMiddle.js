import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Gallery from 'react-photo-gallery';
import { CardBase } from 'components/organisms';

export const query = graphql`
  {
    contentfulKontaktImages {
      images {
        file {
          url
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
    '& img': { borderRadius: '10px' },
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
  /* image: {
    zIndex: 1,
    position: 'relative',
    bottom: theme.spacing(-1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }, */
  textWhite: {
    color: 'white',
  },
}));

const AboutMiddle = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const data = useStaticQuery(query);
  const photos = data.contentfulKontaktImages.images.map((image, index) => {
    return {
      src: image.file.url,
      width: 3,
      height: 2,
    };
  });
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
        >
          <Gallery photos={photos} />
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
