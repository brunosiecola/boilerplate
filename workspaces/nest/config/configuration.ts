import { Administrator } from '@app/boilerplate-database/modules/administrators/entities/administrator.entity';
import { AdministratorResetPassword } from '@app/boilerplate-database/modules/administrators/entities/administrator-reset-password.entity';
import { User } from '@app/boilerplate-database/modules/users/entities/user.entity';
import { UserResetPassword } from '@app/boilerplate-database/modules/users/entities/user-reset-password.entity';

export const configuration = () => ({
  port: +process.env.APP_PORT,
  database: {
    type: 'mysql',
    host: process.env.APP_DATABASE_HOST,
    port: 3306,
    username: process.env.APP_DATABASE_USERNAME,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_DATABASE,
    entities: [Administrator, AdministratorResetPassword, User, UserResetPassword],
    synchronize: process.env.APP_DATABASE_SYNCHRONIZE,
    logging: ['error']
  }
});
