import React, {Component} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import Link from 'next/link';

export class PostsComponent extends Component {
  render() {
    const {posts} = this.props as any;
    return (
      <Grid container>
        {(posts || []).map(post => (
          <Grid key={post.id} item md={3}>
            <Card style={{margin: '18px 8px'}}>
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
    )
  }

}
