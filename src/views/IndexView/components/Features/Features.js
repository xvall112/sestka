import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  colors,
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  Button,
  NoSsr,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import Map from '../Map/Map';

const useStyles = makeStyles(theme => ({
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  cta: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
  },
  featureItems: {
    width: '100%',
    height: '100%',
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/bg-shapes.svg) no-repeat top center',
    backgroundSize: 'contain',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  gridItemPositioned: {
    marginTop: '25%',
  },
  iconCover: {
    width: 60,
    height: 60,
    background:
      'url(https://assets.maccarianagency.com/the-front/illustrations/bgicon.svg) no-repeat center center',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.red[500],
    fontSize: 35,
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
      fontSize: 50,
    },
  },
  propsGrid: {
    height: '100%',
  },
}));

const mapData = [
  {
    location: {
      y: 45.453211,
      x: 9.248383,
      address: 'Via A.G. Alaimo 147, 55027',
    },
  },
  {
    location: {
      y: 45.419211,
      x: 9.021383,
      address: 'Via Rocca de Baldi 95, 440368',
    },
  },
  {
    location: {
      y: 45.473211,
      x: 9.298383,
      address: 'Via Firenze 134, 45588',
    },
  },
  {
    location: {
      y: 45.461211,
      x: 9.000383,
      address: 'Via Cavour 29, 201558',
    },
  },
  {
    location: {
      y: 45.413211,
      x: 9.398383,
      address: 'Via Bologna 33, 220156',
    },
  },
  {
    location: {
      y: 45.569211,
      x: 9.128383,
      address: 'Vicolo Tre Marchetti 127, 350125',
    },
  },
  {
    location: {
      y: 45.483211,
      x: 9.148383,
      address: 'Via Lombardi 146, 45830',
    },
  },
  {
    location: {
      y: 45.313211,
      x: 9.012383,
      address: 'Via Guantai Nuovi 99, 56989',
    },
  },
];

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, properties } = data;

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Map pins={mapData} center={[45.464211, 9.011383]} />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
            className={classes.propsGrid}
          >
            <SectionHeader
              label="SEAMLESS INTEGRATION"
              title="Data transfer is just a few clicks."
              subtitle="If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason."
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {properties.map((item, index) => (
                <Grid item xs={12} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar
                        src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.cta}
              data-aos="fade-up"
            >
              Get started
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Features;
