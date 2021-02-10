import React from 'react';
import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';

import CardHouse from './Card';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  root: {},

  swiperNav: {
    '& .swiper-slide': { marginBottom: '50px' },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.main,
    },
    '& .swiper-button-next': {
      color: theme.palette.primary.main,
      top: '50%',
      bottom: 'auto',
      right: 0,
    },
    '& .swiper-button-prev': {
      color: theme.palette.primary.main,
      top: '50%',
      bottom: 'auto',
      right: 'auto',
      left: 0,
    },
  },
}));

const query = graphql`
  query {
    house: allContentfulRdHouse(sort: { fields: name }) {
      edges {
        node {
          slug
          name
          plochaParcely
          introImages {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
          stav {
            stav
          }
        }
      }
    }
  }
`;

const Services = ({ className, ...rest }) => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Na výběr máte z šesti domů{' '}
      <Typography component="span" variant="inherit" color="primary">
        "ŠESTKA"
      </Typography>
    </Typography>
  );

  const subtitle = '';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container>
          <Swiper
            pagination={{ clickable: true }}
            navigation={isMd ? true : false}
            spaceBetween={0}
            slidesPerView={isMd ? 3 : 1}
            className={clsx(classes.root, classes.swiperNav, className)}
          >
            {data.house.edges.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <CardHouse item={item} />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Section>
    </div>
  );
};

export default Services;
