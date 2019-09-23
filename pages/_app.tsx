import React from 'react';
import App from 'next/app';
import '../styles/style.scss';
import '../styles/spinner.scss';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp
