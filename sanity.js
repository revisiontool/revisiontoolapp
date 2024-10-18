// sanity.js
import {createClient} from 'next-sanity';

const client = createClient({
  projectId: 'rsfa44n4',
  dataset: 'revisiontool',
  apiVersion: '2021-10-21',
  useCdn: false
  // Add other configuration options if necessary
});

export default client;