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

export default sequelize;
