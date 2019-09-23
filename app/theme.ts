import {createMuiTheme} from '@material-ui/core';
import {
  indigo,
  pink,
  red,
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  lightBlue,
  lightGreen,
  lime,
  orange,
  purple,
  teal,
  yellow
} from '@material-ui/core/colors';

const LATO_FONT = 'lato, sans-serif';

export const muiTheme = createMuiTheme(
  {
    typography: {
      fontFamily: LATO_FONT
    },
    palette: {
      primary: blue,
      secondary: orange,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    direction: 'ltr'
  }
);
