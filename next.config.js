const webpack = require('webpack');
require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['BLOGGER_URL'])
    );
    return config;
  }
});
