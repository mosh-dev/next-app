import React from 'react';
import withMaterialUI from './shared/mui/with-mui';

const About = ({title = 'About Page'}) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default withMaterialUI(About);
