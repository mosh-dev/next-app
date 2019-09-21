import {HttpClient} from '../app/services/httpClient';

const About = ({title = 'About Page'}) => {
  const http = HttpClient.getInstance();
  return <h1>{title}</h1>;
};

export default About;
