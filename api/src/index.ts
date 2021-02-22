import { server } from './server';
import sequelize from './db';

(async () => {
  await sequelize.authenticate();
  console.log('Database connection has been established successfully.');

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
})();

