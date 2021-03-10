import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import models from '../sequelizeModels';

const {
  dbHost: host,
  dbPass,
  dbPort,
  dbUser,
  dbName,
} = config;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  dialect: 'mysql',
  host,
  logging: console.log,
  port: parseInt(dbPort),
});

sequelize.addModels(models);

export const initializeDb = async (): Promise<void> => {
  await sequelize.authenticate();
  await sequelize.sync({
    force: config.nodeEnv === 'test',
    logging: false,
  });
  console.log('\x1b[32m', 'Database connection has been established successfully.');
};

export default sequelize;
