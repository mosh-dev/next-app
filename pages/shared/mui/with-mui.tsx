import {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import Head from 'next-server/head';

import '../../../styles/spinner.scss';
import {muiTheme} from './theme';


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
      return (
        <>
          <Head>
            <title>NextJs App</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            <link rel="shortcut icon" href="../../../static/favicon.ico"/>
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
