import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Administrator } from './entities/administrator.entity';
import { AdministratorResetPassword } from './entities/administrator-reset-password.entity';

// subscribers
import { AdministratorsSubscriber } from './administrators.subscriber';
import { AdministratorsResetPasswordSubscriber } from './administrators-reset-password.subscriber';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([Administrator, AdministratorResetPassword])
  ],
  providers: [
    // subscribers
    AdministratorsSubscriber,
    AdministratorsResetPasswordSubscriber
  ]
})
export class AdministratorsModule {}
