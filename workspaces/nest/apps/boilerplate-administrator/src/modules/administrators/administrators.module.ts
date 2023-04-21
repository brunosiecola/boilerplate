import { Module } from '@nestjs/common';

// modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

// entities
import { Administrator } from '@app/boilerplate-database/modules/administrators/entities/administrator.entity';

// controllers
import { AdministratorsController } from './administrators.controller';

// services
import { AdministratorsService } from './administrators.service';

// strategies
import { JwtStrategy } from '../../utils/strategies/jwt/jwt.strategy';

@Module({
  imports: [
    // modules
    TypeOrmModule.forFeature([Administrator]),
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
    // strategies
    JwtStrategy
  ]
})
export class AdministratorsModule {}
