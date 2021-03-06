import { initializeDb } from './db';
import { server } from './server';

//eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
  try {
    // initialize database
    await initializeDb();
    const { url } = await server.listen();
    console.log('\x1b[32m', `🚀 Server ready at ${url}`);
  } catch (error) {
    console.error('\x1b[33m', '---------- ERROR -----------');
    console.error('\x1b[33m', error.message);
  }
})();
