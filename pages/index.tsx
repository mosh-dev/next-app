import React, {Component} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import withMaterialUI from '../app/components/shared/mui/with-mui';
import {PostsComponent} from '../app/components/postsComponent';
import {CommonDataService} from '../app/services/commonData.service';


class Home extends Component {
  static async getInitialProps(): Promise<any> {
    const cds = CommonDataService.getInstance();
    const posts = await cds.getPosts();
    return {posts}
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
