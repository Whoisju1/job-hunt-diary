interface IConfig<T> {
  production: T;
  test: T;
  development: T;
  readonly [x:string]: T;
}

const {
  NODE_ENV = 'development',
  DATABASE_HOSTNAME: dbHost,
  DATABASE_PORT: dbPort,
  DATABASE_PASSWORD: dbPass,
  DATABASE_USER: dbUser,
  DATABASE_NAME: dbName,
} = process.env as { [x: string]: string };

interface IEnv {
  dbHost: string;
  dbPort: string;
  dbPass: string;
  dbUser: string;
  dbName: string;
  nodeEnv: string;
}

const config: IConfig<IEnv> =  {
  development: {
    nodeEnv: NODE_ENV,
    dbHost,
    dbPort,
    dbPass,
    dbUser,
    dbName,
  },
  test: {
    nodeEnv: NODE_ENV,
    dbHost,
    dbPort,
    dbPass,
    dbUser,
    dbName,
  },
  production: {
    nodeEnv: NODE_ENV,
    dbHost,
    dbPort,
    dbPass,
    dbUser,
    dbName,
  }
};

export default config[NODE_ENV];
