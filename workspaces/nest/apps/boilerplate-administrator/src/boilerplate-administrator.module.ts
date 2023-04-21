import { Module } from '@nestjs/common';

// modules
import { BoilerplateDatabaseModule } from '@app/boilerplate-database';
import { AdministratorsModule } from './modules/administrators/administrators.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    // modules
    BoilerplateDatabaseModule,
    AdministratorsModule,
    UsersModule
  ]
})
export class BoilerplateAdministratorModule {}
