import { server } from './server';
import sequelize from './db';

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({
      logging: console.log
    });
    console.log('\x1b[32m', 'Database connection has been established successfully.');

    const { url } = await server.listen();
    console.log('\x1b[32m', `🚀 Server ready at ${url}`);
  } catch (error) {
    console.log('\x1b[33m', '---------- ERROR -----------');
    console.log('\x1b[33m', error.message);
  }
})();
