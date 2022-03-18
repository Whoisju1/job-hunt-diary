import { Sequelize } from 'sequelize-typescript';
import config from '#config';
// import logger from '#logger';
import models from '#models';

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
  // logging: config.nodeEnv !== 'production' ? (message: string) => logger.log('info', message) : false,
  logging: false,
  port: parseInt(dbPort),
});

sequelize.addModels(models);

export const initializeDb = async (): Promise<void> => {
  await sequelize.authenticate();
  await sequelize.sync({
    force: config.nodeEnv === 'test',
  });
};

export default sequelize;
