import withMaterialUI from './shared/mui/with-mui';
import React, {Component} from 'react';
import MiniDrawer from '../app/components/drawer';


class Home extends Component {
  static async getInitialProps(): Promise<any> {
    return {}
  }

  render() {
    return (
      <>
        <MiniDrawer/>
      </>
    )
  }

}

export default withMaterialUI(Home);
