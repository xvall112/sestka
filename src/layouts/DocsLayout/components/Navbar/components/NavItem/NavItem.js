import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Typography,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  item: {
    display: 'flex',
    textTransform: 'none',
    width: '100%'
  },
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      button
      component={'a'}
      href={href}
      {...rest}
    >
      <Typography variant="body2">{title}</Typography>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string
};

export default NavItem;