import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Contact } from './components';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Footer } from './components';
import Header from './components/header/header';
import { SectionAlternate } from 'components/organisms';
import CookiesPanel from '../../views/IndexView/components/CookiePanel';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Header />
      <Divider />

      <main>{children}</main>
      <SectionAlternate id="contact">
        <Contact />
      </SectionAlternate>
      <Footer />
      <CookiesPanel />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
