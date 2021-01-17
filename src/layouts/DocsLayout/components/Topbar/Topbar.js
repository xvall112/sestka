import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  FormControlLabel,
  Switch,
  Typography,
  List,
  ListItem,
  Button,
  makeStyles
} from '@material-ui/core';

import { Image } from 'components/atoms';
import { isLightMode, sessionStorage } from 'utils';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    paddingRight: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  formControlLabel: {
    marginRight: 0,
  },
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  const [isLightModeTheme, setLightModeTheme] = useState(false);

  useEffect(() => {
    setLightModeTheme(isLightMode());
  }, []);

  const toggleMode = () => {
    const currentMode = sessionStorage.getItem('themeMode') || '';
    if (currentMode === 'dark') {
      sessionStorage.setItem('themeMode', 'light');
    } else {
      sessionStorage.setItem('themeMode', 'dark');
    }

    window.location.reload();
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar>
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src={isLightModeTheme ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'}
              alt="thefront"
              lazy={false}
            />
          </a>
        </div>
        <Box flexGrow={1} />
        <FormControlLabel
          control={<Switch color="primary" checked={isLightModeTheme} />}
          label={
            <Typography
              variant="body1"
              color="textSecondary"
            >
              Light
            </Typography>
          }
          labelPlacement="end"
          onChange={() => toggleMode()}
          className={classes.formControlLabel}
        />
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
              <Button
                className={classes.listItemText}
                component="a"
                href="/"
                variant="outlined"
              >
                SEE ALL PAGES
              </Button>
            </ListItem>
            <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                href="https://material-ui.com/store/items/the-front-landing-page/"
                className={classes.listItemButton}
              >
                Buy Now
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;