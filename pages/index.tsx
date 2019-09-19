import withMaterialUI from './shared/mui/with-mui';

import '../styles/style.scss';
import {Component} from 'react';
import {HttpClient} from '../app/services/httpClient';
import Link from 'next/link';

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
    return (
      <div className="root">
        <ul>
          {(posts || []).map(post => <li key={post.id}>
            <Link href='/about'>
              <a>{post.title}</a>
            </Link>
          </li>)}
        </ul>
      </div>
    )
  }

}

export default withMaterialUI(Home);
