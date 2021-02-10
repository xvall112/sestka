import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SwiperImage from '../Swiper/SwiperImageAutoplay';
import {
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

import { CardProduct } from 'components/organisms';

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

const Card = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={11}>
      <CardProduct
        liftUp
        mediaContent={
          <>
            <SwiperImage pagination items={item.node.introImages} />
            <div className={classes.locationCardPrice}>
              <Typography
                variant="body1"
                className={
                  item.node.stav.stav === 'volné'
                    ? classes.stavVolne
                    : item.node.stav.stav === 'prodáno'
                    ? classes.stavProdano
                    : classes.stavRezervovano
                }
              >
                {item.node.stav.stav}
              </Typography>
            </div>
          </>
        }
        cardContent={
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color="textPrimary"
                align="left"
                className={classes.fontWeight700}
              >
                {item.node.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemIcon className={classes.listItemIcon}>
                    <NoSsr>
                      <i
                        className={clsx('fas fa-map-marker-alt', classes.pin)}
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
                    <ListItemText primary={`${item.node.plochaParcely} ㎡`} />
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
              <Link to={`/dum/${item.node.slug}`}>
                <Button variant="outlined" color="primary" size="large">
                  Vstoupit do {item.node.name}
                </Button>
              </Link>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  );
};

export default Card;
