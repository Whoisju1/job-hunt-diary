import config from '../config';
import winston from 'winston';

const logger = winston.createLogger();

logger.add(
  new winston.transports.Console({
    silent: config.nodeEnv !== 'development',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
    level: 'info',
  }));
export default logger;

