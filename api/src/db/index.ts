import { Sequelize } from 'sequelize';
import config from '../config';

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
});

export default sequelize;
