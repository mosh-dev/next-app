import {createMuiTheme} from '@material-ui/core';
import {indigo, pink, red} from '@material-ui/core/colors';

const LATO_FONT = 'lato, sans-serif';

export const muiTheme = createMuiTheme(
  {
    typography: {
      fontFamily: LATO_FONT
    },
    palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  }
);
