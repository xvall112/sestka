import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { SwiperImage } from '../../components';
import {
  useMediaQuery,
  Grid,
  Typography,
  colors,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  NoSsr,
  Button,
} from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import {
  DescriptionListIcon,
  Section,
  CardProduct,
} from 'components/organisms';
import { LearnMoreLink } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: theme.spacing(3),
    '& i': {
      color: colors.blueGrey[500],
    },
  },
  fontWeight500: {
    fontWeight: 500,
  },
  propertyList: {
    display: 'flex',
  },
  pin: {
    color: `${colors.deepOrange[500]} !important`,
  },
  divider: {
    margin: theme.spacing(3, 0, 2, 1),
  },
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
  },
  locationCardPrice: {
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    zIndex: 3,
  },
  stavProdano: {
    fontWeight: 700,
    color: colors.red[500],
    textTransform: 'uppercase',
  },
  stavVolne: {
    fontWeight: 700,
    color: colors.green[500],
    textTransform: 'uppercase',
  },
  stavRezervovano: {
    fontWeight: 700,
    color: colors.orange[500],
    textTransform: 'uppercase',
  },
  fontWeight700: {
    fontWeight: 700,
  },
  locationCardReviewAvatar: {
    marginLeft: theme.spacing(-2),
    border: `3px solid ${theme.palette.background.paper}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  locationCardReviewStar: {
    color: colors.yellow[800],
    marginRight: theme.spacing(1 / 2),
  },
  reviewCount: {
    marginLeft: theme.spacing(1),
  },
  image: {
    borderBottomLeftRadius: '40%',
  },
}));

const query = graphql`
  {
    allContentfulRdHouse(sort: { fields: name }) {
      nodes {
        name
        plochaParcely
        introImages {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        stav {
          stav
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
      Build accessible React apps&nbsp;
      <Typography component="span" variant="inherit" color="primary">
        with speed
      </Typography>
    </Typography>
  );

  const subtitle =
    'Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components.';

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
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={2}>
          {data.allContentfulRdHouse.nodes.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={4} data-aos="fade-up">
              <CardProduct
                withShadow
                liftUp
                mediaContent={
                  <>
                    <SwiperImage
                      navigationButtonStyle={classes.swiperNavButton}
                      items={item.introImages}
                      imageClassName={classes.image}
                    />
                    <div className={classes.locationCardPrice}>
                      <Typography
                        variant="body1"
                        className={
                          item.stav.stav === 'volné'
                            ? classes.stavVolne
                            : item.stav.stav === 'prodáno'
                            ? classes.stavProdano
                            : classes.stavRezervovano
                        }
                      >
                        {item.stav.stav}
                      </Typography>
                    </div>
                  </>
                }
                cardContent={
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        align="left"
                        className={classes.fontWeight700}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <List disablePadding>
                        <ListItem disableGutters>
                          <ListItemIcon className={classes.listItemIcon}>
                            <NoSsr>
                              <i
                                className={clsx(
                                  'fas fa-map-marker-alt',
                                  classes.pin,
                                )}
                              />
                            </NoSsr>
                          </ListItemIcon>
                          <ListItemText primary={`Sázky, Příbram`} />
                        </ListItem>
                      </List>
                    </Grid>

                    <Grid container>
                      <Grid item xs={6}>
                        <List disablePadding>
                          <ListItem disableGutters className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                              <NoSsr>
                                <i className="fas fa-home" />
                              </NoSsr>
                            </ListItemIcon>
                            <ListItemText
                              primary={`${item.plochaParcely} ㎡`}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={6}>
                        <List disablePadding className={classes.propertyList}>
                          <ListItem disableGutters className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                              <NoSsr>
                                <i className="fas fa-parking" />
                              </NoSsr>
                            </ListItemIcon>
                            <ListItemText primary={2} />
                          </ListItem>
                          <ListItem disableGutters className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                              <NoSsr>
                                <i className="fas fa-bath" />
                              </NoSsr>
                            </ListItemIcon>
                            <ListItemText primary={1} />
                          </ListItem>
                          <ListItem disableGutters className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                              <NoSsr>
                                <i className="fas fa-door-open" />
                              </NoSsr>
                            </ListItemIcon>
                            <ListItemText primary={`4+kk`} />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item container justify="center" xs={12}>
                      <Button
                        variant="outlined"
                        color="primary"
                        disabled={item.stav.stav === 'prodáno' ? true : false}
                      >
                        Vstoupit do {item.name}
                      </Button>
                    </Grid>
                  </Grid>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
