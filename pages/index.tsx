import React, {Component} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import withMaterialUI from '../app/components/shared/mui/with-mui';
import {PostsComponent} from '../app/components/postsComponent';


class Home extends Component {
  static async getInitialProps(): Promise<any> {
    return {posts: []}
  }

  render() {
    return (
      <>
        <PostsComponent {...this.props}/>
      </>
    )
  }

}

export default withMaterialUI(withDrawer(Home));
