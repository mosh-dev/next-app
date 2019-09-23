import React, {Component} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import withMaterialUI from '../app/components/shared/mui/with-mui';
import {PostsComponent} from '../app/components/postsComponent';
import {CommonDataService} from '../app/services/commonData.service';


class Home extends Component {
  static async getInitialProps(): Promise<any> {
    const cds = CommonDataService.getInstance();
    let posts = await cds.getPosts();
    posts = (posts as any[]).slice(0, 8);
    posts
      .forEach(post => post.thumb = 'https://picsum.photos/280/160/');
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
