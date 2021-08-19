import 'dotenv/config';

import paths from './paths';
import definitions from './definitions';

const port = process.env.PORT || 3000;

export default {
  swagger: '2.0',
  info: {
    description: 'Excel File uploader.',
    version: '1.0.0',
    title: 'File uploader',
    servers: [`http://localhost:${port}`],
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  basePath: '/api/v1/',
  produces: ['application/json'],
  consumes: ['application/json'],
  paths,
  definitions,
};
