import withMaterialUI from './shared/mui/with-mui';
import React, {Component} from 'react';
import {PostsComponent} from '../app/components/postsComponent';
import withDrawer from '../app/components/drawerWrapper';
import {CommonDataService} from '../app/services/commonData.service';


class Posts extends Component {
  static async getInitialProps(): Promise<any> {
    const cds = CommonDataService.getInstance();
    const posts = await cds.getPosts();
    return {posts}
  }

  render() {
    return (
      <PostsComponent {...this.props}/>
    )
  }

}

export default withMaterialUI(withDrawer(Posts));
