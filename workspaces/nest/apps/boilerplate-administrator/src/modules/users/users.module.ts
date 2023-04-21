import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { User } from '@app/boilerplate-database/modules/users/entities/user.entity';

// controllers
import { UsersController } from './users.controller';

// services
import { UsersService } from './users.service';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([User])
  ],
  controllers: [
    // controllers
    UsersController
  ],
  providers: [
    // services
    UsersService
  ]
})
export class UsersModule {}
