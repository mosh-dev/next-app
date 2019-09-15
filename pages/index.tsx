import Header from '../app/components/header';
import withMaterialUI from './shared/mui/with-mui';

import '../styles/style.scss';
import {Component} from 'react';
import {HttpClient} from '../app/services/httpClient';

class Home extends Component {
  static async getInitialProps(): Promise<any> {
    const http = HttpClient.getInstance();
    const response = await http.get('posts')
      .toPromise()
      .catch();
    return {posts: response.data}
  }

  render() {
    const {posts} = this.props as any;
    return (<div>
      <Header/>
      <ul>
        {(posts || []).map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>)
  }

}

export default withMaterialUI(Home);
