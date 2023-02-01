import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
let hostA =
  process.env.ENVIRONMENT !== 'prod'
    ? {}
    : {
        name: 'default',
        extra: {
          socketPath: process.env.INSTANCE_UNIX_SOCKET,
        },
      };

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  ...hostA,
  host: process.env.INSTANCE_UNIX_SOCKET,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  entities: ['dist/src/**/entities/*.entity.js'],
  migrations: ['dist/database/*-migrations.ts'],
  // synchronize: process.env.ENVIRONMENT !== 'prod',
  logging: true,
  charset: 'utf8',
};
