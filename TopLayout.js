import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './src/theme';

import AOS from 'aos';

import 'swiper/swiper.scss';
import 'assets/css/index.css';
import 'swiper/components/navigation/navigation.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';
export default function TopLayout(props) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper elevation={0}>{props.children}</Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
