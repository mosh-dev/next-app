import Header from '../components/header';
import withMaterialUI from './shared/mui/with-mui';

import '../styles/style.scss';
import {Component} from 'react';

const axios = require('axios').default;

class Home extends Component {
  static async getInitialProps(): Promise<any> {
    const response = await axios.get(process.env.BLOGGER_URL + 'posts')
      .then(res => res)
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
