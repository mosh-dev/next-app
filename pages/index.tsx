import Header from '../components/header';
import withMaterialUI from './shared/mui/with-mui';

import '../styles/style.scss';

const axios = require('axios').default;

const Home = ({posts}) => (
  <div>
    <Header/>
    <ul>
      {(posts).map(post => {
        return <li key={post.id}>{post.title}</li>
      })}
    </ul>
  </div>
);

Home.getInitialProps = async () => {
  const response = await axios.get(process.env.BLOGGER_URL + 'posts')
    .then(res => res)
    .catch();
  return {posts: response.data}
};

export default withMaterialUI(Home);
