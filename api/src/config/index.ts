interface IConfig<T> {
  production: T;
  test: T;
  development: T;
  readonly [x:string]: T;
}

type NodeEnv = 'development' | 'production' | 'test';

const {
  NODE_ENV = 'development' ,
  DATABASE_HOSTNAME: dbHost,
  DATABASE_PORT: dbPort,
  DATABASE_PASSWORD: dbPass,
  DATABASE_USER: dbUser,
  DATABASE_NAME: dbName,
} = process.env as {
  [x: string]: string;
  NODE_ENV: NodeEnv;
};

interface IEnv {
  dbHost: string;
  dbPort: string;
  dbPass: string;
  dbUser: string;
  dbName: string;
  nodeEnv: NodeEnv;
}

const config: IConfig<IEnv> =  {
  development: {
    dbHost,
    dbName,
    dbPass,
    dbPort,
    dbUser,
    nodeEnv: NODE_ENV,
  },
  production: {
    dbHost,
    dbName,
    dbPass,
    dbPort,
    dbUser,
    nodeEnv: NODE_ENV,
  },
  test: {
    dbHost,
    dbName,
    dbPass,
    dbPort,
    dbUser,
    nodeEnv: NODE_ENV,
  },
};

export default config[NODE_ENV];
