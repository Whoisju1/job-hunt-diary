import { server } from './server';
import './db';

server.listen()
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
