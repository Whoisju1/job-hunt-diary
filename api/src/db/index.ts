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
  host,
  dialect: 'mysql',
  port: parseInt(dbPort),
  logging: console.log,
});

sequelize.addModels(models);

export default sequelize;
