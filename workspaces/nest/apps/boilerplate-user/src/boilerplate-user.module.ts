import { Module } from '@nestjs/common';

// modules
import { BoilerplateDatabaseModule } from '@app/boilerplate-database';

@Module({
  imports: [
    // modules
    BoilerplateDatabaseModule
  ]
})
export class BoilerplateUserModule {}
