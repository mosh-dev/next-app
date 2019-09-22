import withMaterialUI from './shared/mui/with-mui';

import '../styles/style.scss';
import React, {Component} from 'react';
import {HttpClient} from '../app/services/httpClient';
import Link from 'next/link';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import Header from '../app/components/header';


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
    const cardStyle = {
      margin: '18px 8px'
    };
    return (
      <div className="root">
        <Header/>
        <Grid container>
          {(posts || []).map(post => (
            <Grid key={post.id} item md={3}>
              <Card style={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    style={{
                      height: 160,
                    }}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      <Link href='/about'>
                        <a>{post.title}</a>
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

}

export default withMaterialUI(Home);
