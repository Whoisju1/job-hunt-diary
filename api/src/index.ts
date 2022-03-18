import { initializeDb } from './db';
import logger from './logger';
import { server } from './server';

//eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
  try {
    // initialize database
    await initializeDb();
    logger.info('database connected.');
    const { url } = await server.listen();
    logger.info(`🚀 Server ready at ${url}`);
  } catch (error) {
    logger.error((error as Error).message);
  }
})();
