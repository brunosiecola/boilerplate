import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { User } from './entities/user.entity';

// subscribers
import { UsersSubscriber } from './users.subscriber';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    // subscribers
    UsersSubscriber
  ]
})
export class UsersModule {}
