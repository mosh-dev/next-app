import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';

import '../../../styles/style.scss';
import '../../../styles/spinner.scss';
import {muiTheme} from '../../../app/theme';
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
      return (
        <>
          <Head>
            <title>NextJs App</title>
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
