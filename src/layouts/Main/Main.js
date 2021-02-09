import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Contact } from './components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';
import Header from './components/header/header';
import { SectionAlternate } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Header />

      <main>
        <Divider />
        {children}
      </main>
      <SectionAlternate id="contact">
        <Contact />
      </SectionAlternate>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
