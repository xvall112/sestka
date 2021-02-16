import React from 'react';

import PropTypes from 'prop-types';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Gif from '../../../../assets/gi/animateColor.gif';

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'inside',
  },
}));

const ModifyHouse = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        direction={isMd ? 'row' : 'column-reverse'}
        spacing={4}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
        >
          <img src={Gif} alt="dum" style={{ height: '100%', width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionHeader
            label="EXTERIÉR"
            title={
              <span>
                Vizuální podobu domu si můžete upravit{' '}
                <Typography color="primary" variant="inherit" component="span">
                  podle sebe!
                </Typography>
              </span>
            }
            subtitle={
              <ul className={classes.list}>
                <li>Barevné řešení - okna , fasáda</li>
                <li>Zpevněné plochy - vnitřní stání</li>
                <li>Chodník - možno provést podle výběru kupujícího</li>
                <li>Na střešní folii lze položit 'zelenou střechu'</li>
              </ul>
            }
            align="left"
            fadeUp
            disableGutter
          />
        </Grid>
      </Grid>
    </div>
  );
};

ModifyHouse.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ModifyHouse;
