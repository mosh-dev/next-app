import {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {indigo, pink, red} from '@material-ui/core/colors';
import Head from 'next-server/head';


const withMaterialUI = ComposedComponent => {
  class HOC extends Component {
    static async getInitialProps(ctx) {
      const {req} = ctx;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
      if (ComposedComponent.getInitialProps) {
        const subProps = await ComposedComponent.getInitialProps(ctx);
        return {
          ...subProps,
          userAgent
        }
      }
      return {userAgent};
    }

    render() {
      const LATO_FONT = 'lato, sans-serif';
      const muiTheme = createMuiTheme(
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
      return (
        <>
          <Head>
            <title>NextJs App</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          </Head>
          <MuiThemeProvider theme={muiTheme}>
            <ComposedComponent {...this.props}/>
          </MuiThemeProvider>
        </>
      );
    }
  }

  return HOC;
};

export default withMaterialUI;
