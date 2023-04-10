
export const configuration = () => ({
  port: +process.env.APP_PORT,
  database: {
    type: 'mysql',
    host: process.env.APP_DATABASE_HOST,
    port: 3306,
    username: process.env.APP_DATABASE_USERNAME,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: process.env.APP_DATABASE_SYNCHRONIZE,
    logging: ['error']
  }
});
