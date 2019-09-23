import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {muiTheme} from '../../../theme';


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
        <MuiThemeProvider theme={muiTheme}>
          <ComposedComponent {...this.props}/>
        </MuiThemeProvider>
      );
    }
  }

  return HOC;
};

export default withMaterialUI;
