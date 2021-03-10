import { initializeDb } from './db';
import { server } from './server';

(async () => {
  try {
    // initialize database
    await initializeDb();
    const { url } = await server.listen();
    console.log('\x1b[32m', `🚀 Server ready at ${url}`);
  } catch (error) {
    console.log('\x1b[33m', '---------- ERROR -----------');
    console.log('\x1b[33m', error.message);
  }
})();
