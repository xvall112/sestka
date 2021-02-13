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
  Box,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import DoneIcon from '@material-ui/icons/Done';

import Map from '../Map/Map';
import { mapData } from '../../data/index';

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

  gridItemPositioned: {
    marginTop: '25%',
  },

  propsGrid: {
    height: '100%',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { properties } = data;

  return (
    <Box mb={7} className={className} {...rest}>
      <Grid
        container
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Map
            pins={mapData.pins}
            center={[49.676652203508134, 14.019295458063725]}
          />
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
              label="LOKALITA"
              title="DOSTUPNOST. PŘÍRODA.  SOUKROMÍ."
              subtitle=""
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {properties.map((item, index) => (
                <Grid item xs={12} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar variant="rounded" className={classes.avatar}>
                        <DoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary" noWrap>
                      {item.title}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            {/* <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.cta}
              data-aos="fade-up"
            >
              Objevte více v okolí
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
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
