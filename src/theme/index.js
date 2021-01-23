import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import { light, dark } from './palette';
import '@fontsource/dm-sans';

const theme = responsiveFontSizes(
  createMuiTheme({
    layout: {
      contentWidth: 1236,
    },
    typography: {
      fontFamily: 'DM Sans',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    backgroundGradient: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white',
        },
      },
    },
  }),
);

export default theme;
