import './dotenv';

export default {
    orm: {
        port: parseInt(process.env.DB_PORT),
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: process.env.DB_SYNCRHONIZE
    },
    application: {
        port: parseInt(process.env.PORT)
    }
}