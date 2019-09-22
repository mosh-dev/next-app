import {createMuiTheme} from '@material-ui/core';
import {indigo, pink, red} from '@material-ui/core/colors';

const LATO_FONT = 'lato, sans-serif';

export const muiTheme = createMuiTheme(
  {
    typography: {
      fontFamily: LATO_FONT
    },
    palette: {
      primary: pink,
      secondary: indigo,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    direction: 'ltr'
  }
);
