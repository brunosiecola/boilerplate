import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { User } from './entities/user.entity';
import { UserResetPassword } from './entities/user-reset-password.entity';

// subscribers
import { UsersSubscriber } from './users.subscriber';
import { UsersResetPasswordSubscriber } from './users-reset-password.subscriber';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([User, UserResetPassword])
  ],
  providers: [
    // subscribers
    UsersSubscriber,
    UsersResetPasswordSubscriber
  ]
})
export class UsersModule {}
