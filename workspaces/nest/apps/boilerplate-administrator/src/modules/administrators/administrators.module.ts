import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

// entities
import { Administrator } from '@app/boilerplate-database/modules/administrators/entities/administrator.entity';
import { AdministratorResetPassword } from '@app/boilerplate-database/modules/administrators/entities/administrator-reset-password.entity';

// controllers
import { AdministratorsController } from './administrators.controller';

// services
import { AdministratorsService } from './administrators.service';
import { AdministratorsResetPasswordService } from './administrators-reset-password.service';
import { BoilerplateEmailService } from '@app/boilerplate-email';

// strategies
import { JwtStrategy } from '../../utils/strategies/jwt/jwt.strategy';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([Administrator, AdministratorResetPassword]),
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.APP_BOILERPLATE_ADMINISTRATOR_API_SECRET_KEY,
          signOptions: {
            expiresIn: +process.env.APP_BOILERPLATE_ADMINISTRATOR_API_EXPIRES_IN
          }
        };
      }
    })
  ],
  controllers: [
    // controllers
    AdministratorsController
  ],
  providers: [
    // services
    AdministratorsService,
    AdministratorsResetPasswordService,
    BoilerplateEmailService,
    // strategies
    JwtStrategy
  ]
})
export class AdministratorsModule {}
