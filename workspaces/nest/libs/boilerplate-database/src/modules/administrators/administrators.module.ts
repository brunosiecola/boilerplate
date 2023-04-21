import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Administrator } from './entities/administrator.entity';

// subscribers
import { AdministratorsSubscriber } from './administrators.subscriber';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([Administrator])
  ],
  providers: [
    // subscribers
    AdministratorsSubscriber
  ]
})
export class AdministratorsModule {}
