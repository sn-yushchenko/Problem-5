import "reflect-metadata";
import {DataSource} from "typeorm";
import config from "./configurations";

const {orm} = config;
console.log(`${__dirname}/entities/*.entity.{ts,js}`);
export const postgresSource = new DataSource({
    type: 'postgres',
    host: orm.host,
    port: orm.port,
    username: orm.username,
    password: orm.password,
    database: orm.database,
    entities: [`${__dirname}/../entities/*.entity.{ts,js}`],
    migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
    synchronize: orm.synchronize === 'true',
});
