import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import Img from 'gatsby-image';

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "ACCamera_2.jpg" } }) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const NotFoundCover = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              label="404"
              title="Uh oh."
              subtitle={<span>Tady nic není </span>}
              titleProps={{
                variant: 'h3',
              }}
              labelProps={{
                color: 'secondary',
                className: classes.label,
                variant: 'h5',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  zpět
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={<Img fluid={data.contentfulAsset.fluid} alt="obrazek 404" />}
      />
    </div>
  );
};

export default NotFoundCover;
