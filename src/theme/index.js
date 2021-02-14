import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { sessionStorage } from 'utils';

import { light, dark } from './palette';

const mode = sessionStorage.getItem('themeMode') || 'light';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: mode === 'light' ? light : dark,
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
      MuiChip: {
        root: { borderRadius: '5px' },
      },
      MuiFormHelperText: {
        root: { backgroundColor: '#F7F9FA' },
        contained: {
          marginRight: 0,
          marginLeft: 0,
          paddingLeft: '14px;',
          paddingRight: '14px;',
        },
      },
    },
  }),
);

export default theme;
